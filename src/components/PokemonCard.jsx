/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function PokemonCard({ name }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonInfo();
  }, [name]);

  const getPokemonInfo = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setPokemonInfo(data);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  if (!pokemonInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="PokemonCard">
      <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
      <h2>{pokemonInfo.name}</h2>
      <p>Weight: {pokemonInfo.weight} kg</p>
      <p>Height: {pokemonInfo.height} cm</p>
    </div>
  );
}
