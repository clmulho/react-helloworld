// RandomEmoji.js
import React, { useState } from "react";

export default function RandomEmoji() {
  const emojis = ["😀", "🎉", "🚀", "🍕", "🐱", "🌈", "⚡️", "🥳"];
  const [emoji, setEmoji] = useState(emojis[0]);

  const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[randomIndex]);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontSize: "2rem" }}>{emoji}</h3>
      <button onClick={getRandomEmoji} style={{ padding: "8px 16px" }}>
        New Emoji
      </button>
    </div>
  );
}
