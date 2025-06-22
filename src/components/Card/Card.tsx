import { type FC, type ReactNode } from 'react'
import styles from './Card.module.scss'

export interface CardProps {
  children: ReactNode
  elevation?: 'small' | 'medium' | 'large' | 'none'
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  children,
  elevation = 'none',
  onClick
}) => {

  if (onClick) return (
    <button
      className={`${styles.Card} ${styles.btn}`}
      data-elevation={elevation}
      onClick={onClick}>
      {children}
  </button>
  )

  return (
    <article
      className={styles.Card}
      data-elevation={elevation}
    >
      {children}
    </article>
  )
}
