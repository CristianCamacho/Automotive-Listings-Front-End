import React, { Component } from 'react'
import VehicleSelect from './VehicleSelect'
import { Input, Select } from "@supabase/ui"

class VehicleListing extends Component {
    handleSelChange = (year, make, model, option) => {
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
                <div className='flex flex-row justify-center'>
                    <div className='p-2 px-10'>
                        <VehicleSelect handleChange={this.handleSelChange} />
                    </div>
                    <div className='p-2 px-10'>
                        <Input label='Mileage' id='mileage' className='py-2' />
                        <Input label='Location by zipcode' id='zipLocation' className='py-2' />
                        <Input label='VIN' id='mileage' className='py-2' />
                        <Input label='Listing price' id='price' className='py-2' />
                        <Select label='Does the vehicle have a lien?' id='mileage' className='py-2'>
                            <Select.Option></Select.Option>
                            <Select.Option>Yes</Select.Option>
                            <Select.Option>No</Select.Option>
                        </Select>
                    </div>
                </div >
            </div>

        )
    }
}

export default VehicleListing