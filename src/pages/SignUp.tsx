import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../contexts/Context'
import {} from '../reducers/userReducer'

export function SignUp() {
  const { state, dispatch } = useContext(Context)

  return (
    <div>
      <Link to="/exibir">{state.user.name}</Link>
      <button
        onClick={() => {
          dispatch({
            type: 'CHANGE_NAME',
            payload: {
              name: 'aa',
            },
          })
        }}
      ></button>
    </div>
  )
}
