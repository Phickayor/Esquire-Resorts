import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faMapMarker, faSpinner } from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Link from 'next/link'
import { baseurl } from '../config/host'
function Footer() {
    const suscriberMailContainer = useRef(null)
    const mail = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
    const [load, setLoad] = useState(null)
    function Suscribe(e) {
        e.preventDefault()
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var mailProvided = suscriberMailContainer.current.value
        var mail = mailProvided.toLowerCase()
        if (emailPattern.test(mail) === true) {
            setLoad(spin)
            fetch(`${baseurl}/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ mail })
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data)
                    if (data.status == "subscribed") {
                        alert("Thanks for suscribing!. We wiil let you know of any exclusive offers available")
                    }
                    else {
                        alert("The owner of this mail is already a suscriber.")
                    }
                    setLoad("")
                    suscriberMailContainer.current.value = ""
                }).catch((err) => {
                    alert("Something went wrong.")
                    console.log(err)
                    setLoad("")
                })
        }
        else {
            alert("Please type a valid email address")
        }
    }
    useEffect(() => {
        Aos.init()
    })


    return (
        <footer
            data-aos="fade-down"
            data-aos-duration="2000"
            className="bg-[#ebeef3] text-center py-[40px] text-gray-700">
            <div className="container mx-auto px-[15px] md:px-[24px] lg:flex lg:justify-between">
                <div className="flex flex-col md:flex-row items-center md:items-start lg:w-[65%]">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                        <div className="font-bold mb-4 text-lg">Site Map</div>
                        <Link href="/rooms" className="boxuplink font-normal leading-[200%] text-sm">View Rooms</Link>
                        <Link href="/" className="boxuplink font-normal leading-[200%] text-sm">About Us</Link>
                        <Link href="/contact" className="boxuplink font-normal leading-[200%] text-sm">Contact Us</Link>
                        <a href="https://esquireresortslimited.pixieset.com/esquireresorts/" className="boxuplink font-normal leading-[200%] text-sm">Gallery</a>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                        <div className="font-bold mb-4 text-lg">Help Center</div>
                        <Link href="/help" className="boxuplink font-normal leading-[200%] text-sm">FAQ&apos;S</Link>
                        <Link href="/terms" className="boxuplink font-normal leading-[200%] text-sm">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="boxuplink font-normal leading-[200%] text-sm">Privacy Policy</Link>
                        {/* <a href="#" className="boxuplink font-normal leading-[200%] text-sm">Payment Methods</a> */}
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="boxup-box flex flex-col grow items-center md:items-start basis-auto mb-[40px]">
                        <div className="font-bold mb-4 text-lg">Contact Details</div>
                        <a href="https://goo.gl/maps/6Rboa4u5RH7VCbik7" className="boxuplink font-normal leading-[200%] text-sm">{location} &nbsp;18 Olokunola Crescent Ikorodu </a>
                        <a href="tel:+2349031870456" className="boxuplink font-normal leading-[200%] text-sm">{phone} &nbsp;09031870456</a>
                        <a href="mailto:esquireresorts@gmail.com" className="boxuplink font-normal leading-[200%] text-sm">{mail} &nbsp;esquireresorts@gmail.com</a>
                    </div>
                </div>
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className='md:flex md:justify-between md:items-center lg:flex-col'>
                        <div className="social text-center md:text-start md:self-start">
                            <div className="mb-[8px] font-bold text-[18px]">Join Us</div>
                            <div className="social_links text-primary text-[23px]">
                                <a href="" className='inline-block'><FontAwesomeIcon icon={faFacebookF} className="mr-[35px] md:mr-[45px]" /></a>
                                <a href="" className='inline-block'><FontAwesomeIcon icon={faTwitter} className="mr-[35px] md:mr-[45px]" /></a>
                                <a href="https://www.instagram.com/esquireresort/" className='inline-block'><FontAwesomeIcon icon={faInstagram} className="mr-0" /></a>
                            </div>
                        </div>
                        <div className="news mt-[40px] md:mt-[0]">
                            <div className="newsbox mb-[20px] max-w-[400px] md:max-w-[350px]">
                                <div className="mb-[8px] font-bold text-[18px] md:text-start">Don&apos;t Miss Out</div>
                                <p className='mb-[24px] leading-[19px] font-normal md:text-[14px]'>Exclusive offers are just a click away.</p>
                                <form>
                                    <div className=" flex justify-between">
                                        <div className=" w-[100%]">
                                            <input ref={suscriberMailContainer} autoComplete="true" required type="email" name="email" className='h-[40px] py-[10px] px-[16px] border border-[#dcdcdc] rounded-l w-[100%]' placeholder='Email Address' />
                                        </div>
                                        <div className=" min-w-auto w-[120px] rounded-r bg-[#1976ED] text-white">
                                            <button className='border-primary min-h-[40px] text-sm px-[11px] font-bold whitespace-nowrap' onClick={Suscribe}>{load} SUBSCRIBE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center text-[#999999] test-sm">&copy; 2023 Esquireresorts.com All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default Footer