import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import SignInPage from './Components/SignInPage'
import SignUpPage from './Components/SignUpPage'
import VehicleListingCreate from './Components/VehicleListingCreate'
// import Listing from './Components/Listing'
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BACKEND: process.env.REACT_APP_BACKEND,
      loggedIn: false
    }
  }

  getCurrentUser = () => {
    console.log('getUser')
    fetch(this.state.BACKEND + '/api/v1/users/get_current_user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      switch (res.status) {
        case 200:
          let data = res.json()
          this.setState({
            user: data.username,
            loggedIn: true
          })
          console.log('User is logged in.')
          break;
        case 204:
          this.setState({
            loggedIn: false
          })
          console.log('User is not logged in.')
          break;
        default:
          this.setState({
            loggedIn: false
          })
          console.log(res.json())
      }
    })
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  logout = () => {
    console.log('logout click')
    fetch(this.state.BACKEND + '/api/v1/users/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      this.getCurrentUser()
    })
  }

  render() {
    return (
      <Router>
        <Header loggedIn={this.state.loggedIn} logout={this.logout} />
        <Routes>
          <Route path='/' element={<LandingPage loggedIn={this.state.loggedIn} BACKEND={this.state.BACKEND} />} />
          <Route path='/signin' element={<SignInPage loggedIn={this.state.loggedIn} BACKEND={this.state.BACKEND} getCurrentUser={this.getCurrentUser} />} />
          <Route path='/signup' element={<SignUpPage loggedIn={this.state.loggedIn} BACKEND={this.state.BACKEND} />} />
          <Route path='/createlisting' element={<VehicleListingCreate loggedIn={this.state.loggedIn} BACKEND={this.state.BACKEND} />} />
          {/* <Route path='/listing/:id' element={<Listing loggedIn={this.state.loggedIn} BACKEND={this.state.BACKEND} />} /> */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App