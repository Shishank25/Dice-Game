import styled from 'styled-components'
import { useState } from 'react';

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const selectNumberHandler = (value) =>{
        setSelectedNumber(value)
        setError("")
    }

    return(
        <Container>
            <div className="warn">{error}</div>
            <div className='flex'>
                {
                arrNumber.map((value, i) => (
                    <Box
                    isSelected = {value === selectedNumber}
                    key={i} 
                    onClick={() => selectNumberHandler(value)}>{value}</Box>
                ))}

            </div>
            <p>Select a number</p>
        </Container>
    );
  };

  export default NumberSelector;

  const Container = styled.div`
    display: flex;
    height: 138px;
    justify-content: space-between;
    flex-direction: column;

    .warn{
        font-size: 1.5rem;
        font-weight: 400;
        color: red;
        align-self: flex-end;
    }

    .flex{
        display: flex;
        justify-content: space-between;
        width: 552px;
    }
  `

  const Box = styled.div`
    display: grid;
    place-items: center;
    width: 4.5rem;
    height: 4.5rem;
    border: 1px solid black;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: ${(props)=> props.isSelected ? "black" : "white"};
    color: ${(props)=> props.isSelected ? "white" : "black"};

    &:hover{
        cursor: pointer;
    }
`