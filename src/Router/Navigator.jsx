import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Login from '../Components/login/Login'

export default function Navigator() {
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/login' element = {<Login />}></Route>
        </Routes>
    </div>
  )
}
