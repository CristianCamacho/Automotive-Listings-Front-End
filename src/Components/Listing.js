import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import VehiclePlaceholder from '../Images/VehiclePlaceholder.png'

export default function Listing(props) {

    let { id } = useParams()
    const [listing, setListing] = useState()

    useEffect(() => {
        fetch(props.BACKEND + `/api/v1/listings/get_listing_by_id?id=${id}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            setListing(data.listing)
        })
    }, [])

    console.log(listing)
    if (listing != null) {
        return (
            <div className='min-h-screen flex justify-center'>
                <div className='flex flex-row p-10 w-3/4 justify-center'>
                    <img src={VehiclePlaceholder} className='self-start w-2/3 border border-sky-500 p-4' />
                    <div className='w-1/3 p-4'>
                        <p className='text-4xl'>{listing.year} {listing.make} {listing.model}</p>
                        <p>Price: {listing.price}</p>
                        <p>Mileage: {listing.mileage}</p>
                        <p>City MPG: {listing.city}</p>
                        <p>Highway MPG: {listing.highway}</p>
                        <p>VIN: {listing.vin}</p>
                        <p>Cylinders: {listing.cylinders}</p>
                        <p>Transmission: {listing.trans}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='min-h-screen'>

            </div>
        )
    }
}