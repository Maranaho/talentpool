import { createContext, type Dispatch } from "react"

interface State {
  selectedTrainer: string
}

type Action =
  | { type: "SET_TRAINER"; payload: string }

const initialState: State = {
  selectedTrainer: "greyman",
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case "SET_TRAINER":
      return {
        ...state,
        selectedTrainer: action.payload,
      }

    default:
      return state
  }
}

const defaultDispatch: Dispatch<Action> = () => {
  throw new Error("dispatch must be used within a PokemonProvider")
}

const PokemonContext = createContext<{
  state: State
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: defaultDispatch })

export { initialState, reducer, PokemonContext }