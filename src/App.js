import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import "./App.css";

function App() {
  const appName = "Mo's Pokédex";
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("Logo was clicked!");
  };

  return (
    <div className="App">
      <Logo appName={appName} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
