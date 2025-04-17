import React from 'react';
import { useState } from 'react'

import Dado from './Dado';

function randomNum(){
  return Math.floor(Math.random()*6+1);
}

function App() {
  const [ ladoNum, setLadoNum ] = useState();

  function handleClick(){
    setLadoNum(randomNum());
  }

  return (
    <>
      <h1>Dado Aleatório</h1>
      <p>Clique no botão abaixo para rolar um dado aleatório!</p>
      <button onClick={ handleClick }>Rolar dado</button>
      <br/>
      <Dado lado={ ladoNum }/>
    </>
  )
}

export default App
