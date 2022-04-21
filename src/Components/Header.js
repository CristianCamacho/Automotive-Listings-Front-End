import React from 'react'
import HeaderNav from './HeaderNav'

export default function Header(props) {
    return (
        <header className='pb-20'>
            <div className='z-10 w-full fixed flex flex-row  items-center px-4 md:px-12 h-20 bg-celadon-blue'>
                <div className=''>
                    <p className='text-3xl'>Automotive Listings</p>
                </div>
                <div className='flex justify-around w-full relative'>
                    <HeaderNav logout={props.logout} loggedIn={props.loggedIn} />
                </div>
            </div>
        </header>
    )
}