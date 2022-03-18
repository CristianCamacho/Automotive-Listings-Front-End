import React, { Component } from "react"
import { Input, Button } from '@supabase/ui'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        fetch(this.props.BACKEND + '/api/v1/users/create_user', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div class='flex items-center justify-center flex-col min-h-screen'>
                <form class='w-3/4 lg:w-2/3 px-8 py-10 flex items-center justify-center flex-col' onSubmit={this.submitForm}>
                    <div className='w-2/4 flex-col justify-items-center'>
                        <Input className='mb-6' label='User' onChange={this.handleOnChange} type='text' name='username' id='username' />
                        <Input className='mb-6' label='Password' onChange={this.handleOnChange} type='password' name='password' id='password' />
                        <Input className='mb-6' label='Verify Password' onChange={this.handleOnChange} type='password' name='vPassword' id='vPassword' />
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <Button className='m-2' >Create Account</Button>
                        </div>
                        <div>
                            <Button className='m-2' >Sign In</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp