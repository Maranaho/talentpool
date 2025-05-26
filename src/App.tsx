import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import { useReducer } from "react"
import { TalentPoolContext, reducer, initialState } from "./context"
import { Button } from "./components/Button"
import { Icon } from "./components/Icon"
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TalentPoolContext.Provider value={{ state, dispatch }}>
      <main>
        <Button>Hey</Button>
        <Icon />
        <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </main>
    </TalentPoolContext.Provider>
  )
}