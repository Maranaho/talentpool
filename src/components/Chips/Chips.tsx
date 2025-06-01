import type { FC } from "react"
import { Icon } from "../Icon"
import styles from "./Chips.module.scss"
interface ChipsProps {
  cantClose?:boolean
  label?:string
  onClick?:()=>void
  onClose?:()=>void
}

export const Chips:FC<ChipsProps> = ({
  cantClose,
  onClick = ()=>{},
  onClose = ()=>{},
  label = "Chip",
}) => {

  if(cantClose)return (
    <button className={`${styles.Chips} ${styles.cantClose}`} onClick={onClick}>{label}</button>
  )
  return (
  <span className={styles.Chips}>
    {label}
    <button onClick={onClose}>
      <Icon icon="close" color="marine"/>
    </button>
  </span>
)
}