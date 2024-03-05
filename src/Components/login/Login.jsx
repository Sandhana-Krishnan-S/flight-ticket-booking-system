import React, { useState } from 'react'
import flyon from '../../Assets/fly_on.png'
import LoginCover from '../../Assets/Login-cover.png'
import './login.css'
import loginhandler from '../../service/loginhandler';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  async function validate(event) {
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)) {
      const flag = await loginhandler(email , password)
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
      <div className='Login-content'>
        <div className='Login-heading'>
          <h2 className='Login-font' id='Login-tittle'>Login</h2>
          <p className='Login-font' id='Login-subtext'>Way to <span className='blue'>Fly-Over</span></p>
          <div className='img-overlay'>
            <img src={flyon} alt=""/>
          </div>
        </div>
        <div>
          <form onSubmit={validate}>
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
             <p className='forgotPassword'>Forgot Password?</p>
            </div>
            <div id='submit'>
              <input type='submit' className='login-button'/>
            </div>
          </form>
        </div>
        <p className='bottom-statement'>Don't have an account?  <span className='blue' id='pad'> Sign up</span></p>
      </div>
      <div className='login-cover-img'>
        <img src={LoginCover} alt="no img" className='img' />
      </div>
    </div>
  )
}
