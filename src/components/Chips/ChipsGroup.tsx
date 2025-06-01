import type { FC, ReactNode } from "react"
import styles from "./Chips.module.scss"
interface ChipsGroupProps {
  children: ReactNode
}

export const ChipsGroup:FC<ChipsGroupProps> = ({children}) => (
  <section className={styles.ChipsGroup}>
    {children}
  </section>
)