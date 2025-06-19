import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styles from './Signin.module.scss'
import { Card } from '../Card'

export const Signin = () => {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session)
      if (session) {
        navigate('/')
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
      if (session) {
        navigate('/')
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setIsAuthenticated(false)
  }

  if (isAuthenticated) {
    return (
      <div className={styles.Signin}>
        <h2>You are signed in!</h2>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    )
  }

  return (
    <section className={styles.Signin}>
      <div className={styles.Signin__container}>
        <Card elevation="large">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google','linkedin_oidc']}
            redirectTo={`${window.location.origin}/`}
          />
        </Card>
      </div>
    </section>
  )
} 