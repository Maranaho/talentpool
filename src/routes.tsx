import { DashBoard } from './components/DashBoard'


export const routes = [
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: '*',
    element: <DashBoard />,
  },
]