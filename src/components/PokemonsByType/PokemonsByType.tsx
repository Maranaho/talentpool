import type { FC } from "react"
import { usePokemonByType } from "../../hooks/usePokemonByType"
interface PokemonsByTypeProps {
  pokemonType: string
}

export const PokemonsByType:FC<PokemonsByTypeProps> = ({ pokemonType }) => {
  const { loading , error , pokemons } = usePokemonByType(pokemonType)

  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>

  return (
    <section>
      <h1>PokemonsByType</h1>
      {pokemons.map(pokemon=>(
        <button
          key={pokemon}
        >
          <img src={`https://play.pokemonshowdown.com/sprites/ani/${pokemon}.gif`} />
          <span>{pokemon}</span>
        </button>
      ))}
    </section>
  )
}