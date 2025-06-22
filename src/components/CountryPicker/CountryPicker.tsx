import { continents } from "../../types"
import styles from './CountryPicker.module.scss'
import { Card } from "../Card"
import { Font } from "../Font"
import { useContext } from "react"
import { TalentPoolContext } from "../../context"
import { searchCountries } from "../../utils/searchCountries"

export const CountryPicker = () => {

  const { state:{countrySearchValue} } = useContext(TalentPoolContext)

  const handleCountryClick = (countryCode: string) => {
    console.log(countryCode)
  }

  const searchResults = searchCountries(countrySearchValue)
  const searchResultCodes = new Set(searchResults.map(result => result.code))

  const getMatchingCities = (country: typeof continents[keyof typeof continents]['countries'][number]) => {
    if (!countrySearchValue) return []
    
    const cityAliases = country.aliases.filter(alias => {
      const lowerAlias = alias.toLowerCase()
      const lowerCountryName = country.name.toLowerCase()
      
      if (lowerAlias === lowerCountryName) return false
      if (['usa', 'us', 'america', 'united states of america', 'uk', 'britain', 'great britain', 'england', 'united kingdom', 'holland', 'dutch', 'swiss', 'deutschland'].includes(lowerAlias)) return false
      
      return lowerAlias.includes(countrySearchValue.toLowerCase())
    })
    
    return cityAliases.slice(0, 3)
  }

  const highlightMatch = (text: string, searchTerm: string) => {
    if (!searchTerm) return text
    
    const regex = new RegExp(`(${searchTerm})`, 'gi')
    const parts = text.split(regex)
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className={styles.match}>
          {part}
        </span>
      ) : part
    )
  }

  const continentFilter = (continent: typeof continents[keyof typeof continents]) => {
    if(!countrySearchValue) return true
    return continent.countries.some(country => searchResultCodes.has(country.code))
  }

  const countryFilter = (country: typeof continents[keyof typeof continents]['countries'][number]) => {
    if(!countrySearchValue) return true
    return searchResultCodes.has(country.code)
  }

  return (
    <section className={styles.CountryPicker}>
      <div className="wrap">
        {Object.values(continents)
        .filter(continent => continentFilter(continent))
        .map((continent) => (
          <div key={continent.name} className={styles.continent}>
            <h2>{continent.name}</h2>
            <div className={styles.countries}>
              {continent.countries
              .filter(country => countryFilter(country)).map(country => {
                const { code, name } = country
                const matchingCities = getMatchingCities(country)
                
                return (
                  <Card
                    key={code}
                    onClick={()=>handleCountryClick(code)}
                  >
                    <Font variant="body3">{highlightMatch(name, countrySearchValue)}</Font>
                    {matchingCities.length > 0 && (
                      <div className={styles.matchingCities}>
                        {matchingCities.map((city, index) => (
                          <span key={index} className={styles.city}>
                            {highlightMatch(city, countrySearchValue)}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}