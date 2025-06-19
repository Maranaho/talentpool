import { type FC, type ReactNode } from 'react'
import styles from './Card.module.scss'

export interface CardProps {
  children: ReactNode
  elevation?: 'small' | 'medium' | 'large'
}

export const Card: FC<CardProps> = ({
  children,
  elevation = 'small'
}) => {

  return (
    <article className={styles.Card} data-elevation={elevation}>
      {children}
    </article>
  )
}
