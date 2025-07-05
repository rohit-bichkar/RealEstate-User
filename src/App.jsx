import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import MainNavbar from './Pages/MainNavbar'
import HomePage from './Components/HomePage'
import Footer from './Pages/Footer'
import PropertyDetails from './Components/PropertyDetails'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {
const location = useLocation()
const hideNavAndFooter = location.pathname === '/login'

  return (
    <>
     {!hideNavAndFooter && <MainNavbar />}
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/propertycard-details/:ID/*' element={<PropertyDetails />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  )
}

export default App
