import React, { Component } from 'react'
import VehicleListingCreate from './VehicleListingCreate'

class CreateListingPage extends Component {
    render() {
        return (
            <div>
                <VehicleListingCreate BACKEND={this.props.BACKEND} />
            </div>
        )
    }
}

export default CreateListingPage