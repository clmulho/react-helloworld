
import React from "react";
import RandomColorBox from "./RandomColorBox";
import RandomQuote from "./RandomQuote";

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Ciaran, Hey!!! 👋</h1>
      <p>Click the button to change the color of the box below:</p>

      <RandomColorBox />

      <h2 style={{ marginTop: "40px" }}>Need some inspiration?</h2>
      <RandomQuote />
    </div>
  );
}
