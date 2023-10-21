import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
// Import Swiper styles
import handleBooking from "./handleBooking";
import { baseurl } from "../config/host";
function BookRoom(props) {
  //Setting minimum values for the time

  const setDateSyntax = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var exactDate = date.getDate();
    month < 10 ? (month = `0${month}`) : month;
    exactDate < 10 ? (exactDate = `0${exactDate}`) : exactDate;
    return `${year}-${month}-${exactDate}`;
  };

  //  Defining all variables
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  var todaysDate = new Date();
  const [arrivalDate, setArrivalDate] = useState(setDateSyntax(todaysDate));
  const [departureDate, setDepartureDate] = useState(null);
  const [guestNumber, setGuestNumber] = useState(null);
  const [minimumArrivalDate, setMinimumArrivalDate] = useState("");
  const [minimumDepartureDate, setMinimumDepartureDate] = useState("");
  const [load, setLoad] = useState("");
  const [infoMessage, setInfo] = useState(
    "Fill out this form carefully to book a reservation."
  );
  const [infoColor, setInfoColor] = useState();
  const { price } = props;
  const [latestPrice, setLatestPrice] = useState("Select dates");

  const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin mx-2" />;
  const info = <FontAwesomeIcon className="text-lg" icon={faInfoCircle} />;

  // //setting min departure date
  // function depDateSet(minarr) {
  //   var mindepDate, mindepMonth;
  //   minarr.setDate(minarr.getDate() + 1);
  //   if (minarr.getDate() < 10) {
  //     mindepDate = "0" + minarr.getDate();
  //   } else {
  //     mindepDate = minarr.getDate();
  //   }

  //   if (minarr.getMonth() + 1 < 10) {
  //     mindepMonth = "0" + (minarr.getMonth() + 1);
  //   } else {
  //     mindepMonth = minarr.getMonth() + 1;
  //   }
  //   setMinimumDepartureDate(
  //     minarr.getFullYear() + "-" + mindepMonth + "-" + mindepDate
  //   );
  // }

  //minimum arrival
  const setMinArrDate = () => {
    var todaysDate = new Date();
    setMinimumArrivalDate(setDateSyntax(todaysDate));

    //minimum departure
    console.log(arrivalDate);
    const [year, month, day] = arrivalDate.split("-").map(Number);
    // Create a new Date object using the components
    const currentArrDate = new Date(year, month - 1, day);
    console.log(currentArrDate);
    // console.log(minArrDate);
    currentArrDate.setDate(currentArrDate.getDate() + 1);
    setMinimumDepartureDate(setDateSyntax(currentArrDate));
  };

  // const setMinDepDate = () => {};

  // Changing Price irrespective to date
  function priceCheck() {
    var start = new Date(arrivalDate);
    var finish = new Date(departureDate);
    // To calculate the time difference of two dates
    var Difference_In_Time = finish.getTime() - start.getTime();
    // To calculate the no. of days between two dates
    var diff = Difference_In_Time / (1000 * 3600 * 24);
    setLatestPrice("₦ " + price * diff);
    console.log(start, " ", finish);
    setMinArrDate();
  }
  // Sending Details to the Backend
  async function SendDetails(e) {
    e.preventDefault();
    try {
      setLoad(spin);
      mail.toLowerCase();
      var roomname = props.roomname;
      const res = await fetch(`${baseurl}/reservation/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomname, arrivalDate, departureDate }),
      });
      const data = await res.json();
      data.message == "available"
        ? (setInfoColor("green"),
          setInfo("Lucky You!, the room is available proceeding to payment..."),
          handleBooking(
            name,
            mail,
            price,
            roomname,
            arrivalDate,
            departureDate,
            guestNumber
          ))
        : (setInfoColor("red"),
          setInfo("Sorry this room is currently reserved between these days"));
      setLoad("");
    } catch (error) {
      console.error(error.message);
      alert(
        "An error occured,ensure you filled the form correctly. if error persists check your internet connection and try again"
      );
      setLoad("");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setMinArrDate();
  }, []);
  useEffect(() => {
    priceCheck();
  }, [arrivalDate, departureDate]);

  return (
    <form onSubmit={SendDetails} className="w-full">
      {loading ? (
        <div className="card space-y-10 w-full">
          <div className="rounded-lg flex justify-between gap-x-10 py-3">
            <div className="card-skeleton w-1/3 py-3"></div>
            <div className="card-skeleton w-1/3 py-3"></div>
          </div>
          <h1 className="text-center card-skeleton py-2.5 mx-auto w-10/12"></h1>
          <div className="p-2 rounded-xl space-y-8">
            <div className="card-skeleton py-3"> </div>
            <div className="card-skeleton py-3"> </div>
            <div className="card-skeleton py-3"> </div>
            <div className="card-skeleton py-3"> </div>
            <div className="card-skeleton py-3"> </div>
            <div className="flex rounded-lg justify-between">
              <h1 className="w-1/3 card-skeleton self-center py-3"></h1>
              <h1 className="w-1/3 card-skeleton self-center py-3"></h1>
            </div>
            <button className="card-skeleton py-6 mx-auto w-10/12"> </button>
          </div>
        </div>
      ) : (
        <>
          <div className=" pb-6">
            <div className="space-y-4">
              <div className=" flex justify-between p-2 md:p-8 text-slate-700">
                <h1 className=" text-xl md:text-2xl font-bold">
                  Booking Details
                </h1>
                <div className="flex text-lg md:text-xl text-gray-700 font-semibold ">
                  <b>₦ {price}/night</b>
                </div>
              </div>
              <h3
                style={{ color: infoColor }}
                className="text-purple-500 text-center text-md font-semibold mx-5"
              >
                {info} &nbsp; {infoMessage}
              </h3>

              <input
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block py-2.5 px-0 mx-auto w-11/12 focus:outline-none border-b-2 focus:border-purple-500"
                placeholder="John Doe"
              />
              <input
                type="email"
                name="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Johndoe@example.com"
                required
                className="block py-2.5 px-0 mx-auto w-11/12 focus:outline-none border-b-2 focus:border-purple-500"
              />
              <div className="mx-auto w-11/12 flex justify-between border-b-2">
                <label className="self-center">Date of Arrival</label>
                <input
                  type="date"
                  name="arrival date"
                  required
                  min={minimumArrivalDate}
                  value={arrivalDate}
                  onChange={(e) => {
                    setArrivalDate(e.target.value);
                  }}
                  className="py-2.5 px-0 focus:outline-none focus:border-b border-purple-500"
                />
              </div>
              <div className="mx-auto w-11/12 flex justify-between border-b-2">
                <label className="self-center">Date of Departure</label>
                <input
                  type="date"
                  name="arrival date"
                  required
                  min={minimumDepartureDate}
                  value={departureDate}
                  onChange={(e) => {
                    setDepartureDate(e.target.value);
                  }}
                  className="py-2.5 px-0 focus:outline-none focus:border-b border-purple-500"
                />
              </div>
              <select
                name="guest number"
                required
                value={guestNumber}
                onChange={(e) => {
                  setGuestNumber(e.target.value);
                }}
                className="block py-2.5 px-0 mx-auto w-11/12 focus:outline-none border-b-2 focus:border-purple-500"
              >
                <option defaultValue disabled>
                  Number of Guests
                </option>
                <option value="1">Just You</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
              </select>

              <div className="hidden lg:block space-y-4">
                <div className="text-2xl text-gray-700 p-5 flex justify-between">
                  <h1>Total Cost</h1>
                  <div>{price ? <b>{latestPrice}</b> : <h1>...</h1>}</div>
                </div>
                <div className="justify-center hidden lg:flex">
                  <button
                    type="submit"
                    className="text-2xl bg-purple-500 w-9/12 text-white self-center rounded-lg p-4 font-semibold"
                  >
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
            <button
              type="submit"
              className="bg-purple-500 font-semibold w-full text-white cursor-pointer outline-none hover:bg-slate-500 "
            >
              {load} Pay Now
            </button>
          </div>
        </>
      )}
    </form>
  );
}
export default BookRoom;
