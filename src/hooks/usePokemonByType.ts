import { useEffect, useState } from "react"

export const usePokemonByType = (type: string | null) => {
  const [pokemons, setPokemons] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!type) return

    const fetchPokemon = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        if (!res.ok) throw new Error("Failed to fetch Pokémon by type")

        const data = await res.json()
        const names: string[] = data.pokemon.map(
          (entry: { pokemon: { name: string } }) => entry.pokemon.name
        )

        const validNames = await Promise.all(
          names.map(name => {
            const url = `https://play.pokemonshowdown.com/sprites/ani/${name}.gif`
            return new Promise<string | null>((resolve) => {
              const img = new Image()
              img.onload = () => resolve(name)
              img.onerror = () => resolve(null)
              img.src = url
            })
          })
        )

        setPokemons(validNames.filter((name): name is string => !!name))
      } catch (err: any) {
        setError(err.message ?? "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [type])

  return { pokemons, loading, error }
}