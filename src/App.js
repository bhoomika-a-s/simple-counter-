import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  function increment(){
    setCount(count+1)

  }
  function decrement(){
    setCount(count-1)

  }
  function reset(){
    setCount(0)
  }
  return (
    <div className="App">
    <button onClick={decrement}>-</button>
    <span> {count} </span>
    
    <button onClick={increment}>+</button>
    <span>  </span>
    <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
