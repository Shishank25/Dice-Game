import Startgame from "./components/Startgame";
import Game from "./components/Game";
import { useState } from "react";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }


  return (
    <>

    {

      isGameStarted ? <Game /> : <Startgame toggle={toggleGamePlay}/>

    }
    </>
  )
}

export default App
