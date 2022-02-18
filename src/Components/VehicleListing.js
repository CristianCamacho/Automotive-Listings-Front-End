import React, { Component } from 'react'
import { Select } from '@supabase/ui'

class VehicleListing extends Component {
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
        console.log(this.state)
        if (this.state.selYear) {
            if (this.state.makes.length < 1) {
                console.log('get makes')
                fetch('http://localhost:5000/api/v1/auto_info/get_makes?year=' + this.state.selYear)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        this.setState({
                            makes: data.makes
                        })
                    })
            } else if (this.state.selMake && this.state.models.length < 1) {
                console.log('get models')
                fetch('http://localhost:5000/api/v1/auto_info/get_models?year=' + this.state.selYear + '&make=' + this.state.selMake)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        console.log(data)
                        this.setState({
                            models: data.models
                        })
                    })
                console.log(this.state.models)
            } else if (this.state.selMake && this.state.selModel && this.state.options.length < 1) {
                console.log('get options')
                fetch('http://localhost:5000/api/v1/auto_info/get_options?year=' + this.state.selYear + '&make=' + this.state.selMake + '&model=' + this.state.selModel)
                    .then(res => {
                        return res.json()
                    }).then(data => {
                        console.log(data)
                        this.setState({
                            options: data.options
                        })
                    })
            }
        }

    }

    handleChange = (event) => {
        if (event.target.id == 'selYear') {
            this.setState({
                makes: [],
                models: [],
                options: [],
                selMake: '',
                selModel: '',
                selOption: ''
            })
        } else if (event.target.id == 'selMake') {
            this.setState({
                models: [],
                options: [],
                selModel: '',
                selOption: ''
            })
        } else if (event.target.id == 'selModel') {
            this.setState({
                options: [],
                selOption: ''
            })
        }

        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
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
                    <Select id='selMake' labl='Select Make' onChange={this.handleChange}>
                        <Select.Option>Select Makes</Select.Option>
                        {
                            this.state.makes.map((make) => {
                                return (<Select.Option>{make}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selModel' labl='Select Model' onChange={this.handleChange}>
                        <Select.Option>Select Model</Select.Option>
                        {
                            this.state.models.map((model) => {
                                return (<Select.Option>{model}</Select.Option>)
                            })
                        }
                    </Select>
                    <Select id='selOption' labl='Select Option' onChange={this.handleChange}>
                        <Select.Option>Select Option</Select.Option>
                        {
                            this.state.options.map((option) => {
                                return (<Select.Option>{option}</Select.Option>)
                            })
                        }
                    </Select>
                </form>
            </div >
        )
    }
}

export default VehicleListing