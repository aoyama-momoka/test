// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] =useState(0);
  const countPlus =()=>{
    setCount(count+1);
    console.log(count);
  }
  const countMinus =()=>{
    setCount(count-1);
  }
  return (
    <div className="App">
      <p className="number">{count}</p>
      <button className="btn-plus" onClick={countPlus}>+1</button>
      <button className="btn-minus" onClick={countMinus}>-1</button>
    </div>
  );
}

export default App;
