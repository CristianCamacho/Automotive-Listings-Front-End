import React, { useState} from 'react'
import { Input, Button } from '@supabase/ui'
import { Navigate } from 'react-router-dom'

export default function SignUp(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redir, setRedir] = useState(false)
    
    function handleOnChange(event) {
        switch(event.target.id) {
            case 'username':
                setUsername(event.target.value)
                break;
            case 'password':
                setPassword(event.target.value)
                break;
        }
    }

    function submitForm(event) {
        event.preventDefault()
        fetch(props.BACKEND + '/api/v1/users/create_user', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => {
            if(res.status == 201) {
                setRedir(true)
            }
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }

    if(redir) {
        return(
            <Navigate to='/signin' />
        )
    } else {
        return (
            <div>
                <div class='flex items-center flex-col min-h-screen p-12'>
                    <p className='text-4xl'> Sign Up</p>
                    <form class='w-3/4 lg:w-2/3 px-8 py-10 flex items-center justify-center flex-col' onSubmit={submitForm}>
                        <fieldset className='w-2/4 flex-col justify-items-center'>
                            <Input className='mb-6' label='User' onChange={handleOnChange} type='text' name='username' id='username' />
                            <Input className='mb-6' label='Password' onChange={handleOnChange} type='password' name='password' id='password' />
                            <Input className='mb-6' label='Verify Password' onChange={handleOnChange} type='password' name='vPassword' id='vPassword' />
                        </fieldset>
                        <div className='flex flex-row'>
                            <div>
                                <Button className='m-2' >Create Account</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}