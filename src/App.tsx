import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { ContextProvider } from './contexts/Context'

export function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Titulo</h1>
        <hr />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}
