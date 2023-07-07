import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Address() {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const web = <FontAwesomeIcon icon={faGlobe} />
    useEffect(() => {
        Aos.init()
    })

    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className='lg:h-80 text-slate-700 lg:flex lg:w-9/12 rounded-2xl my-10 mx-auto'>
            <iframe
                className="rounded-2xl lg:rounded-r-[0] lg:w-3/5 w-full"
                title="map"
                src="https://www.google.com/maps/embed/v1/place?q=The+Esquire+Resort+Limited,+Okunola+Crescent+Road,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
            <div className='h-full rounded-2xl lg:rounded-l-[0] mt-5 lg:mt-0 relative text-white bg-slate-500 p-4 flex flex-col space-y-5 justify-center'>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{location}</h1>
                    <h1 className='  text-md'>18 Okunola Cres Rd, Ikorodu , Lagos</h1>
                </div>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{phone}</h1>
                    <a href='tel:+2349091745367'className='text-md'>090 9174 5367</a>
                </div>
                <div className='flex space-x-5'>
                    <h1 className='text-3xl'>{web}</h1>
                    <a href="https://www.esquireresorts.com" className=' text-md'>www.esquireresorts.com</a>
                </div>
            </div>
        </div>
    )
}
export default Address