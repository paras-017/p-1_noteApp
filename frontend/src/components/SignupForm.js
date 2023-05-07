
import authStore from '../stores/authStore'
import { useNavigate } from 'react-router-dom'


export default function SignupForm(){
    const store = authStore()
    const navigate = useNavigate()

    const handleSignup =async (e)=>{
      e.preventDefault();
      await store.signup()
      navigate('/login')
    }

  return (
   <>

   {/* <form onSubmit={handleSignup}>
    <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name='email' />
    <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name='password' />
    <button type='submit'>Signup</button>
   </form> */}

<div className='container'>
 <form onSubmit={handleSignup}>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input onChange={store.updateSignupForm} value={store.signupForm.email} name='email' type="email" className="form-control" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input onChange={store.updateSignupForm} value={store.signupForm.password} name='password'  type="password" className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary">Signup</button>
  </form>
</div>
   </>
  )
}
