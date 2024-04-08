import React, { useState, useCallback } from 'react';

const Callback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent increment={increment} />
    </div>
  );
};

const ChildComponent = ({ increment }) => {
  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Callback;
