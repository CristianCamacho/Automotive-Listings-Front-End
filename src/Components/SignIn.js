import React, { useState } from 'react'
import { Input, Button } from '@supabase/ui'
import { Navigate } from 'react-router-dom'

export default function SignIn(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redir, setRedir] = useState(false)

    function handleOnChange(event) {
        switch (event.target.id) {
            case 'username':
                setUsername(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
            default:
                break;
        }
    }

    function submitForm(event) {
        event.preventDefault()
        fetch(props.BACKEND + '/api/v1/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            return res.json()
        }).then(data => {
            if (data.status === 202) {
                setRedir(true)
            }
            props.getCurrentUser()
        })
    }

    if (redir) {
        return (
            <Navigate to='/' />
        )
    } else {
        return (
            <div class='flex items-center flex-col min-h-screen p-12'>
                <p className='text-4xl'> Sign In</p>
                <form class='w-3/4 lg:w-2/3 px-8 py-10 flex items-center justify-center flex-col' onSubmit={submitForm}>
                    <div className='w-2/4 flex-col justify-items-center'>
                        <Input className='mb-6' label='User' onChange={handleOnChange} type='text' name='username' id='username' />
                        <Input className='mb-6' label='Password' onChange={handleOnChange} type='password' name='password' id='password' />
                    </div>
                    <div className='flex flex-row'>
                        <div>
                            <Button className='m-2' >Log In</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}