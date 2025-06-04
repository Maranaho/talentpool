import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase, testSupabaseConfig } from '../../lib/supabase'
import styles from './Signin.module.scss'

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

  const handleTest = async () => {
    const result = await testSupabaseConfig()
    console.log('Available auth methods:', await supabase.auth.getSession())
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setIsAuthenticated(false)
  }

  return (
    <div className={styles.Signin}>
      <div className={styles.authContainer}>
        <h1>Welcome to TalentPool</h1>
        <div className={styles.buttonGroup}>
          <button 
            onClick={handleTest}
            className={styles.testButton}
          >
            Test Supabase Connection
          </button>
          {isAuthenticated && (
            <button
              onClick={handleSignOut}
              className={styles.signOutButton}
            >
              Sign Out
            </button>
          )}
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#007AFF',
                  brandAccent: '#0056b3',
                },
              },
            },
          }}
          providers={['google','linkedin_oidc']}
          view="magic_link"
          showLinks={false}
          redirectTo="http://localhost:5174/auth/callback"
          magicLink={true}
          socialLayout="horizontal"
          localization={{
            variables: {
              sign_in: {
                email_label: 'Email address',
                email_input_placeholder: 'Your email',
                button_label: 'Send magic link',
                social_provider_text: 'Or sign in with {{provider}}'
              }
            }
          }}
        />
      </div>
    </div>
  )
} 