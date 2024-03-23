import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({diceRoller , currentDice}) => {
 
  return (
    <DiceContainer>
     <div className='dice' onClick={ diceRoller }>
     <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
     </div>
     <p>Click On The Dice</p>
  
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
     font-size: 24px;
  }
  .dice{
    cursor: pointer;
  }
`;