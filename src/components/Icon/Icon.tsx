import type { FC } from "react"
import type { IconAsset, IconSize } from '.'
import { paths } from '.'
import { colors } from '../../tokens'
import type { Color } from "../../tokens"

interface IconProps {
  icon?:IconAsset
  size?: IconSize
  color?: Color
}
export const Icon:FC<IconProps> = ({
  icon = "check",
  size = 16,
  color = "black"
}) => (
  <svg
    width={size} 
    height={size} 
    viewBox="0 0 16 16"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={paths[icon]}
      stroke={colors[color]}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)