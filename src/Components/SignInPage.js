import React, { Component } from 'react'
import SignIn from './SignIn'
import Header from './Header'
import Footer from './Footer'

class SignInPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class='flex items-center justify-center flex-col min-h-screen'>
                    <SignIn BACKEND={this.props.BACKEND} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default SignInPage