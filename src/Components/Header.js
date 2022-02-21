import React from 'react'

export default function Header() {
    return (
        <div className='pb-20'>
            <header className='z-10 w-full fixed flex flex-row  items-center px-4 md:px-12 h-20 bg-white'>
                <div className=''>
                    <p className='text-3xl'>Automotive Listings</p>
                </div>
                <div className='flex justify-around w-full relative'>
                    <div className='flex flex-row justify-around w-full lg:w-3/4' >
                        <a>Home</a>
                        <p>|</p>
                        <a>Sign in</a>
                        <p>|</p>
                        <a>Create Listing</a>
                        <p>|</p>
                        <a>About</a>
                    </div>
                </div>
                <div className='absolute mt-16 inset-4 blur-3xl h-3 bg-gradient-to-b from-white ...'></div>
            </header>
        </div>
    )
}