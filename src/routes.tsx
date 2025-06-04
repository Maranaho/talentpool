import { DashBoard } from './components/DashBoard'
import { Signin } from './components/Signin'


export const routes = [
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: '/sign-in',
    element: <Signin />,
  },
  {
    path: '*',
    element: <DashBoard />,
  },
]