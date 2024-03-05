import React from 'react'
import Navigator from '../Router/Navigator'
import { BrowserRouter } from 'react-router-dom'

export default function Main() {
  return (
      <BrowserRouter>
          <Navigator />
      </BrowserRouter>
  )
}
