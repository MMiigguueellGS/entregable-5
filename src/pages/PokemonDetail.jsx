import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonsById } from "../services/pokemons"
import { StatBarList } from "../components/pokemonDetail/StatBarList"

export const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null)

  const { pokemonId } = useParams()
  
  useEffect(()=> {
    getPokemonsById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <main className="flex justify-center items-center">

      <article className="w-[min(100%,_400px)]">
        <header>
          <img src={pokemonData?.image} alt="" />
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats}/>
        </section>
      </article>

    </main>
  )
}