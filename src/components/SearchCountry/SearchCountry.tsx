import styles from './SearchCountry.module.scss'
import { useContext } from 'react'
import { TalentPoolContext } from '../../context'
import { Input } from '../Input'

export const SearchCountry = ()=>{

  const { state:{countrySearchValue}, dispatch } = useContext(TalentPoolContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch({type: 'SET_COUNTRY_SEARCH_VALUE', payload: event.target.value})
  }

  return(
    <div className={styles.SearchCountry}>
      <Input
        type="search"
        placeholder="Search by city, country or continent..."
        onChange={handleChange}
        value={countrySearchValue}
        id="search-country"
        size="large"
      />
    </div>
  )
}