import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPokemons, getPokemonsByType } from "../services/pokemons";
import { PokemonList } from "../components/pokedex/PokemonList";
import { usePokedex } from "../Hooks/usePokedex";

export const Pokedex = () => {
  const {
    handleChange,
    name,
    pokemonByName,
    pokemonName,
    pokemonType,
    setPokemonName,
    setPokemonType,
  } = usePokedex();

  return (
    <main>
      <section>
        <p>
          <span>Welcome {name}</span>
        </p>
        <form>
          <input
            value={pokemonName}
            onChange={handleChange(setPokemonName)}
            placeholder="Search pokemon..."
            type="text"
          />

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="ice">Ice</option>
            <option value="electric">Electric</option>
            <option value="dragon">Dragon</option>

          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonByName} />
    </main>
  );
};
