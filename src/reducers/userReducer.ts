import { reducerActionType } from '../types/reducerActionType'

export interface UserType {
  name: string
  age: number
}

export const userInitialState: UserType = {
  name: '',
  age: 0,
}

export const userReducer = (
  state = userInitialState,
  action: reducerActionType,
) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name }

    case 'CHANGE_AGE':
      return { ...state, age: action.payload.age }
  }

  return state
}
