import type { FC, Dispatch, SetStateAction } from "react"
import { usePokemonTypes } from "../../hooks/usePokemonTypes"
import { typeImages } from "./types"
import styles from "./ListPokemonTypes.module.scss"
type PokemonType = keyof typeof typeImages
interface ListPokemonTypesProps {
  setPokemonType: Dispatch<SetStateAction<string | null>>
}

export const ListPokemonTypes:FC<ListPokemonTypesProps> = ({ setPokemonType }) => {
  const pokemonTypes = usePokemonTypes()
  const { error, loading, types } = pokemonTypes

  if(error) return <p>Ohoh</p>
  if(loading) return <p>Loading...</p>

  return (
    <div>
      <section className={styles.ListPokemonTypes}>
        {types.filter(type=>type!=="unknown").map(type=>(
          <button
            key={type}
            onClick={()=>setPokemonType(type)}
          >
            <img src={typeImages[type as PokemonType]} />
          </button>
        ))}

      </section>
    </div>
  )
}