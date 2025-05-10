import type { FC, Dispatch, SetStateAction } from "react"
import { usePokemonTypes } from "../../hooks/usePokemonTypes"

interface ListPokemonTypesProps {
  setPokemonType: Dispatch<SetStateAction<string | null>>
}

export const ListPokemonTypes:FC<ListPokemonTypesProps> = ({ setPokemonType }) => {
  const pokemonTypes = usePokemonTypes()
  const { error, loading, types } = pokemonTypes

  if(error) return <p>Ohoh</p>
  if(loading) return <p>Loading...</p>

  return (
    <section>
      {types.map(type=>(
        <button
          key={type}
          onClick={()=>setPokemonType(type)}
        >{type}</button>
      ))}

    </section>
  )
}