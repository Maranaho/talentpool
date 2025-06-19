import { useState } from 'react'
import styles from './Avatar.module.scss'
import { Font } from '../Font'
import { getInitialsFromFullName } from '../../utils/getInitials'
import { useUser } from '../../hooks/useUser'

export const Avatar = () => {
  const { user } = useUser()
  const [imageError, setImageError] = useState(false)

  if (!user) return null
  
  const handleImageError = () => {
    setImageError(true)
  }

  const shouldShowImage = user.photoURL && !imageError
  
  return (
    <div className={styles.Avatar}>
      {shouldShowImage ? (
        <img 
          src={user.photoURL} 
          alt={`${user.firstName} ${user.lastName}`}
          onError={handleImageError}
          onLoad={() => console.log('Image loaded successfully:', user.photoURL)}
        />
      ) : (
        <Font variant="body3">{getInitialsFromFullName(user.fullName)}</Font>
      )}
    </div>
  )
}