import React, { Component } from 'react'
import VehicleListing from './Components/VehicleListing'
import Header from './Components/Header'
class App extends Component {
  render() {
    return (
      <div>
        <div className='pb-20'>
          <Header />
        </div>
        <VehicleListing />
      </div>
    )
  }
}

export default App