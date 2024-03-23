import React, { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";

const App = () => {
  const [startGame , setStartGame] = useState(false);

  const toggleGamePlay = () =>{
    setStartGame(prev => !prev);
  }

  return (
    <>
       {
       startGame ? <GamePlay/>:<StartGame  toggle = {toggleGamePlay} /> 
       }
    </>
  )
}

export default App