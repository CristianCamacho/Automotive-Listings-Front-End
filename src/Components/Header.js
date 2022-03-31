import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className='pb-20'>
                <div className='z-10 w-full fixed flex flex-row  items-center px-4 md:px-12 h-20 bg-celadon-blue'>
                    <div className=''>
                        <p className='text-3xl'>Automotive Listings</p>
                    </div>
                    <div className='flex justify-around w-full relative'>
                        <nav className='flex flex-row justify-around w-full lg:w-3/4' >
                            <Link to='/'>Home</Link>
                            <p>|</p>
                            <Link to='/signin'>Sign in</Link>
                            <p>|</p>
                            <a href='#' onClick={this.props.logout}>Logout</a>
                            <p>|</p>
                            <Link to='/createlisting'>Create Listing</Link>
                            <p>|</p>
                            <Link to=''>About</Link>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header