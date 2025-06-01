import type { FC } from "react"
import type { InputProps } from "../Input"
import { Input} from "../Input"
import { Font } from "../Font"
import { ErrorMsg } from "../ErrorMsg"
import styles from "./TextField.module.scss"

interface TextFieldProps extends InputProps {
  label:string
  error?:string
}
export const TextField:FC<TextFieldProps> = ({
  label,
  error,
  ...rest
}) => {

  return (
    <section className={styles.TextField}>
      <Font>{label}</Font>
      <Input {...rest} />
      {error&&<ErrorMsg error={error}/>}
    </section>
  )
}