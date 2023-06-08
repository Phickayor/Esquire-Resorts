import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
function Goals() {
    useEffect(() => {
        Aos.init()
    })

    return (

        <div className='lg:flex mx-auto w-11/12 lg:mt-20 mt-10 lg:space-y-0 space-y-10'>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className=' px-10  text-center mx-auto lg:w-8/12 '>
                <h1 className="md:text-5xl text-3xl mb-5 font-semibold text-slate-700">Our Vision</h1>
                <p className='text-lg '>
                    To be the premier destination where luxury,
                    comfort, and exceptional hospitality converge,
                    creating unforgettable experiences for our esteemed guests.
                </p>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className=' px-10 lg:border-l-2 text-center mx-auto lg:w-8/12'>
                <h1 className="md:text-5xl text-3xl mb-5 font-semibold text-slate-700">Our Mission</h1>
                <p className='text-lg'>
                    We are dedicated to providing unparalleled service, luxurious accommodations,
                    and delectable cuisine, ensuring that each guest&apos;s stay is a cherished and memorable one.
                    We strive to exceed expectations and create a haven of relaxation and indulgence for all who enter our doors.
                </p>
            </div>

        </div>
    )
}

export default Goals