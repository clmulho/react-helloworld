// RandomQuote.js
import React, { useState } from "react";

export default function RandomQuote() {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "Success is not in what you have, but who you are.",
    "Do what you can with all you have, wherever you are."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "12px" }}>
      <p style={{ fontStyle: "italic" }}>{quote}</p>
      <button
        onClick={getRandomQuote}
        style={{ padding: "8px 16px", marginTop: "10px", borderRadius: "8px", cursor: "pointer" }}
      >
        New Quote
      </button>
    </div>
  );
}
