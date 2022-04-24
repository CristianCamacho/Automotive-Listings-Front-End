import React, { useState } from 'react'
import { Card } from '@supabase/ui'
import VehiclePlaceholder from '../Images/VehiclePlaceholder.png'

export default function VehicleListings(props) {
    if(props.listings != null) {
        return (
            <div className='flex flex-row justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/6 pb-40'>
                    {
                        props.listings.map((listing, index) => {
                            return (
                                <div className='m-6' key={index}>
                                    <Card
                                        key={index}
                                        title={`${listing.year} ${listing.make} ${listing.model}`}
                                        cover={[
                                            <img  key={index} src={VehiclePlaceholder} />
                                        ]}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}