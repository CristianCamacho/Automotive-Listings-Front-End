import React, { Component } from 'react'
import { Select } from '@supabase/ui'

class VehicleListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: [],
            makes: [],
            models: [],
            options: []
        }
    }

    componentDidMount() {
        if (this.state.years.length < 1) {
            console.log('get years')
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

    componentDidUpdate() {
        console.log('did update')
        if(this.state.makes.length < 1 && this.state.selYear > 1983) {
            console.log('get makes')
            fetch('http://localhost:5000/api/v1/auto_info/get_makes?year=' + this.state.selYear)
                .then(res => {
                    return res.json()
                }).then(data => {
                    this.setState({
                        makes: data.makes
                    })
                })
        }
    }

    handleChange = (event) => {
        if(event.target.id == 'selYear') {
            this.setState({
                makes: []
            })
        }
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        console.log(this.state.year)
        return (
            <div>
                <form >
                    <Select id='selYear' labl='Select Year' onChange={this.handleChange}>
                        <Select.Option>Select Year</Select.Option>
                        {
                            this.state.years.map((year) => {
                                return (<Select.Option>{year}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selMake' labl='Select Makes' onChange={this.handleChange}>
                        <Select.Option>Select Makes</Select.Option>
                        {
                            this.state.makes.map((makes) => {
                                return (<Select.Option>{makes}</Select.Option>)
                            })
                        }
                    </Select>
                </form>
            </div >
        )
    }
}

export default VehicleListing