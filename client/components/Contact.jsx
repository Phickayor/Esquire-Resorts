import React, { useEffect, useState } from 'react'
import Mail from './mail'
import Address from './Address'
// import CallNow from './callNow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
function ContactUs() {
    const [content, setContent] = useState(<Address />)
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} className="pb-2" />
    const phone = <FontAwesomeIcon icon={faPhone} className="pb-2" />
    const mail = <FontAwesomeIcon icon={faMailBulk} className="pb-2" />
    const [mailDiv, setMailDiv] = useState()
    const [locationDiv, setLocationDiv] = useState()

    function setColor() {
        if (content.type.name === "Address") {
            setLocationDiv("")
            setMailDiv("slate-700")
        }
        else {
            setMailDiv("")
            setLocationDiv("slate-700")
        }
    }
    useEffect(() => {
        setColor()
    })

    return (
        <div className='container mx-auto w-11/12 my-10'>
            <h2 className='text-4xl text-center font-semibold '>Get in touch!</h2>
            <p className='text-md text-center m-4'>Reach out to us for enquiries on Esquire Resorts</p>
            <div className=' flex gap-10 bg-violet-500 text-center mx-auto rounded-xl w-fit px-5 mt-8 justify-center'>
                <div className={` cursor-pointer  p-4 px-10 self-center  rounded-2xl`} onClick={() => setContent(<Address />)}>
                    <h1 className={`text-4xl text-${locationDiv}`}>{location}</h1>
                </div>
                <div className={`cursor-pointer p-4 px-10  rounded-2xl`} onClick={() => setContent(<Mail />)}>
                    <h1 className={`text-4xl text-${mailDiv}`}>{mail}</h1>
                </div>
            </div>

            {content}
        </div>
    )
}

export default ContactUs