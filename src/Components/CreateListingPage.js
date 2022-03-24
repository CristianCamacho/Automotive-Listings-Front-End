import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import VehicleListingCreate from './VehicleListingCreate'

class CreateListingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <VehicleListingCreate BACKEND={this.props.BACKEND} />
                <Footer />
            </div>
        )
    }
}

export default CreateListingPage