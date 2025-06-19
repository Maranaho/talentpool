import styles from './YourPlans.module.scss'
import { Link } from 'react-router-dom'
export const YourPlans = () => {
  return (
    <section className={styles.YourPlans}>
      <h1>Your Plans</h1>
      <Link to="/sign-in">Sign up</Link>
    </section>
  )
}