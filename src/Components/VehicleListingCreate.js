import React, { Component } from 'react'
import { Input, Select } from "@supabase/ui"

class VehicleListingCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years: [],
            makes: [],
            models: [],
            options: [],
            selYear: '',
            selMake: '',
            selModel: '',
            selOption: ''
        }
    }

    handleChangeAndSelection = (event) => {
        if (event.target.id === 'selYear') {
            this.setState({
                makes: [],
                models: [],
                options: [],
                selMake: '',
                selModel: '',
                selOption: ''
            })
        } else if (event.target.id === 'selMake') {
            this.setState({
                models: [],
                options: [],
                selModel: '',
                selOption: ''
            })
        } else if (event.target.id === 'selModel') {
            this.setState({
                options: [],
                selOption: ''
            })
        }

        if (event.target.id === 'selOption' && event.target.selectedIndex > 0) {
            this.setState({
                selOption: this.state.options[event.target.selectedIndex - 1]
            })
        } else {
            this.setState({
                [event.target.id]: event.target.value
            })
        }
        
    }

    componentDidMount() {
        if (this.state.years.length < 1) {
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
        if (this.state.selYear) {
            if (this.state.makes.length < 1) {
                fetch('http://localhost:5000/api/v1/auto_info/get_makes?year=' + this.state.selYear)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        this.setState({
                            makes: data.makes
                        })
                    })
            } else if (this.state.selMake && this.state.models.length < 1) {
                fetch('http://localhost:5000/api/v1/auto_info/get_models?year=' + this.state.selYear + '&make=' + this.state.selMake)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        this.setState({
                            models: data.models
                        })
                    })
            } else if (this.state.selMake && this.state.selModel && this.state.options.length < 1) {
                fetch('http://localhost:5000/api/v1/auto_info/get_options?year=' + this.state.selYear + '&make=' + this.state.selMake + '&model=' + this.state.selModel)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        this.setState({
                            options: data.options
                        })
                    })
            }
        }
        console.log(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    formSubmition = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch('http://localhost:5000/api/v1/listings/create_listing', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div className='container min-h-screen mx-auto'>
                <form className='flex flex-row justify-center'>
                    <div className='p-2 px-10 w-1/2 lg:w-1/3'>
                        <Select id='selYear' label='Select Year' className='py-2' onChange={this.handleChangeAndSelection}>
                            <Select.Option>Year</Select.Option>
                            {
                                this.state.years.map((year) => {
                                    return (<Select.Option>{year}</Select.Option>)
                                })
                            }
                        </Select>
                        <Select id='selMake' label='Select Make' className='py-2' onChange={this.handleChangeAndSelection}>
                            <Select.Option>Make</Select.Option>
                            {
                                this.state.makes.map((make) => {
                                    return (<Select.Option>{make}</Select.Option>)
                                })
                            }
                        </Select>
                        <Select id='selModel' label='Select Model' className='py-2' onChange={this.handleChangeAndSelection}>
                            <Select.Option>Model</Select.Option>
                            {
                                this.state.models.map((model) => {
                                    return (<Select.Option>{model}</Select.Option>)
                                })
                            }
                        </Select>
                        <Select id='selOption' label='Select Option' className='py-2' onChange={this.handleChangeAndSelection}>
                            <Select.Option>Option</Select.Option>
                            {
                                this.state.options.map((option) => {
                                    return (<Select.Option>{option.option}</Select.Option>)
                                })
                            }
                        </Select>
                    </div>
                    <div className='p-2 px-10 w-1/2 lg:w-1/3'>
                        <Input label='Mileage' id='mileage' className='py-2' />
                        <Input label='Zipcode Location' id='zipLocation' className='py-2' />
                        <Input label='VIN' id='mileage' className='py-2' />
                        <Input label='Listing price' id='price' className='py-2' />
                        <Select label='Does the vehicle have a lien?' id='lien' className='py-2'>
                            <Select.Option>Lien</Select.Option>
                            <Select.Option>Yes</Select.Option>
                            <Select.Option>No</Select.Option>
                        </Select>
                    </div>
                </form >
            </div>

        )
    }
}

export default VehicleListingCreate