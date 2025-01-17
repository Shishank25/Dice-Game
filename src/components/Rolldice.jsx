import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Rolldice = ({rolldice,currentDice}) => {

  return (
    <Container>
        <div className="diceroll" onClick={(rolldice)}>
        <img src={`/images/dice_${currentDice}.png`} alt='die'/>
        </div>
        <p>Click on Dice to Roll</p>
    </Container>
  )
}

export default Rolldice

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;

    .diceroll{
        width: 250px;

        &:hover{
            cursor: pointer;
        }
    }
    p{
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
        width: 250px;
    }
`