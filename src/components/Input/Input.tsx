import  { type FC, type ChangeEventHandler } from "react"
import styles from "./Input.module.scss"
export type Value = string | number | undefined
export type OnChange = ChangeEventHandler<HTMLInputElement>
export type InputType = "text" | "search" | "password"
export interface InputProps {
  value: Value
  onChange: OnChange
  placeholder?:string
  disabled?:boolean
  error?:string
  type?:InputType
  id?:string
  size?: "small" | "medium" | "large"
}
export const Input:FC<InputProps> = ({
  value,
  placeholder = "Type...",
  onChange,
  disabled,
  error,
  type = "text",
  id = "input",
  size = "medium",
}) => {

  return (  
  <article
    className={`${styles.Input} ${error?styles.hasError:""} ${styles[size]}`}
  >
     <input
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      type={type}
      id={id}
    />
  </article>
)
}