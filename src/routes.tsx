import { Home } from './components/Home'
import { Battle } from './components/Battle'
import { Bracket } from './components/Bracket'
import { PickArena } from './components/PickArena'
import { PickPokemon } from './components/PickPokemon'
import { PickTrainer } from './components/PickTrainer'
import { StartOver } from './components/StartOver'
import { Versus } from './components/Versus'
import { WinOrLose } from './components/WinOrLose'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/battle',
    element: <Battle />,
  },
  {
    path: '/bracket',
    element: <Bracket />,
  },
  {
    path: '/pick-an-arena',
    element: <PickArena />,
  },
  {
    path: '/pick-your-pokemons',
    element: <PickPokemon />,
  },
  {
    path: '/pick-a-trainer',
    element: <PickTrainer />,
  },
  {
    path: '/start-over',
    element: <StartOver />,
  },
  {
    path: '/versus',
    element: <Versus />,
  },
  {
    path: '/win-or-lose',
    element: <WinOrLose />,
  },
  {
    path: '*',
    element: <Home />,
  },
]