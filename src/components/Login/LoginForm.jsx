import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = (props) => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button className="btn waves-effect waves-light" type="submit"><i className="material-icons right">send</i>SignIn</button>
    </form>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm