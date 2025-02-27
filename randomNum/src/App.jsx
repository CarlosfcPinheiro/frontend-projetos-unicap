import { useState } from 'react';
import './App.css';

function generateRandomNum(){
  return Math.floor(Math.random()*100+1);
}

function App() {
  const [randomNum, setRandomNum] = useState();

  function handleClick(){
    setRandomNum(generateRandomNum());
  }

  return (
    <div>
      <h1>Random Number</h1>
      <p>CLick on the button bellow to generate new numbers :)</p>
      <button onClick={handleClick}>{randomNum}</button>
    </div>
  )
}

export default App
