import React, { Component } from 'react'
import { Select } from '@supabase/ui'

class VehicleListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: []
        }
    }

    componentDidMount() {
        if (this.state.years.length < 1) {
            console.log('ye')
            fetch('http://localhost:5000/api/v1/auto_info/get_years')
                .then(res => {
                    return res.json()
                }).then(data => {
                    this.setState({
                        years: data.years
                    })
                })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        console.log(this.state.years)
        return (
            <div>
                <form >
                    <Select id='year' labl='Select Year' onChange={this.handleChange}>
                        <Select.Option>Select Year</Select.Option>
                        {
                            this.state.years.map((year) => {
                                return (<Select.Option>{year}</Select.Option>)
                            })
                        }
                    </Select>
                </form>
            </div >
        )
    }
}

export default VehicleListing