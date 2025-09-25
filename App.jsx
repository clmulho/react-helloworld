
import React from "react";
import RandomColorBox from "./RandomColorBox";
import RandomQuote from "./RandomQuote";
import RandomNumber from "./RandomNumber";
import RandomEmoji from "./RandomEmoji";
import RandomJoke from "./RandomJoke";

export default function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Ciaran, Hey!!! 👋</h1>

      <h2>🎨 Random Color Box</h2>
      <RandomColorBox />

      <h2 style={{ marginTop: "40px" }}>💡 Random Quote</h2>
      <RandomQuote />

      <h2 style={{ marginTop: "40px" }}>🔢 Random Number</h2>
      <RandomNumber />

      <h2 style={{ marginTop: "40px" }}>😀 Random Emoji</h2>
      <RandomEmoji />

      <h2 style={{ marginTop: "40px" }}>😂 Random Joke</h2>
      <RandomJoke />
    </div>
  );
}
