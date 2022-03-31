import React, { Component } from 'react'
import { Card } from '@supabase/ui'
import VehiclePlaceholder from '../Images/VehiclePlaceholder.png'

class VehicleListings extends Component {
    render() {
        if(this.props.listings.length > 0) {
            return (
                <div className='flex flex-row justify-center'>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/6 pb-40'>
                        {
                            this.props.listings.map(listing => {
                                return (
                                    <div className='m-6'>
                                        <Card
                                            key={listing.id}
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
        } else {
            return (
                <div>

                </div>
            )
        }
        
    }
}

export default VehicleListings