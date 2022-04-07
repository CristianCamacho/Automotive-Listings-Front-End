import React, { Component } from 'react'
import HeaderNav from './HeaderNav'

class Header extends Component {

    render() {
        return (
            <header className='pb-20'>
                <div className='z-10 w-full fixed flex flex-row  items-center px-4 md:px-12 h-20 bg-celadon-blue'>
                    <div className=''>
                        <p className='text-3xl'>Automotive Listings</p>
                    </div>
                    <div className='flex justify-around w-full relative'>
                        <HeaderNav logout={this.props.logout} loggedIn={this.props.loggedIn}/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header