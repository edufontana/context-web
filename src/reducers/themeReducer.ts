export interface ThemeProps {
  theme: 'dark' | 'light'
}

export const themeInitialState: ThemeProps = {
  theme: 'dark',
}

export function ThemeReducer(state = themeInitialState, action: any) {
  switch (action.type) {
    case 'CHANGE_STATUS':
      return { ...state, theme: action.payload.status }
  }
}
