import './App.css';
import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import Table from './components/Table';
import PrimeNumber from './components/PrimeNumber';
import Context from './components/Context';
import Ref from './components/Ref';
import Reducer from './components/Reducer';
import Callback from './components/Callback';

function App() {

  const [int,setInt]=useState(0);
  const [name,setName]=useState('Mohsin');

  useEffect(() => {  
    document.title = `${int} ${name}`;  
  },[int,name]);  
  
  function ChangeElement(value){
    setInt(prevInt => Math.max(prevInt+value,0));
  }

  function ChangeName(value){
    if(name==="Mohsin Mujawar"){
      setName(prevName => prevName);
    }
    else{
      setName(prevName => prevName+" "+value);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => setName("Mujawar")}>{name}</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>
          This is my first React App
        </p>
        <Counter
        value={int}
        onIncrement={()=>ChangeElement(1)}
        onDecrement={()=>ChangeElement(-1)}
        ></Counter>


        <Table employees={employees}></Table>
        {/* <Users></Users> */}

        <br></br>

        {/* Use of useMemo */}
        <PrimeNumber></PrimeNumber>
        <br></br>


        {/* Use of useContext */}
        <Context></Context>
        <br></br>


        {/* Use of useRef */}
        <Ref></Ref>
        <br></br>

        {/* User of useReducer */}
        <Reducer></Reducer>
        <br></br>


        {/* Use of useCallback */}
        <Callback></Callback>
        <br></br>


        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <p>{name}</p>
        </form>
      </header>
    </div>
  );
}

let employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "Engineering",
    salary: 80000
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Data Scientist",
    department: "Research & Development",
    salary: 90000
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    salary: 75000
  }
];

export default App;
