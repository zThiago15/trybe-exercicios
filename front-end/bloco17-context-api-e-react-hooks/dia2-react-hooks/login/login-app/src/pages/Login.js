import React from 'react'

function Login({ history }) {
    return (
      <form>
        <label>
          E-mail
          <input type="e-mail" />
        </label>

        <label>
          Senha
          <input type="password" />
        </label>

        <button onClick={ history.push('/jokes') }>
          Entrar
        </button>
      </form>
    )
}

export default Login;