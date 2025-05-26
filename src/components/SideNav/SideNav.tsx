import { Link } from 'react-router-dom'
import logo from "../../assets/svg/logo.svg"
import { UserSum } from "../UserSum"
import { Nav } from "../Nav"
import styles from "./SideNav.module.scss"

export const SideNav = () => (
  <aside className={styles.SideNav}>
    <div>
      <Link to="/"><img src={logo}/></Link>
      <UserSum/>
    </div>
    <Nav/>
  </aside>
)