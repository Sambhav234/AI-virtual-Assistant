import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import SignIn from './components/SignIn'

export default function App() {
  return (
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/' element={<h1>I Am APP</h1>}/>

    </Routes>
  )
}
