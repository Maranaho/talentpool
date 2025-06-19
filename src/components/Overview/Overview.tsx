import styles from './Overview.module.scss'
import { Link } from 'react-router-dom'
export const Overview = () => {
  return (
    <section className={styles.Overview}  >
      <h1>Overview</h1>
      <Link to="/your-plans">Get started</Link>
    </section>
  )
}