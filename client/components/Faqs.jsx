import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import faqs from '../utils/faqs.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Faqs() {
    const MoreOrLess = <FontAwesomeIcon icon={faAngleDown} />
    function showorHide(e) {
        var par = e.target.nextElementSibling
        if (par === null) {
            e.preventDefault()
        }
        else {
            par.classList.toggle('h-0')
        }
    }
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='my-10 text-slate-700'>
            <div >
                <h1 className='text-2xl md:text-3xl font-semibold text-center pt-10'>Frequently Asked Questions</h1>

                <p className='text-center text-lg my-2 md:my-5'>
                    Find answers to commonly asked questions
                </p>
                {faqs ?
                    (<ul
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className='my-10'>
                        {
                            faqs.map((faq, index) => (
                                <li key={index} className='border-b-2 hover:border-purple-500'>
                                    <div onClick={showorHide} className='flex justify-between py-4 text-black cursor-pointer'>
                                        <h1 className="font-bold text-lg ">
                                            {faq.question}
                                        </h1>
                                        <button className='cursor-pointer' disabled>{MoreOrLess}</button>
                                    </div>
                                    <p
                                        className='my-2 text-lg overflow-y-auto ease-in h-0 duration-300'>
                                        {faq.answer}
                                    </p>
                                </li>

                            ))
                        }
                    </ul>) :
                    (<h1>Loading...</h1>)
                }
            </div>
        </div >
    )
}

export default Faqs