import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { ContextProvider, Context } from './contexts/Context'
import { useContext } from 'react'

export function App() {
  const { state, dispatch } = useContext(Context)

  function swithTheme() {
    if (state.theme.status === 'white') {
      console.log('assasdsad')
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'black',
        },
      })
    }

    if (state.theme.status === 'black') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'white',
        },
      })
    }
  }

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: state.theme.status,
        }}
      >
        <h1>Titulo</h1>
        <button onClick={swithTheme}>Trocar tema</button>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
