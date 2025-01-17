import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
        <Container>
            <div className="Rules">
                <h3>How to play Dice Game</h3>
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After rolling the die, if selected number is equal to die number, you will get same point as the number you rolled</p>
                <p>If your guess is wrong, you will lose 2 points</p>
            </div>
        </Container>
  )
}

export default Rules

const Container = styled.div`
    .Rules{
        background-color: #e6cbcb;
        margin: 1rem auto;
        padding: 10px;
        width: 894px;
    }
`