import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import VehicleListingCreate from './Components/VehicleListingCreate'
import Listing from './Components/Listing'
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  const [BACKEND] = useState(process.env.REACT_APP_BACKEND)
  const [loggedIn, setLogedIn] = useState()

  function getCurrentUser() {
    fetch(BACKEND + '/api/v1/users/get_current_user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      switch (res.status) {
        case 200:
          setLogedIn(true)
          break;
        case 204:
          setLogedIn(false)
          break;
        default:
          setLogedIn(false)
      }
    })
  }

  function logout() {
    fetch(BACKEND + '/api/v1/users/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => {
      return res.json()
    }).then(data => {
      getCurrentUser()
    })
  }

  useEffect(getCurrentUser)
  
  return (
    <Router>
      <Header loggedIn={loggedIn} logout={logout} />
      <Routes>
        <Route path='/' element={<LandingPage loggedIn={loggedIn} BACKEND={BACKEND} />} />
        <Route path='/signin' element={<SignIn loggedIn={loggedIn} BACKEND={BACKEND} getCurrentUser={getCurrentUser} />} />
        <Route path='/signup' element={<SignUp loggedIn={loggedIn} BACKEND={BACKEND} />} />
        <Route path='/createlisting' element={<VehicleListingCreate loggedIn={loggedIn} BACKEND={BACKEND} />} />
        <Route path='/listing/:id' element={<Listing loggedIn={loggedIn} BACKEND={BACKEND} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}