import Link from 'next/link'
import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from '@next/font/google';
const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })

function NotFound() {
    return (
        <div className={`bg-[#8d4e9f] ${poppins.className}`}>
            <Head>
                <title>Page Not Found</title>
                <meta name="description" content="Esquire Resorts 404 page " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar
                firstnav={"Home"}
                firstlink={"/"}
                secondnav={"Our Rooms"}
                secondlink={"/rooms"}
                thirdnav={"Help"}
                thirdlink={"/help"}
                fourthnav="Contact"
                fourthlink="/contact"
            />
            <div className='h-screen relative'>
                <div className='flex justify-between text-white mx-auto lg:w-10/12 w-11/12 text-center m-20 mb-5'>
                    <img className='w-1/2 lg:w-auto opacity-70 md:opacity-100 absolute sm:relative' src='https://media.giphy.com/media/RMwYOO5e8pr1lhL8K7/giphy.gif' />
                    <div className='md:w-1/2  z-[5] flex flex-col justify-center space-y-8'>
                        <h1 className='text-5xl font-semibold font-mono leading-[56px]'>Are you lost?</h1>
                        <p className='my-2 text-md text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus neque obcaecati deleniti accusantium veritatis fuga error vero sequi eveniet, temporibus laudantium, quam voluptate et tempore nesciunt? Rem, eum iste.
                        </p>
                        <div className='flex justify-center space-x-10 '>
                            <Link href="/" className='hover:bg-inherit self-center text-purple-500 bg-white p-4 px-10 rounded-2xl text-xl lg:text-2xl text-white font-semibold hover:border-2 hover:text-white'>Back to Homepage</Link>
                            {/* <Link href="/" className='hover:bg-inherit self-center text-purple-500 bg-white p-4 rounded-2xl text-xl lg:text-2xl text-white font-semibold  hover:border-2 hover:text-white'>Back to Homepage</Link> */}
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </div>
    )
}

export default NotFound