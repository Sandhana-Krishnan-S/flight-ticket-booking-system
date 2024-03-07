import React, { useState } from 'react'
import flyon from '../../Assets/fly_on.png'
import LoginCover from '../../Assets/Signup-cover.png'
import './login.css'
import signuphandler from '../../service/signuphandler';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email , setEmail] = useState('')
  const [Username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  const navigateToLogin = () => {
    Navigate('/login')
  }

  async function validate(event) {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)) {
      const flag = await signuphandler(Username , email , password)
      if(flag) {
        Navigate('/')
      }
      else {
        console.log("Login Failed")
      }
    }
    else {
      console.log("invalid Email")
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <div className='Login-main'>
      <div className='Signup-content'>
        <div className='Login-heading'>
          <h2 className='Login-font' id='Login-tittle'>Signup</h2>
          <p className='Login-font' id='Login-subtext'>Way to <span className='blue'>Fly-Over</span></p>
          <div className='img-overlay'>
            <img src={flyon} alt=""/>
          </div>
        </div>
        <div>
          <form onSubmit={validate}>
          <div className='Login-input'>
              <label className='login-lable'>Username : </label>
              <input type='text' autoFocus className='login-input'  onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='Login-input'>
              <label className='login-lable'>Email : </label>
              <input type='text' autoFocus className='login-input'  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='Login-input'>
              <label className='login-lable'>Password : </label>
              <input type = {showPassword ? 'text' : 'password'} className='login-input' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='Login-row'>
             <div>
                <input type='checkbox' checked={showPassword} onChange={togglePasswordVisibility}  /> <span className='showPassword'>Show Password</span>
             </div>
            </div>
            <div id='submit'>
              <input type='submit' value='Signup' className='login-button'/>
            </div>
          </form>
        </div>
        <p className='bottom-statement' onClick={navigateToLogin}> have an account?  <span className='blue' id='pad'> login</span></p>
      </div>
      <div className='Signup-cover-img' style={{marginLeft : '10%'}}>
        <img src={LoginCover} alt="no img" className='img' />
      </div>
    </div>
  )
}
