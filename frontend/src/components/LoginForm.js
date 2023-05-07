import React from 'react'
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const store = authStore()
    const navigate = useNavigate()

    const handleLogin = async(e)=>{
      e.preventDefault()
    await  store.login()
    // Navigate
    navigate('/')
    }
  return (
   <>

<div className='container'>
 <form onSubmit={handleLogin}>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input onChange={store.updateLoginForm} value={store.loginForm.email} name='email' type="email" className="form-control" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input onChange={store.updateLoginForm} value={store.loginForm.password} name='password'  type="password" className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
   </>
  )
}
