import React, { Component } from 'react'
import { Card } from '@supabase/ui'
import VehiclePlaceholder from '../Images/VehiclePlaceholder.png'
class VehicleListings extends Component {
    render() {
        return (
            <div className='flex flex-row justify-center'>
                <div className='grid grid-cols-3 w-5/6'>
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