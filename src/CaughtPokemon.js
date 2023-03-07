import React, { useState, useEffect } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    const randomId = Math.floor(Math.random() * 151) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((response) => response.json())
      .then((data) =>
        setCaught([
          ...caught,
          {
            name: data.name,
            sprite: data.sprites.front_default,
          },
        ])
      );
  };

  useEffect(() => {
    console.log("Fetching data from Pokemon");
  }, []);

  return (
    <div>
      <p>
        Caught: {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>
            {`Pokemon ${index + 1}: ${pokemon.name}`}
            <img src={pokemon.sprite} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
