export const getInitials = (firstName: string, lastName: string): string => {
  const firstInitial = firstName?.charAt(0)?.toUpperCase() || ''
  const lastInitial = lastName?.charAt(0)?.toUpperCase() || ''
  
  return `${firstInitial}${lastInitial}`
}

// Alternative version that takes a full name string
export const getInitialsFromFullName = (fullName: string): string => {
  if (!fullName) return ''
  
  const names = fullName.trim().split(' ')
  const firstInitial = names[0]?.charAt(0)?.toUpperCase() || ''
  const lastInitial = names[names.length - 1]?.charAt(0)?.toUpperCase() || ''
  
  return `${firstInitial}${lastInitial}`
} 