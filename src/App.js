import React, { Component } from 'react'
import LandingPage from './Components/LandingPage'
import VehicleListingCreate from './Components/VehicleListingCreate'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import Header from './Components/Header'

let BACKEND = process.env.REACT_APP_BACKEND

class App extends Component {
  render() {
    console.log(BACKEND)
    return (
      <div>
        <Header />
        <VehicleListingCreate BACKEND={BACKEND} />
        <Footer />
      </div>
    )
  }
}

export default App