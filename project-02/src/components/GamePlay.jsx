import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button,OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber , setSelectedNumber ] = useState();
  const [currentDice , setCurrentDice ] = useState(1);
  const [error,setError] = useState("");
  const [showRules , setShowRules] = useState(false);
  const randomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  };
  const diceRoller = () => {
    if(!selectedNumber){
      setError("You Have Not Selected Number..");
      return
    }
    setError("");
    const getRandomNumber = randomNumber(1,7);
    setCurrentDice((prev) =>getRandomNumber);
    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev) => prev - 2 );
    }
    setSelectedNumber(undefined);
  };
  const resetScore = ()=>{
    setScore(0);
  }

  return (
    <MainContainer>
       <div className='top_section'>
       <TotalScore score= {score}/>
        <NumberSelector setError = {setError}  error = {error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
       </div>
       <RoleDice currentDice={currentDice} diceRoller={diceRoller}/>
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score </OutlineButton>
        <Button 
          onClick={()=> setShowRules(prev => !prev)}
        >{showRules ? "Hide":"Show"} Rules</Button>
       </div>
       {showRules &&< Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
      padding: 20px 70px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        }
        .btns{
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
`;