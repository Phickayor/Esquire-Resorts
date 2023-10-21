import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { baseurl } from "../config/host";

function AddReservation(props) {
  const nameContainer = useRef();
  const roomContainer = useRef();
  const arrivalDateContainer = useRef();
  const departureDateContainer = useRef();
  const guestContainer = useRef();
  const priceContainer = useRef();
  const spin = <FontAwesomeIcon icon={faSpinner} className="fa-spin" />;
  const [load, setLoad] = useState();
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoad(spin);
    const sroomname = roomContainer.current.value;
    const sname = nameContainer.current.value;
    const sarrivalDate = arrivalDateContainer.current.value;
    const sdepartureDate = departureDateContainer.current.value;
    const sguestNumber = guestContainer.current.value;
    const sprice = priceContainer.current.value;
    const sref = "Physical Booking";
    fetch(`${baseurl}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sname,
        sroomname,
        sarrivalDate,
        sdepartureDate,
        sguestNumber,
        sprice,
        sref,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.info == "success") {
          alert(`Your reservation for ${sname} has been made`);
          props.detailsHandler("details");
        } else {
          alert(
            "An error occured. Check your internet connection and try again"
          );
          setLoad();
        }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured. Check your internet connection and try again");
        setLoad();
      });
  };
  return (
    <form className="flex flex-col" onSubmit={HandleSubmit}>
      <fieldset className="border-2 lg:space-y-5 lg:grid grid-cols-2 lg:gap-x-10 rounded-xl px-5">
        <legend className="text-xl px-5 text-center md:text-2xl font-bold">
          Add Reservation
        </legend>
        <div>
          <label className="text-lg">Name</label>
          <input
            className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full"
            required
            type="text"
            ref={nameContainer}
          />
        </div>
        <div>
          <label className="text-lg">Room Name</label>
          <select
            className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full"
            required
            ref={roomContainer}
          >
            <option>Deluxe King</option>
            <option>Cozy Exeutive</option>
            <option>Deluxe King Extra</option>
            <option>Diamond Suite</option>
            <option>Studio Room</option>
          </select>
        </div>
        <div>
          <label className="text-lg">Arrival Date</label>
          <input
            className="text-textcolor bg-[#ebeef0] outline-none rounded-md block p-3 my-3 w-full "
            required
            type="date"
            ref={arrivalDateContainer}
          />
        </div>
        <div>
          <label className="text-lg">Departure Date</label>
          <input
            className="text-textcolor bg-[#f0f0eb] outline-none rounded-md block p-4 my-3 w-full"
            required
            type="date"
            ref={departureDateContainer}
          />
        </div>{" "}
        <div>
          <label className="text-lg">Guest Number</label>
          <select
            className="text-textcolor bg-[#f0f0eb] outline-none rounded-md block p-4 my-3 w-full"
            required
            ref={guestContainer}
          >
            <option value="1">Just One</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>
        <div>
          <label className="text-lg">Price in naira (₦)</label>
          <input
            className="text-textcolor bg-[#f0f0eb] outline-none rounded-md block p-4 my-3 w-full"
            required
            type="number"
            min={18950}
            ref={priceContainer}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="bg-slate-700 self-center font-semibold text-white px-10 py-3 mt-5 rounded-xl"
      >
        {load}&nbsp;Add Reservation
      </button>
    </form>
  );
}

export default AddReservation;
