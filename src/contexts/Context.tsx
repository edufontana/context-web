import React, { createContext } from 'react'

interface IContextProps {
  children: React.ReactNode
}

interface ContextType {
  name: string
  age: number
}

const inititalState = {
  name: 'edu',
  age: 27,
}

export const Context = createContext<ContextType>(inititalState)

export function ContextProvider({ children }: IContextProps) {
  return <Context.Provider value={inititalState}>{children}</Context.Provider>
}
