import React from "react";

// hooks
import { useState, useEffect, useCallback } from "react";

// datas
import { wordList } from "./data/words";

// components
import StartScreen from "./components/StartScreen";
import Playing from "./components/Playing";
import GameOver from "./components/GameOver";
// styles
import "./App.css";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "playing" },
  { id: 3, name: "end" },
];

export default function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordList);

  // start the secret word game
  function startGame() {
    setStage(stages[1].name);
  }

  // end the secret word game
  function verifyLetter() {
    setStage(stages[2].name);
  }

  // verify if the game is over
  function gameOver() {
    setStage(stages[0].name);
  }

  return (
    <div className="App">
      {stage === "start" && <StartScreen startGame={startGame} />}
      {stage === "playing" && <Playing verifyLetter={verifyLetter} />}
      {stage === "end" && <GameOver gameOver={gameOver} />}
    </div>
  );
}
