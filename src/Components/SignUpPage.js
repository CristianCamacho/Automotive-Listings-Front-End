import React, { Component } from 'react'
import SignUp from './SignUp'

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <div class='flex items-center justify-center flex-col min-h-screen'>
                    <SignUp BACKEND={this.props.BACKEND}/>
                </div>
            </div>
        )
    }
}

export default SignUpPage