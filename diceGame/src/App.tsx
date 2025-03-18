import { useState, useEffect, useRef } from 'react'

import { Dice } from './components/Dice.tsx';

function randomNumber():number {
  return Math.floor(Math.random()*6+1);
}

function App() {
  const [ dice1Num, setDado1Num ] = useState< number >(0);
  const [ dice2Num, setDado2Num ] = useState< number >(0);

  const [ dice1Points, setDice1Points ] = useState< number >(0);
  const [ dice2Points, setDice2Points ] = useState< number >(0);

  const [ dice1Disabled, setDice1Disabled ] = useState< boolean >(false);
  const [ dice2Disabled, setDice2Disabled ] = useState< boolean >(false);
  const [ playAgainDisabled, setPlayAgainDisabled ] = useState< boolean >(false);

  const [ round, setRound ] = useState< number >(1);

  const prevStateDice1Disabled = useRef(dice1Disabled);
  const prevStateDice2Disabled = useRef(dice2Disabled);

  function checkResult(): any {
    if (dice1Num > dice2Num) {
      setDice1Points(dice1Points+1);
    } else if (dice2Num > dice1Num){
      setDice2Points(dice2Points+1);
    }
  }

  function handleP1ClickButton(): any {
    setDice1Disabled(true);

    const randomNum: number = randomNumber();
    setDado1Num(randomNum);

    console.log("Jogador 1 dado: " + randomNum);
  }
  
  function handleP2ClickButton(): any {
    setDice2Disabled(true);

    const randomNum: number = randomNumber();
    setDado2Num(randomNum);

    console.log("Jogador 2 dado: " + randomNum);
  }

  useEffect(() => {
    if (prevStateDice1Disabled.current !== dice1Disabled && prevStateDice2Disabled.current !== dice2Disabled){
      setDice1Disabled(false);
      setDice2Disabled(false);
  
      setRound(round+1);
  
      checkResult();
    }

    
  }, [ dice1Disabled,  dice2Disabled ]);

  function handlePlayAgainButton(): any {

  }

  return (
    <>
      <h1>Jogo de Dados</h1>
      <p>Neste jogo cada jogador deve rolar um dado. Quem tirar o maior número vence a rodada.</p>
      <h2>{ round }° Rodada</h2>
      <div className="game__container">
        <div className="player1__container">
          <h2>Jogador 1</h2>
          <Dice side={ dice1Num } />
          <button id="player1_btn" onClick={ handleP1ClickButton } disabled={ dice1Disabled }>Rolar dado</button>
        </div>
        <div className="player2__container">
          <h2>Jogador 2</h2>
          <Dice side={ dice2Num } />
          <button id="player1_btn" onClick={ handleP2ClickButton } disabled={ dice2Disabled }>Rolar dado</button>
        </div> 

        <h3>Placar { dice1Points } x { dice2Points }</h3> 
        <p>Jogador 1 ganhou</p>
        <button id="playagain_btn" onClick={ handlePlayAgainButton } disabled={ playAgainDisabled }>Jogar</button>
      </div>
    </>
  )
}

export default App
