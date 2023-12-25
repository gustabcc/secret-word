import React from "react";

// styles
import "./StartScreen.css";

export default function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para jogar</p>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
}
