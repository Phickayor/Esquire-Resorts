import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import Link from 'next/link'

function Gallery() {
    useEffect(() => {
        Aos.init()
    })

    return (
        <div className='my-10 mx-auto w-11/12'>
            <div className='flex flex-col lg:flex-row space-y-10'>

                <div
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    className='lg:w-1/2 p-4 flex flex-col justify-center space-y-2 lg:space-y-8'>
                    <h1 className='text-4xl text-center text-purple-500 font-bold lg:text-5xl'>OUR GALLERY</h1>
                    <p className='text-3xl font-semibold text-slate-700 text-center'>Relive our moments with us !</p>
                    <Link href="https://esquireresortslimited.pixieset.com/esquireresorts/" className='justify-center flex'>
                        <button className=' hidden lg:block btn'>View Gallery</button>
                    </Link>
                </div>

                <div className='lg:w-1/2 mx-auto w-11/12'>
                    <img className="h-full hover:opacity-50  rounded-2xl w-full" src="/background/bg1.jpeg" alt="Esquire Building" />
                </div>
                <Link href="https://esquireresortslimited.pixieset.com/esquireresorts/" className='justify-center flex'>
                    <button className='lg:hidden btn'>View Gallery</button>
                </Link>
            </div>
        </div>
    )
}

export default Gallery