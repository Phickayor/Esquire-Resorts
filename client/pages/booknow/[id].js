import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BookRoom from '../../components/BookRoom'
import RoomDescription from '../../components/RoomDescription'
// import Head from 'next/head'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Rooms from '../../utils/rooms.json'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from '@next/font/google';
const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })
function Booknow({ selectedIndex }) {

    const [roomName, setRoomName] = useState("")
    const router = useRouter()
    var roomselected = router.query.id

    Rooms.map((room, index) => {
        if (room.path === roomselected) {
            selectedIndex = index
        }
    })

    function roomDetails(name) {
        setRoomName(name)
    }

    return (
        <div className={`${poppins.className}`}>
            <Head>
                <title>{"Esquire Resorts | " + roomName}</title>
                <meta name="description" content="Esquire hotel rooms " />
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
            <div>
                <RoomDescription nameHandler={roomDetails} selectedIndex={selectedIndex} />
                <Footer />
            </div>

        </div>
    )
}

export default Booknow