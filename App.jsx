import React from "react";
import RandomColorBox from "./RandomColorBox";

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Ciaran, Hey!!! 👋</h1>
      <p>Click the button to change the color of the box below:</p>

      <RandomColorBox />
    </div>
  );
}