import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

class HeaderNav extends Component {
    render() {
        if (this.props.loggedIn) {
            return (
                <nav className='flex flex-row justify-around w-full lg:w-3/4' >
                    <Link to='/'>Home</Link>
                    <p>|</p>
                    <Link to='/' onClick={this.props.logout}>Logout</Link>
                    <p>|</p>
                    <Link to='/createlisting'>Create Listing</Link>
                    <p>|</p>
                    <Link to=''>About</Link>
                </nav>
            )

        } else {
            return (
                <nav className='flex flex-row justify-around w-full lg:w-3/4' >
                    <Link to='/'>Home</Link>
                    <p>|</p>
                    <Link to='/signin'>Sign In</Link>
                    <p>|</p>
                    <Link to='/signup'>Sign Up</Link>
                    <p>|</p>
                    <Link to=''>About</Link>
                </nav>
            )
        }
    }
}



export default HeaderNav