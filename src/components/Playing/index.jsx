import React from "react";

// style
import "./Playing.css";
export default function Playing({ verifyLetter }) {
  return (
    <div>
      <h1>Playing</h1>
      <p>Estou jogando</p>
      <button onClick={verifyLetter}>Verificar letra</button>
    </div>
  );
}
