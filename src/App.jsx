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

  const [pickedWord, setPickedWord] = useState("");
  const [picketCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  function pickedWordAndCategory() {
    const categoryes = Object.keys(words);
    const category = categoryes[Math.floor(Math.random() * categoryes.length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return [word, category];
  }

  // start the secret word game
  function startGame() {
    const [word, category] = pickedWordAndCategory();

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);
    setStage(stages[1].name);
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
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
