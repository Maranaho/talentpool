import { Font } from "../Font"
import styles from "./UserSum.module.scss"
import { useUser } from '../../hooks/useUser'
import { Avatar } from "../Avatar/Avatar"

export const UserSum = () => {
  const { user } = useUser()

  if (!user) {
    return null
  }

  return (
    <article className={styles.UserSum}>
      <div>
        <Avatar />
      </div>
      <div>
        <Font variant="body3">{user.firstName} {user.lastName}</Font>
        <Font>{user.role || 'Set your role'}</Font>
      </div>
    </article>
  )
}