import { createContext, type Dispatch } from "react"

interface State {
  someBoolean: boolean
}

type Action =
  | { type: "SOME_ACTION_TYPE"; payload: boolean }

const initialState: State = {
  someBoolean: false,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case "SOME_ACTION_TYPE":
      return {
        ...state,
        someBoolean: action.payload,
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