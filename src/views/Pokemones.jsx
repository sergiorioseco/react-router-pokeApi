import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

export default function Pokemones() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();
  const goToPokemon = () => {
    navigate(`/pokemones/${selectedPokemon}`);
    };

    const { id } = useParams();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <div className="pokemones">
      {id ? (
        <PokemonCard name={id} />
      ) : (
        <form>
        <label htmlFor="pokemonSelector">Selecciona un Pokémon:</label>
        <select id="pokemonSelector" value={selectedPokemon} onChange={handleSelectChange}>
          <option value="">Selecciona un Pokémon</option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button onClick={ goToPokemon }>buscar</button>
      </form>
      )}
    </div>
  );
}
