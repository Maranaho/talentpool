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
    const continentMatches = continent.name.toLowerCase().includes(normalizedSearch)
    
    continent.countries.forEach(country => {
      if (continentMatches) {
        results.push({
          code: country.code,
          name: country.name,
          continent: continentKey
        })
        return
      }

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