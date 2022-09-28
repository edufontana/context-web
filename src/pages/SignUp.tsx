import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../contexts/Context'

export function SignUp() {
  const { name, age } = useContext(Context)

  return (
    <div>
      <Link to="/exibir">signup</Link>
    </div>
  )
}
