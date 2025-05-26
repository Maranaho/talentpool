import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import { useReducer } from "react"
import { TalentPoolContext, reducer, initialState } from "./context"
import { SideNav } from "./components/SideNav"
import styles from "./App.module.scss"
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TalentPoolContext.Provider value={{ state, dispatch }}>
      <main className={styles.App}>
        <SideNav/>
        <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      </main>
    </TalentPoolContext.Provider>
  )
}