import React, { Component } from 'react'
import LandingPage from './Components/Landing'
import VehicleListingCreate from './Components/VehicleListingCreate'
import SignInPage from './Components/SignInPage'
import SignUpPage from './Components/SignUpPage'
import CreateListingPage from './Components/CreateListingPage'

let BACKEND = process.env.REACT_APP_BACKEND

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage BACKEND={BACKEND} />
      </div>
    )
  }
}

export default App