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
              <label>Username : </label>
              <input type='text' autoFocus />
            </div>
            <div className='Login-input'>
              <label>Password : </label>
              <input type = {showPassword ? 'text' : 'password'}/>
            </div>
            <div className='Login-row'>
             <div>
                <input type='checkbox' checked={showPassword} onChange={togglePasswordVisibility} /> <span className='forgotPassword'>Show Password</span>
             </div>
             <p className='forgotPassword'>Forgot Password?</p>
            </div>
            <div className='Login-input'>
              <input type='submit'/>
            </div>
          </form>
        </div>
        <p>Don't have an account? <span className='blue'>Sign up</span></p>
      </div>
      <div className='cover-img'></div>
    </div>
  )
}
