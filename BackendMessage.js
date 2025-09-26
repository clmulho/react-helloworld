// BackendMessage.js
import React, { useEffect, useState } from "react";

export default function BackendMessage() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // This URL matches your .NET API endpoint: /api/hello
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Could not connect to backend 😢"));
  }, []);

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "12px" }}>
      <h3>📡 Message from .NET Core</h3>
      <p>{message}</p>
    </div>
  );
}
