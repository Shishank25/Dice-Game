import React from 'react'
import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore'
import Rolldice from './Rolldice'
import Rules from './Rules'
import { useState } from 'react'

const Game = () => {
    const [rules, setRules] = useState(false);
    const [error, setError] = useState("");
    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const resetScore = () => setScore(0);
   
    const rolldice = () => {
        if(!selectedNumber) {
            setError("You have not selected any number");
            return;
        };

        setError("");
        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber);
        }else{
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    return (
        <Container>
            <div className="top-bar">
                <TotalScore score={score} />
                
                <div className='selection'>
                    <div className="boxes">
                        <NumberSelector 
                        error={error}
                        setError={setError}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber} />
                    </div>
                </div>
            </div>
            <div className='middle'>
                <Rolldice 
                currentDice={currentDice}
                rolldice={rolldice} />
                <button className='resetScore' onClick={resetScore}>Reset Score</button>
                <button className='showRules' onClick={() => setRules((prev) => !prev)}>
                    {rules ? "Hide" : "Show"} Rules</button>
            </div>
            {rules && <Rules/>}           
        </Container>
  )
}

export default Game

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    margin: 0 auto;
    white-space: nowrap;

    .top-bar{
        display: flex;
        width: 1280px;
        height: 151px;
        justify-content: space-between;
        align-items: end;

        .selection{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p{
                margin: 0;
                font-size: 1.5rem;
                align-self: flex-end;
            }
        }
    }

    .middle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0.5rem auto;
        /* height: 450px; */


        button{
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            width: 220px;
            height: 44px;
            border-radius: 5px;
            padding: 0px;
            transition: 0.3s filter ease-in;

            &:hover{
                filter: invert(100%);
                border: 1px solid transparent;
            }
        }

        .showRules{
            filter: invert(100%);
            border: 1px solid black;
            margin-top: 1.5rem;

            &:hover{
                filter: invert(0%);
            }
        }
    }
`