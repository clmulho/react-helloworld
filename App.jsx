import React from "react";
import RandomColorBox from "./RandomColorBox";
import RandomQuote from "./RandomQuote";
import RandomNumber from "./RandomNumber";
import RandomEmoji from "./RandomEmoji";
import RandomJoke from "./RandomJoke";
import BackendMessage from "./BackendMessage"; // 👈 .NET API response

const dotnetSnippet = `var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
var app = builder.Build();
app.UseCors();
app.MapGet("/api/hello/{name}", (string name) => Results.Ok(new { message = $"Hello, {name}!" }));
app.MapGet("/api/health", () => Results.Ok("OK"));
app.Run();`;

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

      <h2 style={{ marginTop: "40px" }}>🖥️ Backend API</h2>
      {/* This component should call /api/health or /api/hello/{name} on your .NET minimal API */}
      <BackendMessage />

      <h2 style={{ marginTop: "40px" }}>⚙️ .NET Minimal API Snippet</h2>
      <p>
        We added a tiny .NET minimal API to this repo at{" "}
        <a
          href="https://github.com/clmulho/react-helloworld/blob/main/server-dotnet/Program.cs"
          target="_blank"
          rel="noreferrer"
        >
          server-dotnet/Program.cs
        </a>
        .
      </p>
      <pre
        style={{
          background: "#111",
          color: "#eee",
          padding: 16,
          border
