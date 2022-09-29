export interface ThemeProps {
  status: string
}

export const themeInitialState: ThemeProps = {
  status: 'white',
}

export function ThemeReducer(state = themeInitialState, action: any) {
  switch (action.type) {
    case 'CHANGE_STATUS':
      console.log(action.payload.status)
      return { ...state, status: action.payload.status }
  }
}
