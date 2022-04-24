import React, { useEffect, useState } from 'react'
import VehicleListings from './VehicleListings'

export default function LandingPage(props) {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch(props.BACKEND + '/api/v1/listings/get_listings')
            .then(res => {
                return res.json()
            }).then(data => {
                setListings(data.listings)
            })
    }, [])

    return (
        <div className='min-h-screen'>
            <VehicleListings listings={listings} />
        </div>
    )
}