import  { useState, type FC, type ChangeEventHandler } from "react"
import styles from "./Input.module.scss"
export type Value = string | number | undefined
export type OnChange = ChangeEventHandler<HTMLInputElement>

interface InputProps {
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

  const [focus,setFocus] = useState<boolean>(false)
  return (  
  <input
    className={`${styles.Input} ${focus?styles.focus:""}`}
    placeholder={placeholder}
    value={value}
    disabled={disabled}
    onChange={onChange}
    onFocus={()=>setFocus(true)}
    onBlur={()=>setFocus(false)}
  />
)
}