import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import SignInPage from './Components/SignInPage'
import SignUpPage from './Components/SignUpPage'
import CreateListingPage from './Components/CreateListingPage'
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BACKEND: process.env.REACT_APP_BACKEND
    }
  }
  
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage BACKEND={this.state.BACKEND}/>}/>
          <Route path='/signin' element={<SignInPage BACKEND={this.state.BACKEND}/>}/>
          <Route path='/signup' element={<SignUpPage BACKEND={this.state.BACKEND}/>}/>
          <Route path='/createlisting' element={<CreateListingPage BACKEND={this.state.BACKEND}/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App