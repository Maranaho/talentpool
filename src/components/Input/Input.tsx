import  { type FC, type ChangeEventHandler } from "react"
import styles from "./Input.module.scss"
export type Value = string | number | undefined
export type OnChange = ChangeEventHandler<HTMLInputElement>

export interface InputProps {
  value: Value
  onChange: OnChange
  placeholder?:string
  disabled?:boolean
  error?:string
}
export const Input:FC<InputProps> = ({
  value,
  placeholder = "Type...",
  onChange,
  disabled,
  error,
}) => {

  return (  
  <article
    className={`${styles.Input} ${error?styles.hasError:""}`}
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