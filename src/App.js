import React, { Component } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import SignInPage from './Components/SignInPage'
import SignUpPage from './Components/SignUpPage'
import CreateListingPage from './Components/CreateListingPage'
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BACKEND: process.env.REACT_APP_BACKEND
    }
  }

  getCurrentUser = () => {
    fetch(this.state.BACKEND + '/api/v1/users/get_current_user', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      return res.json()
    }).then(data => {
      this.setState({
        user: data.username
      })
      console.log(data)
    })
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  setUser = (username) => {
    this.setState({
      username: username
    }
    )
  }

  logout = () => {
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
    })

    this.getCurrentUser()
  }

  render() {
    return (
      <Router>
        <Header logout={this.logout} />
        <Routes>
          <Route path='/' element={<LandingPage BACKEND={this.state.BACKEND} />} />
          <Route path='/signin' element={<SignInPage BACKEND={this.state.BACKEND} setUser={this.setState} />} />
          <Route path='/signup' element={<SignUpPage BACKEND={this.state.BACKEND} />} />
          <Route path='/createlisting' element={<CreateListingPage BACKEND={this.state.BACKEND} />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default App