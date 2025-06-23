import  { createContext, type Dispatch } from "react"
import { continents } from "./types"

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

export type CountryCode = typeof continents[keyof typeof continents]['countries'][number]['code']

interface State {
  selectedCountry: CountryCode
  countrySearchValue: string
}

type Action =
{ type: "SET_COUNTRY"; payload: CountryCode } |
{ type: "SET_COUNTRY_SEARCH_VALUE"; payload: string }  

const initialState: State = {
  selectedCountry: "GBR",
  countrySearchValue: "",
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_COUNTRY":
      return {
        ...state,
        selectedCountry: action.payload,
      }
    case "SET_COUNTRY_SEARCH_VALUE":
      return {
        ...state,
        countrySearchValue: action.payload,
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
