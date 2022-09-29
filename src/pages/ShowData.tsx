import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../contexts/Context'

export function ShowData() {
  const { state, dispatch } = useContext(Context)
  return (
    <div>
      nome: {state.user.name}
      <hr />
      idade:{state.user.age} <hr />
      <Link to="/">go to SignUp</Link>
    </div>
  )
}
