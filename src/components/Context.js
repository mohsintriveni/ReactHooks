import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const Context = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
};

const Toolbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <span>Current Theme: {theme}</span>
    </div>
  );
};

export default Context;
