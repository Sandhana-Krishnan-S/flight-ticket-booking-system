import React from 'react'
import flight from '../../Assets/Flight.png'
import './login.css'

export default function Login() {
  return (
    <div className='main'>
      <div className='content'>
        <h1 className='font' id='heading'>Fly-Off</h1>
        <h3 className='font' id='sub-heading'>A simple way to <span className='blue' id='sub-heading'>fly on</span></h3>
        <p className='font' id='paragraph'>Explore cheap, legit flights with flexible searches and alerts. Consider layovers, use miles, and start your adventure!</p>
      </div>
      <div className='cover-img'>
        <img src={flight} alt="" srcset="" />
      </div>
    </div>
  )
}
