// RandomNumber.js
import React, { useState } from "react";

export default function RandomNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const getRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Random Number: {number}</h3>
      <button onClick={getRandomNumber} style={{ padding: "8px 16px" }}>
        Generate
      </button>
    </div>
  );
}
