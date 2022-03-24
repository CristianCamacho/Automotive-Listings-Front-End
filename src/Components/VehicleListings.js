import React, { Component } from 'react'
import { Card } from '@supabase/ui'
import VehiclePlaceholder from '../Images/VehiclePlaceholder.png'

class VehicleListings extends Component {
    render() {
        return (
            <div className='flex flex-row justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/6'>
                    {
                        this.props.listings.map(listing => {
                            return (
                                <div className='m-6'>
                                    <Card
                                        title={`${listing.year} ${listing.make} ${listing.model}`}
                                        cover={[
                                            <img src={VehiclePlaceholder} />
                                        ]}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default VehicleListings