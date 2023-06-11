import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfoCircle, faSpinner, faStar } from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import handlePayment from './handlePayment'
import Aos from 'aos'
import 'aos/dist/aos.css'
function BookRoom(props) {
    //  Defining all variables

    const guestNumberContainer = useRef(null)
    const arrivalDateContainer = useRef(null)
    const depatureDateContainer = useRef(null)
    const mailContainer = useRef(null)
    const firstnameContainer = useRef(null)
    const [minimumArrivalDate, SetminimumArrivalDate] = useState("")
    const [minimumDepatureDate, SetminimumDepatureDate] = useState("")
    const [load, setLoad] = useState("")
    const [infoMessage, setInfo] = useState("Fill out this form carefully to book a reservation.")
    const [infoColor, setInfoColor] = useState()
    const { price } = props;
    const [latestPrice, setLatestPrice] = useState("Select dates")
    var today = new Date();
    // const star = <FontAwesomeIcon icon={faStar} />
    const check = <FontAwesomeIcon className="text-purple-500" icon={faCheck} />
    const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin mx-2" />
    const info = <FontAwesomeIcon className="text-lg" icon={faInfoCircle} />
    //setting min depature date  
    function depDateSet(minarr) {
        var mindepDate, mindepMonth
        minarr.setDate(minarr.getDate() + 1);
        if (minarr.getDate() < 10) {
            mindepDate = "0" + minarr.getDate()
        }
        else {
            mindepDate = minarr.getDate()
        }

        if ((minarr.getMonth() + 1) < 10) {
            mindepMonth = "0" + (minarr.getMonth() + 1)
        }
        else {
            mindepMonth = (minarr.getMonth() + 1)
        }
        SetminimumDepatureDate(minarr.getFullYear() + '-' + mindepMonth + '-' + mindepDate)
    }
    function arrDateSet(today) {
        var currentDate;
        var currentMonth;
        if (today.getDate() < 10) {
            currentDate = "0" + today.getDate()
        }
        else {
            currentDate = today.getDate()
        }

        if ((today.getMonth() + 1) < 10) {
            currentMonth = "0" + (today.getMonth() + 1)
        }
        else {
            currentMonth = today.getMonth() + 1
        }
        var currentYear = today.getFullYear()
        SetminimumArrivalDate(currentYear + "-" + currentMonth + "-" + currentDate)
    }

    // Sending Details to the Backend
    function SendDetails(e) {
        e.preventDefault()
        setLoad(spin)
        var mailGiven = mailContainer.current.value
        var mail = mailGiven.toLowerCase()
        var fname = firstnameContainer.current.value
        var arrivalDate = arrivalDateContainer.current.value
        var depatureDate = depatureDateContainer.current.value
        var guestNumber = guestNumberContainer.current.value
        var roomname = props.roomname

        fetch("/checkbooking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ roomname, arrivalDate, depatureDate })
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                console.log(data.message)
                if (data.message === "available") {
                    setInfoColor("green")
                    setInfo("Lucky You!, the room is available proceeding to payment...")
                    console.log("info set")
                    handlePayment(mail, price, roomname, arrivalDate, depatureDate, guestNumber, fname)
                }
                else {
                    setInfoColor("red")
                    setInfo("Sorry this room is currently reserved between these days")
                }
                setLoad("")
            })
            .catch((error) => {
                console.log(error)
                alert('An error occured,ensure you filled the form correctly. if error persists check your internet connection and try again')
                setLoad("")
            });
    }

    // Changing Price irrespective to date

    function priceCheck() {
        var start = new Date(arrivalDateContainer.current.value)
        var finish = new Date(depatureDateContainer.current.value)
        // To calculate the time difference of two dates
        var Difference_In_Time = finish.getTime() - start.getTime();
        // To calculate the no. of days between two dates
        var diff = Difference_In_Time / (1000 * 3600 * 24)
        setLatestPrice('₦ ' + (price * diff))
        depDateSet(start)
    }
    useEffect(() => {
        Aos.init()
        arrDateSet(today)
    }, [today])
    return (

        <form onSubmit={SendDetails} className='w-full'
            data-aos="fade-left"
            data-aos-duration="1000">
            <div className=" pb-6">
                <div className="space-y-4">
                    <div className=" flex justify-between p-2 md:p-8 text-slate-700">
                        <h1 className=' text-xl md:text-2xl font-bold'>Booking Details</h1>
                        <div className='flex text-lg md:text-xl text-gray-700 font-semibold '>
                            <b>₦ {price}/night</b>
                        </div>
                    </div>
                    <h3 style={{ color: infoColor }} className="text-purple-500 text-center text-md font-semibold mx-5">{info} &nbsp; {infoMessage}</h3>

                    <div className="relative z-0 border-b-2">
                        <input type="text" required ref={firstnameContainer} id="floating_standard" className="block py-2.5 px-0 mx-5 w-full text-lg text-slate-700 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer placeholder:text-transparent focus:placeholder:text-slate-400" placeholder="John Doe" />
                        <label htmlFor="floating_standard" className="absolute text-lg text-black mx-5 font-bold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0  border-b-2">
                        <input type="email" required ref={mailContainer} id="floating_standard" className="block py-2.5 px-0 mx-5 w-full text-lg text-slate-700 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer placeholder:text-transparent focus:placeholder:text-slate-400" placeholder="johndoe@gmail.com" />
                        <label htmlFor="floating_standard" className="absolute text-lg text-black mx-5 font-bold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0  border-b-2">
                        <input
                            type="date"
                            required ref={arrivalDateContainer}
                            min={minimumArrivalDate}
                            onChange={priceCheck}
                            id="floating_standard" className="block py-2.5 px-0 mx-auto w-11/12 text-lg text-slate-700 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                        />
                        <label htmlFor="floating_standard" className="absolute text-lg text-black mx-5 font-bold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Arrival Date</label>
                    </div>
                    <div className="relative z-0  border-b-2">
                        <input
                            type="date"
                            required ref={depatureDateContainer}
                            min={minimumDepatureDate}
                            onChange={priceCheck}
                            id="floating_standard" className="block py-2.5 px-0 mx-auto w-11/12 text-lg text-slate-700 bg-transparent border-0 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-500 peer"
                        />
                        <label htmlFor="floating_standard" className="absolute text-lg text-black mx-5 font-bold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Departure Date</label>
                    </div>
                    <select id="countries"
                        required
                        ref={guestNumberContainer}
                        className=" border-b text-gray-900 text-md rounded-lg block px-5 w-full mx-auto p-2.5 border-gray-600 placeholder-gray-400  focus:ring-purple-500 focus:border-purple-500">
                        <option defaultValue disabled>Number of Guests</option>
                        <option value="1">Just You</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                    </select>

                    <div className="hidden lg:block space-y-4">
                        <div className="text-2xl text-gray-700 p-5 flex justify-between">
                            <h1>Total Cost</h1>
                            <div>
                                {price ? (<b>{latestPrice}</b>) : (<h1>...</h1>)}
                            </div>
                        </div>
                        <div className="justify-center hidden lg:flex">
                            <button type='submit' className="text-2xl bg-purple-500 w-9/12 text-white self-center rounded-lg p-5 font-semibold">
                                {load} Proceed to Payment
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="whitespace-nowrap z-20 lg:hidden sticky bottom-0 w-full p-2 grid grid-cols-2 gap-5 border-2 rounded-lg shadow-xl shadow-slate-700 bg-white">
                <div className="w-1/2 text-xl md:text-2xl">
                    <h1 className="font-bold ml-10">{latestPrice}</h1>
                    <p className="text-gray20 text-lg">Only ₦{price} / night</p>
                </div>
                <button type="submit" className="bg-purple-500 font-semibold w-full text-white cursor-pointer outline-none hover:bg-slate-500 ">
                    {load} Pay Now
                </button>
            </div>
        </form>
    )
}
export default BookRoom
