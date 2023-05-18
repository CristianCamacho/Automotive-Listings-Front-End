import React from 'react'
import HeaderNav from './HeaderNav'
import '../css/Header.css'
export default function Header(props) {
    return (

        <header class="header-container">
        <div class="container">
          <h1 class="site-name">Automotive Listings</h1>
          <nav class="header-nav">
            <ul>
              <li><a href="link1">Home</a></li>
              <li><a href="link2">Listings</a></li>
              <li><a href="link3">Sign In</a></li>
              <li><a href="link4">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>

        // <header className='pb-20'>
        //     <div className='z-10 w-full fixed flex flex-row  items-center px-4 md:px-12 h-20 bg-celadon-blue'>
        //         <div className=''>
        //             <p className='text-3xl'>Automotive Listings</p>
        //         </div>
        //         <div className='flex justify-around w-full relative'>
        //             <HeaderNav logout={props.logout} loggedIn={props.loggedIn} />
        //         </div>
        //     </div>
        // </header>
    )
}