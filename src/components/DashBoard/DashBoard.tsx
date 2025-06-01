import { useState, type ChangeEvent } from "react"
import type { Value } from "../Input"
import { TextField} from "../TextField"

export const DashBoard = () => {

  const [value,setValue] = useState<Value>(undefined)
  return (
  <section>
    <TextField
      label="First name"
      value={value}
      error="Wrong name"
      onChange={(event:ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
    />
  </section>
)
}