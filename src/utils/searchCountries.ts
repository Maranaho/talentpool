import { continents } from '../types'

export const searchCountries = (searchTerm: string) => {
  if (!searchTerm.trim()) {
    return []
  }

  const normalizedSearch = searchTerm.toLowerCase().trim()
  const results: Array<{
    code: string
    name: string
    continent: string
  }> = []

  Object.entries(continents).forEach(([continentKey, continent]) => {
    continent.countries.forEach(country => {
      if (country.name.toLowerCase().includes(normalizedSearch)) {
        results.push({
          code: country.code,
          name: country.name,
          continent: continentKey
        })
        return
      }

      if (country.aliases.some(alias => {
        const match = alias.toLowerCase().includes(normalizedSearch)
        return match
      })) {
        results.push({
          code: country.code,
          name: country.name,
          continent: continentKey
        })
        return
      }
    })
  })

  return results
} 