import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import VehicleListings from './VehicleListings'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            listings: []
        }
    }

    componentDidMount() {
        fetch(this.process.BACKEDN + '/api/v1/listings/get_listings')
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
            <div className='min-h-screen'>
                <Header />
                <VehicleListings listings={this.state.listings}/>
                <Footer />
            </div>
        )
    }
}

export default LandingPage