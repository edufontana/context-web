import React, { createContext, useReducer } from 'react'
import {
  UserType,
  userInitialState,
  userReducer,
} from '../reducers/userReducer'
import { reducerActionType } from '../types/reducerActionType'

interface InitialState {
  user: UserType
}

interface ContextType {
  state: InitialState
  dispatch: React.Dispatch<any>
}

const initialState = {
  user: userInitialState,
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (state: InitialState, action: reducerActionType) => ({
  user: userReducer(state.user, action),
})

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
