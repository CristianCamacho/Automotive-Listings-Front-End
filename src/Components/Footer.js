import React from 'react'

export default function Footer() {
    return (
        <footer className=''>
            <div className='bg-celadon-blue -mt-40'>
                <div className='container mx-auto flex flex-col'>
                    <div className='h-10 flex'>
                        <p className='self-center'>Automotive-Listings</p>
                    </div>
                    <div className='flex flex-row justify-evenly'>
                        <div>
                            <p>Projecct Links</p>
                            <p>Front-end Repo</p>
                            <p>Back-end Repo</p>
                        </div>
                        <div>
                            <p>Tools used</p>
                            <p>React.js</p>
                            <p>Flask</p>
                            <p>PostgreSQL</p>
                        </div>
                        <div>
                            <p>Other Projects</p>
                            <p>The Concert Dropout</p>
                            <p>Auto-Listings</p>
                            <p>Project-Manager</p>
                            <p>Asteroids</p>
                        </div>
                        <div>
                            <p>Personal Links</p>
                            <p>LinkedIn</p>
                            <p>GitHub</p>
                            <p>Portfolio</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}