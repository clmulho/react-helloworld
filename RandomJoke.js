// RandomJoke.js
import React, { useState } from "react";

export default function RandomJoke() {
  const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I only know 25 letters of the alphabet. I don’t know y.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What’s brown and sticky? A stick."
  ];

  const [joke, setJoke] = useState(jokes[0]);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "12px" }}>
      <p>{joke}</p>
      <button onClick={getRandomJoke} style={{ padding: "8px 16px" }}>
        Tell Me Another
      </button>
    </div>
  );
}
