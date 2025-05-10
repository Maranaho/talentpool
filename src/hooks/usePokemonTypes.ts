import { useState, useEffect } from 'react'
const pokeApiEndpoint = 'https://pokeapi.co/api/v2/type'

export const usePokemonTypes = () => {
  const [types, setTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await fetch(pokeApiEndpoint)
        if (!res.ok) throw new Error('Failed to fetch Pokémon types')
        const data = await res.json()
        const typeNames = data.results.map((type: { name: string }) => type.name)
        setTypes(typeNames)
      } catch (err: any) {
        setError(err.message ?? 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchTypes()
  }, [])

  return { types, loading, error }
}