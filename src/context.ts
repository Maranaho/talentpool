import { createContext, type Dispatch } from "react"

export interface User {
  id: string
  email: string
  email_confirmed_at?: string
  created_at?: string
  last_sign_in_at?: string
  photoURL: string
  firstName: string
  lastName: string
  fullName: string
  role?: string | null
  provider: string
  is_anonymous: boolean
}

interface State {
  selectedTrainer: string
  user: User | null
}

type Action = { type: "SET_USER"; payload: User | null }

const initialState: State = {
  selectedTrainer: "greyman",
  user: null,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }

    default:
      return state
  }
}

const defaultDispatch: Dispatch<Action> = () => {
  throw new Error("dispatch must be used within a TalentPoolProvider")
}

const TalentPoolContext = createContext<{
  state: State
  dispatch: Dispatch<Action>
}>({ state: initialState, dispatch: defaultDispatch })

export { initialState, reducer, TalentPoolContext }
