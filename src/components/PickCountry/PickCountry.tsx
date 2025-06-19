import styles from './PickCountry.module.scss'
import { Link } from 'react-router-dom'
export const PickCountry = () => {
  return (
    <section className={styles.PickCountry}>
      <h1>Pick Country</h1>
      <Link to="/overview">Let's go!</Link>
    </section>
  )
}