import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

import { useReducer } from "react"
import { TalentPoolContext, reducer, initialState } from "./context"
import { Layout } from "./components/Layout"
import styles from "./App.module.scss"
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TalentPoolContext.Provider value={{ state, dispatch }}>
      <main className={styles.App}>
        <Layout>
          <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
      </main>
    </TalentPoolContext.Provider>
  )
}