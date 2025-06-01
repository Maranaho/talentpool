import type { FC } from "react"
import { Font } from "../Font"
import styles from "./Progress.module.scss"
interface ProgressProps {
  value:number
}
export const Progress:FC<ProgressProps> = ({ value }) => (
  <div className={styles.Progress}>
    <Font variant="small">{value}%</Font>
    <article>
      <div style={{width:`${value}%`}}/>
    </article>
  </div>
)