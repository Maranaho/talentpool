import { type FC, type ReactNode } from 'react'
import styles from './Card.module.scss'
import { Icon } from '../Icon'

export interface CardProps {
  children: ReactNode
  elevation?: 'small' | 'medium' | 'large' | 'none'
  onClick?: () => void
  selected?: boolean
}

export const Card: FC<CardProps> = ({
  children,
  elevation = 'none',
  onClick,
  selected = false
}) => {

  if (onClick) return (
    <button
      className={`${styles.Card} ${styles.btn} ${selected ? styles.selected : ""}`}
      data-elevation={elevation}
      onClick={onClick}>
        {selected && <Icon icon="check" color="lime" size={32}/>}
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
