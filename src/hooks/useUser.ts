import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User } from '../context'

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const User: User = {
          id: session.user.id,
          email: session.user.email || '',
          email_confirmed_at: session.user.email_confirmed_at,
          created_at: session.user.created_at,
          last_sign_in_at: session.user.last_sign_in_at,
          photoURL: session.user.user_metadata?.avatar_url || '/default-avatar.png',
          firstName: session.user.user_metadata?.given_name || session.user.user_metadata?.full_name?.split(' ')[0] || 'User',
          lastName: session.user.user_metadata?.family_name || session.user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
          fullName: session.user.user_metadata?.full_name || 'User',
          role: null,
          provider: session.user.app_metadata?.provider || 'email',
          is_anonymous: session.user.is_anonymous || false,
        }
        setUser(User)
      }
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const User: User = {
          id: session.user.id,
          email: session.user.email || '',
          email_confirmed_at: session.user.email_confirmed_at,
          created_at: session.user.created_at,
          last_sign_in_at: session.user.last_sign_in_at,
          photoURL: session.user.user_metadata?.avatar_url || '/default-avatar.png',
          firstName: session.user.user_metadata?.given_name || session.user.user_metadata?.full_name?.split(' ')[0] || 'User',
          lastName: session.user.user_metadata?.family_name || session.user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
          fullName: session.user.user_metadata?.full_name || 'User',
          role: null,
          provider: session.user.app_metadata?.provider || 'email',
          is_anonymous: session.user.is_anonymous || false,
        }
        setUser(User)
      } else {
        setUser(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
} 