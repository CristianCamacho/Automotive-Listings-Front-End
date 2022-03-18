import React, { Component } from 'react'
import LandingPage from './Components/LandingPage'
import VehicleListingCreate from './Components/VehicleListingCreate'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Footer from './Components/Footer'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <VehicleListingCreate />
        <Footer />
      </div>
    )
  }
}

export default App