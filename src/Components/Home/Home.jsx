import React from 'react'
import flight from '../../Assets/Flight.png'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const Navigate = useNavigate()
    const navigateLogin = () => {
        Navigate('/login')
    }
  return (
    <div className='body'>
        <div className='main'>
        <div className='content'>
            <h1 className='font' id='heading'>Fly-Off</h1>
            <h3 className='font' id='sub-heading'>A simple way to <span className='blue' id='sub-heading'>fly on</span></h3>
            <p className='font' id='paragraph'>Start your budget-friendly adventure by exploring flexible search options and setting up price alerts. Embrace layovers to discover cheaper routes and consider using miles or points to reduce costs. With these strategies, you can find legitimate flights that fit your budget and begin your journey around the world!</p>
            <div className='btns'>
                <div className='btn' onClick={() => navigateLogin()}>
                    <span className='btn-text'>Login</span>
                </div>
                <p className='font' id='register-hint' onClick={() => {}}>Don’t have an account? <span className='blue' id='register'>Register</span></p>
            </div>
        </div>
        <div className='cover-img'>
            <img src={flight} alt="" srcset="" />
        </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <p className='font' id='bottom-text'>User Explore cheap, legit flights with flexible searches and alerts.</p>
        </div>
    </div>
  )
}
