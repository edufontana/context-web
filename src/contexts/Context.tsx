import React, { createContext, useReducer } from 'react'
import {
  UserType,
  userInitialState,
  userReducer,
} from '../reducers/userReducer'
import {
  ThemeProps,
  ThemeReducer,
  themeInitialState,
} from '../reducers/themeReducer'
import { reducerActionType } from '../types/reducerActionType'

interface InitialState {
  user: UserType
  theme: ThemeProps
}

interface ContextType {
  state: InitialState
  dispatch: React.Dispatch<any>
}

const initialState = {
  user: userInitialState,
  theme: themeInitialState,
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (state: InitialState, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: ThemeReducer(state.theme, action),
})

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
