import React from "react";

// style
import "./GameOver.css";
export default function GameOver({ gameOver }) {
  return (
    <div>
      <h1>GameOver</h1>
      <p>Volte para a tela de inicio</p>
      <button onClick={gameOver}>Jogar novamente</button>
    </div>
  );
}
