import type { FC, ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}
export const Button:FC<ButtonProps> = ({
  children
}) => (
  <button>
    {children}
  </button>
)