import { useState, type ChangeEvent } from "react"
import { Input, type Value } from "../Input"

export const DashBoard = () => {

  const [value,setValue] = useState<Value>(undefined)
  return (
  <section>
    <Input
      value={value}
      onChange={(event:ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
    />
  </section>
)
}