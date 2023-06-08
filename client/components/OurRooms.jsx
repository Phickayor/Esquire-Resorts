import React, { useEffect } from "react";
import rooms from "../utils/rooms.json"
import Router from 'next/router'
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css'
function OurRooms() {

    function Test(event) {
        Router.push({
            pathname: `/booknow/${event}`
        })
    }
    useEffect(() => {
        Aos.init()
    })

    return (

        <div className='mx-auto px-10 my-10'>
            <h1 className='text-4xl md:text-5xl font-mono font-semibold text-center '>Book a room</h1>
            <p className='md:text-2xl text-xl font-mono text-center '>Pick whichever suits you. </p>
            <div className="grid xl:grid-cols-3 gap-20 sm:grid-cols-2 md:w-11/12 mx-auto md:mt-10 mt-5"
                data-aos="fade-up"
                data-aos-duration="1000">
                {rooms.map((room, index) => (
                    <div data-aos="zoom-in"
                        data-aos-duration="1000"
                        key={index}
                        className='hover:cursor-pointer hover:scale-150 hover:border-purple-500 ease-in duration-300 p-4 lg:p-6 rounded-2xl border-2'>
                        <img src={room.image[0]} className='rounded-2xl mx-auto self-center' alt={room.name + "Image"} />
                        <div className='space-y-3 my-4'>
                            <h3 className={`text-3xl text-center font-mono font-semibold`}>{room.name}</h3>
                            <h1 className="text-center text-3xl font-semibold text-purple-200">&#8358;{room.price + " /day"}</h1>
                            <div className="flex justify-center">
                                <button onClick={() => Test(room.path)}
                                    className="lg:hover:scale-110 hover:scale-105 ease-in duration-300 text-center text-white text-3xl mx-auto w-4/5 py-2 font-bold bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500 rounded-2xl">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default OurRooms;
