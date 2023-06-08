import React, { useState } from 'react'
import Footer from '../components/Footer'
import HelpSearch from '../components/HelpSearch'
import NavBar from '../components/NavBar'
import Faqs from '../components/Faqs'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from '@next/font/google';
const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })

function Help({ answers }) {
    // const [answersValue, setAnswersValue] = useState("")
    // answers = answersValue

    // function faqsContent(answers) {
    //     setAnswersValue(answers)
    // }
    return (
        <div className={`flex flex-col min-h-screen ${poppins.className}`}>
            <Head>
                <title>Esquire Resorts | Help</title>
                <meta name="description" content="Esquire hotel rooms " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar
                firstnav={"Home"}
                firstlink={"/"}
                secondnav={"Our Rooms"}
                secondlink={"/rooms"}
                thirdnav={"Contact"}
                thirdlink={"/contact"}
                fourthnav=""
                fourthlink=""
            />
            <div>
                <div className=' w-11/12  mx-auto flex flex-col justify-center'>
                    {/* <HelpSearch
                        answers={answers} /> */}
                    <Faqs />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Help