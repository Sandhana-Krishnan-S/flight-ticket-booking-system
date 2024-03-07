import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Login from '../Components/login/Login'
import Signup from '../Components/login/Signup'

export default function Navigator() {
  return (
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/register' element = {<Signup />}></Route>
          <Route path='/login' element = {<Login />}></Route>
        </Routes>
  )
}
