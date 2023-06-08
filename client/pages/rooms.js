import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import OurRooms from '../components/OurRooms'
import { Poppins } from '@next/font/google';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })

function Rooms() {
    return (
        <div className={`bg-slate-700 flex flex-col min-h-screen ${poppins.className}`}>

            <Head>
                <title>Esquire Resorts | Rooms</title>
                <meta name="description" content="Esquire hotel rooms " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar
                firstnav={"Home"}
                firstlink={"/"}
                secondnav={"Help"}
                secondlink={"/help"}
                thirdnav={"Contact"}
                thirdlink={"/contact"}
                fourthnav=""
                fourthlink=""
            />
            <div className=' text-white'>
                <OurRooms />
                <Footer />
            </div>
        </div>
    )
}

export default Rooms