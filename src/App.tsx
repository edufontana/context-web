import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'

export function App() {
  return (
    <BrowserRouter>
      <h1>Titulo</h1>
      <hr />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/exibir" element={<ShowData />} />
      </Routes>
    </BrowserRouter>
  )
}
