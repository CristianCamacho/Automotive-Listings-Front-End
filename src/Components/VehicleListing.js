import React, { Component } from 'react'
import VehicleSelectForm from './VehicleSelectForm'

class VehicleListing extends Component {
    handleSelChange = (year,make,model,option) => {
        this.setState({
            year: year,
            make: make,
            modle: model,
            option: option
        })
    }

    render() {
        return (
            <div>
                <VehicleSelectForm handleChange={this.handleSelChange}/>
            </div >
        )
    }
}

export default VehicleListing