import { useState } from 'react'

import { Dice } from './components/Dice.tsx';

function randomNumber():number {
  return Math.floor(Math.random()*6+1);
}

function App() {
  const [ dice1Num, setDado1Num ] = useState< number | undefined >();
  const [ dice2Num, setDado2Num ] = useState< number | undefined >();

  const [ dice1Points, setDice1Points ] = useState< number | 0 >();
  const [ dice2Points, setDice2Points ] = useState< number | 0 >();

  // true => dice 1 wins
  // false => dice 2 wins

  function checkResult(): any {
    // change
    const result: boolean = (dice1Num || 0) > (dice2Num || 0) ? true : false;
    if (result) {
      setDice1Points((dice1Points || 0)+1);
    }  {
      setDice2Points((dice2Points || 0)+1);
    }
  }

  function handleP1Button(): any {
    const randomNum: number = randomNumber();
    setDado1Num(randomNum);

    console.log("Jogador 1 dado: " + randomNum);
  }
  
  function handleP2Button(): any {
    const randomNum: number = randomNumber();
    setDado2Num(randomNum);

    console.log("Jogador 2 dado: " + randomNum);
  }

  function handlePlayButton(): any {
    checkResult();
  }

  return (
    <>
      <h1>Jogo de Dados</h1>
      <p>Neste jogo cada jogador deve rolar um dado. Quem tirar o maior número vence a rodada.</p>
      <div className="game__container">
        <div className="player1__container">
          <h2>Jogador 1</h2>
          <Dice side={ dice1Num || 0 } />
          <button id="player1_btn" onClick={ handleP1Button } >Rolar dado</button>
        </div>
        <div className="player2__container">
          <h2>Jogador 2</h2>
          <Dice side={ dice2Num || 0 } />
          <button id="player1_btn" onClick={ handleP2Button } >Rolar dado</button>
        </div> 

        <h3>Placar { dice1Points || 0} x { dice2Points || 0 }</h3> 
        <p>Jogador 1 ganhou</p>
        <button id="playagain_btn" onClick={ () => handlePlayButton() }>Jogar</button>
      </div>
    </>
  )
}

export default App
