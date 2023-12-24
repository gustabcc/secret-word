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

  return (
    <div className="App">
      {stage === "start" && <StartScreen />}
      {stage === "playing" && <Playing />}
      {stage === "end" && <GameOver />}
    </div>
  );
}
