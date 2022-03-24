import React, { Component } from 'react'
import LandingPage from './Components/LandingPage'
import SignInPage from './Components/SignInPage'
import SignUpPage from './Components/SignUpPage'
import CreateListingPage from './Components/CreateListingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

let BACKEND = process.env.REACT_APP_BACKEND

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/home' element={<LandingPage BACKEND={BACKEND}/>}/>
          <Route path='/signin' element={<SignInPage BACKEND={BACKEND}/>}/>
          <Route path='/signup' element={<SignUpPage BACKEND={BACKEND}/>}/>
          <Route path='/createlisting' element={<CreateListingPage BACKEND={BACKEND}/>}/>
        </Routes>
      </Router>
    )
  }
}

export default App