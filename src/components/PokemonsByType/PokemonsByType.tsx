import type { FC } from "react"
interface PokemonsByTypeProps {
  pokemonType: string
}

export const PokemonsByType:FC<PokemonsByTypeProps> = ({ pokemonType }) => {

  return (
    <section>
      <h1>PokemonsByType</h1>
      <span>{pokemonType}</span>
    </section>
  )
}