import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import { useReducer } from "react"
import { PokemonContext, reducer, initialState } from "./context"

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      <main>
        <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </main>
    </PokemonContext.Provider>
  )
}