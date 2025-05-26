import type { FC, ReactNode } from "react"
import type { FontVariant } from "."
import styles from "./Font.module.scss"

interface FontProps {
  children:ReactNode
  variant?:FontVariant
}
export const Font:FC<FontProps> = ({
  children,
  variant = "body1"
}) => {

  switch (variant) {
    case "h1": return <h1>{children}</h1>
    case "h2": return <h2>{children}</h2>
    case "body1": return <p>{children}</p>
    case "body2": return <p className={styles.body2}>{children}</p>
    case "body3": return <p className={styles.body3}>{children}</p>
    case "span": return <span>{children}</span>
    default: return <p>{children}</p>
  }
}