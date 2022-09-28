import { reducerActionType } from '../types/reducerActionType'

export interface UserType {
  name: string
  age: number
}

export const userInitialState: UserType = {
  name: 'edu',
  age: 27,
}

export const userReducer = (
  state = userInitialState,
  action: reducerActionType,
) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name }
    case 'CHANGE_AGE':
      return { ...state, name: action.payload.age }
  }

  return state
}
