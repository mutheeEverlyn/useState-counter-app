import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const initialState=0;
  const [count,setCount]=useState(initialState)
  useEffect(() =>{
    document.title=`counter is currently at : ${count}`;
  })
return (
  <div className='counter'>
      <div>{count}</div>
    <button onClick={() =>setCount(count+1)}>+</button>
    <button onClick={() =>setCount(count-1)}>-</button>
    <button onClick={() =>setCount(initialState)}>Reset</button>
  </div>
)
}

export default App
