import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { Font } from "../Font"

export const DashBoard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          throw error
        }

        if (!session) {
          navigate('/sign-in')
          return
        }

        const { data: { user: userData }, error: userError } = await supabase.auth.getUser()
        
        if (userError) {
          throw userError
        }

        setUser(userData)
      } catch (error) {
        console.error('Error:', error)
        navigate('/sign-in')
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [navigate])

  if (loading) {
    return (
      <div>
        <Font>Loading...</Font>
      </div>
    )
  }

  if (!user) {
    return null
  }
console.log(user);

  return (
    <div>
      <div>
        <h1>Welcome to your Dashboard</h1>
        
        <div>
          {user.user_metadata?.avatar_url && (
            <img 
              src={user.user_metadata.avatar_url} 
              alt="Profile"
              
            />
          )}
          
          <div>
            <Font variant="h2">
              {user.user_metadata?.full_name || user.email}
            </Font>
            <Font>
              Email: {user.email}
            </Font>
            <Font>
              Provider: {user.app_metadata?.provider || 'Email'}
            </Font>
            <Font>
              Last Sign In: {new Date(user.last_sign_in_at).toLocaleDateString()}
            </Font>
          </div>
        </div>

        <button
          onClick={() => supabase.auth.signOut()}
          
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}