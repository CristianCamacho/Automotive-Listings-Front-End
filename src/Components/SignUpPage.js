import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import SignUp from './SignUp'

class SignUpPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>SignUp</h1>
                <div class='flex items-center justify-center flex-col min-h-screen'>
                    <SignUp BACKEND={this.props.BACKEND}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignUpPage