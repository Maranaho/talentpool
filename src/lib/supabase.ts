import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test Supabase configuration
export const testSupabaseConfig = async () => {
  try {
    console.log('🔧 Testing Supabase Configuration')
    console.log('URL:', supabaseUrl)
    
    // Test 1: Check if we can connect to Supabase
    const { data: { session }, error: authError } = await supabase.auth.getSession()
    console.log('🔑 Auth Status:', authError ? 'Error' : 'Connected')
    if (authError) console.error('Auth Error:', authError.message)
    
    // Test 2: Check auth configuration
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    console.log('🔌 Auth Configuration:', {
      url: supabaseUrl,
      hasAnonKey: !!supabaseAnonKey,
      isAuthed: !!session,
      hasUser: !!user
    })
    if (userError) console.error('User Error:', userError.message)

    return { session, error: authError || userError }
  } catch (error) {
    console.error('❌ Supabase Connection Error:', error)
    return { error }
  }
} 