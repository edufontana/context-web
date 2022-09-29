import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { Context } from '../contexts/Context'
import {} from '../reducers/userReducer'

export function SignUp() {
  const { state, dispatch } = useContext(Context)

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value,
      },
    })
  }

  function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: parseInt(e.target.value),
      },
    })
  }

  function handleSaveInformation() {}

  return (
    <div>
      <h3>SignUp</h3>
      <input
        type="text"
        value={state.user.name}
        onChange={handleNameChange}
        placeholder="digite um nome"
      />
      <input
        type="text"
        value={state.user.age}
        onChange={handleAgeChange}
        placeholder="digite uma idade"
      />

      <button type="button" onClick={handleSaveInformation}>
        Salvar
      </button>
      <Link to="/exibir">go to ShowData</Link>
    </div>
  )
}
