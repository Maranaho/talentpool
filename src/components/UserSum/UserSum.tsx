import photoURL from "../../assets/png/demi.png"
import { Font } from "../Font"
import styles from "./UserSum.module.scss"

const user = {
  photoURL,
  firstName:"Demi",
  lastName:"Fibernache",
  role:"Senior Product Designer",
}
const { firstName, lastName, role } = user

export const UserSum = () => (
  <article className={styles.UserSum}>
    <div>
      <img
        src={photoURL}
        alt={`${firstName}_${lastName}`}
      />
    </div>
    <div>
      <Font variant="body3">{firstName} {lastName}</Font>
      <Font>{role}</Font>
    </div>
  </article>
)