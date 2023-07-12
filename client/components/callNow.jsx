import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function callNow() {
    const phone = <FontAwesomeIcon icon={faPhone} />

    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className='h-full lg:p-10 lg:w-9/12 mx-auto lg:flex rounded-2xl mt-5  text-white bg-slate-500 p-4 lg:space-y-0 space-y-5 justify-around'>
            <a href="tel:+2349091745367" className='flex space-x-5 p-4 rounded-2xl hover:bg-white hover:text-slate-500 lg:w-1/2 justify-center'>
                <h1 className='text-3xl'>{phone}</h1>
                <h1 className=' text-lg'>090 9174 5367</h1>
            </a>
            <a href="tel:+2349031870456" className='flex space-x-5 p-4 rounded-2xl hover:bg-white hover:text-slate-500 lg:w-1/2 justify-center'>
                <h1 className='text-3xl'>{phone}</h1>
                <h1 className=' text-lg'>090 3187 0456</h1>
            </a>
        </div>
    )
}

export default callNow