import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>

        
    </Routes>
  )
}
export default AppRoutes