import React, { Component } from 'react'
import Header from './Header'
import VehicleListings from './VehicleListings'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            listings: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/v1/listings/get_listings')
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data.listings)
            this.setState({
                listings: data.listings
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <VehicleListings listings={this.state.listings}/>
            </div>
        )
    }
}

export default LandingPage