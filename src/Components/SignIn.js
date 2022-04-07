import React, { Component } from "react"
import { Input, Button } from '@supabase/ui'
import { Navigate } from 'react-router-dom'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redir: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        fetch(this.props.BACKEND + '/api/v1/users/login', {
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
            if (data.status == 202) {
                this.setState({
                    redir: 'home'
                })
            }
            this.props.getCurrentUser()
        })
    }

    render() {
        switch (this.state.redir) {
            case 'home':
                return (
                    <Navigate to='/' />
                )
                break;
        }

        return (
            <form class='w-3/4 lg:w-2/3 px-8 py-10 flex items-center justify-center flex-col' onSubmit={this.submitForm}>
                <div className='w-2/4 flex-col justify-items-center'>
                    <Input className='mb-6' label='User' onChange={this.handleOnChange} type='text' name='username' id='username' />
                    <Input className='mb-6' label='Password' onChange={this.handleOnChange} type='password' name='password' id='password' />
                </div>
                <div className='flex flex-row'>
                    <div>
                        <Button className='m-2' >Log In</Button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SignIn