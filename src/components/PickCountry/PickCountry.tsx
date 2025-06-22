import styles from './PickCountry.module.scss'
import { useNavigate } from 'react-router-dom'
import { CountryPicker } from '../CountryPicker'
import { SearchCountry } from '../SearchCountry'
export const PickCountry = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/overview')
  }

  return (
    <section className={styles.PickCountry}>
      <div>
        <div className={`${styles.header} wrap`}>
          <h1>Where are we going?</h1>
          <SearchCountry />
        </div>
        <CountryPicker />
        <div className="wrap">
          <button onClick={handleClick}>Let's go!</button>
        </div>
      </div>
    </section>
  )
}