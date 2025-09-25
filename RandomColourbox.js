import React, { useState } from "react";

export default function RandomColorBox() {
  const [color, setColor] = useState("#ffffff");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const handleClick = () => {
    setColor(getRandomColor());
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Change Color
      </button>
    </div>
  );
}