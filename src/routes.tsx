import { DashBoard } from './components/DashBoard'
import { PickCountry } from './components/PickCountry'
import { Signin } from './components/Signin'
import { Overview } from './components/Overview'
import { YourPlans } from './components/YourPlans'
export const routes = [
  {
    path: '/',
    element: <PickCountry />,
  },
  {
    path: '/sign-in',
    element: <Signin />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
  {
    path: '/overview',
    element: <Overview />,
  },
  {
    path: '/your-plans',
    element: <YourPlans />,
  },
  {
    path: '*',
    element: <DashBoard />,
  },
]