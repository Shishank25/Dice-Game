import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <Score>
        <p className='cScore'>{score}</p>
        <p>Total Score</p>
    </Score>
  )
}

export default TotalScore

const Score = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    .cScore{
        height: 112px;
        font-size: 5rem;
        font-weight: 500;
        margin: 0;
    }

    p{
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0;
    }
`
    