import type { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import { SideNav } from '../SideNav'
import { useUser } from '../../hooks/useUser'
export interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({
  children
}) => {
  const { user } = useUser()
  return (
    <section className={styles.Layout}>
      {user && <SideNav/>}
      {children}
    </section>
  )
}
