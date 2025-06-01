import type { FC } from "react"
import { Font } from "../Font"
import { Icon } from "../Icon"
import styles from "./ErrorMsg.module.scss"

interface ErrorMsgProps {
  error:string
}
export const ErrorMsg:FC<ErrorMsgProps> = ({ error }) => (
  <article className={styles.ErrorMsg}>
    <Icon icon="close" color="error"/>
    <Font>{error}</Font>
  </article>
)