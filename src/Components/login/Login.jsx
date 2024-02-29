import React, { useState } from 'react'
import flyon from '../../Assets/fly_on.png'
import './login.css'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
            <img src={flyon} alt="" srcset="" />
          </div>
        </div>
        <div>
          <form onSubmit={() => {}}>
            <div className='Login-input'>
              <label className='login-lable'>Username : </label>
              <input type='text' autoFocus className='login-input'/>
            </div>
            <div className='Login-input'>
              <label className='login-lable'>Password : </label>
              <input type = {showPassword ? 'text' : 'password'} className='login-input'/>
            </div>
            <div className='Login-row'>
             <div>
                <input type='checkbox' checked={showPassword} onChange={togglePasswordVisibility} /> <span className='showPassword'>Show Password</span>
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
      <div className='cover-img'></div>
    </div>
  )
}
