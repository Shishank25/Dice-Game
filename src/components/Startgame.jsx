import React from 'react'
import styled from 'styled-components'

const Startgame = ({toggle}) => {
  return (
    <Container>
      <img src='/images/dices.png' alt='dices'/>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}><img src="/images/BUTTON.png" alt="Play Now" /></Button>
      </div>
    </Container>
  )
}

export default Startgame

const Button = styled.button`
  height: 44px;
  width: 220px;
  padding: 0;
  outline: none;
  border: none;

  img{
    border-width: 0px;
    object-fit: cover;
  }
`

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    max-width: 1180px;
    height: 100vh;

    .content{
      display: flex;
      flex-direction: column;
      h1{
        width: 528px;
        font-size: 6rem;
        font-weight: 700;
        white-space: nowrap;
        margin: 0;
      }

      img{
        max-width: 220px;
        height: auto;
        align-self: flex-end;
        filter: invert(0%);
        border: 1px solid black;
        border-radius: 10px;
        transition: 0.1s filter ease-in;
        &:hover{
          filter: invert(100%);
        }
      }

    }
`;
