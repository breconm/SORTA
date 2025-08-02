import React from 'react'

const Navbar = () => {
    return(
        <nav className='bg-white shadow-md fixed w-full z-10 top-0 left-0'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                <a href='#' className='font-semibold hover:text-blue-600 font-mono'>
                    <i className='fa-solid fa-umbrella-beach pr-3'></i>
                    SORTA
                </a>
            </div>
        </nav>
    )
}
export default Navbar