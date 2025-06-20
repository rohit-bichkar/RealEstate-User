import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainNavbar from './Pages/MainNavbar'
import HomePage from './Components/HomePage'
import Footer from './Pages/Footer'
import PropertyDetails from './Components/PropertyDetails'

function App() {


  return (
    <>
     <BrowserRouter>
      <MainNavbar></MainNavbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/propertycard-details/:ID/*' element={<PropertyDetails/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
