import  { type FC, type ChangeEventHandler } from "react"
import styles from "./Input.module.scss"
export type Value = string | number | undefined
export type OnChange = ChangeEventHandler<HTMLInputElement>

export interface InputProps {
  value: Value
  onChange: OnChange
  placeholder?:string
  disabled?:boolean
}
export const Input:FC<InputProps> = ({
  value,
  placeholder = "Type...",
  onChange,
  disabled,
}) => {

  return (  
  <article
    className={styles.Input}
  >
     <input
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  </article>
)
}