import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Head from "next/head";
import AddReservation from "../../components/AddReservation";
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import { Poppins } from "@next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const poppins = Poppins({ weight: "500", subsets: ["latin"] });
import { useRouter } from "next/router";
import { baseurl } from "../../config/host";
function Details() {
  const [reservations, setReservation] = useState();
  const [content, setContent] = useState("details");
  const down = <FontAwesomeIcon icon={faAngleDown} />;
  const plus = <FontAwesomeIcon icon={faPlus} className="ml-5" />;
  const [ref, setRef] = useState();
  const [roomFilterSelected, setRoomFilterSelected] = useState("Room Name");
  const [guestFilterSelected, setGuestFilterSelected] =
    useState("Guest Number");
  const guestFilters = useRef("");
  const roomFilters = useRef("");
  const spinner = (
    <FontAwesomeIcon
      icon={faSpinner}
      className="self-center fa-spin text-4xl lg:text-6xl"
    />
  );
  const [load, setLoad] = useState(spinner);
  const router = useRouter();
  const [Token, setToken] = useState();

  //SET CONTENT
  function changeContent() {
    setContent("addUser");
  }
  function changeValue() {
    setContent("details");
  }
  function updateContent(value) {
    setContent(value);
  }
  //SET ROOM FILTER SELECTED
  function setRoomsFilter(e) {
    setRoomFilterSelected(e.target.innerHTML);
    ToggleFilter("rooms");
  }

  //SET ROOM FILTER SELECTED
  function setGuestFilter(e) {
    setGuestFilterSelected(e.target.innerHTML);
    ToggleFilter("guest");
  }

  //SET REFERENCE INPUT
  function setRefFilter(e) {
    setRef(e.target.value);
  }
  //HIDE AND SHOW FILTERS ON CLICK AND SELECT
  function ToggleFilter(filter) {
    if (filter === "rooms") {
      roomFilters.current.classList.toggle("hidden");
    } else {
      guestFilters.current.classList.toggle("hidden");
    }
  }
  const FindSearch = useCallback(() => {
    setReservation(null);
    var guest = {
      "Just One": 1,
      "2 Guests": 2,
      "3 Guests": 3,
      "4 Guests": 4,
      "Guest Number": null,
    }[guestFilterSelected];
    fetch(`${baseurl}/sortreservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomFilterSelected, guest, ref }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (data) {
          setReservation(data);
        } else {
          setReservation(null);
          setLoad("No Result for the above search");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [guestFilterSelected, roomFilterSelected, ref]);

  useEffect(() => {
    var storedtoken = localStorage.getItem("token");
    fetch(`${baseurl}/confirmtoken`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + storedtoken,
      },
    })
      .then((res) => {
        if (res.status == 200) {
          setToken(true);
        } else {
          setToken(false);
          router.replace("/admin/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    FindSearch();
  }, [FindSearch, router]);

  useEffect(() => {
    fetch(`${baseurl}/reservations`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setReservation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!Token) return <div>Loading...</div>;
  else {
    return (
      <div className={poppins.className}>
        <Head>
          <title>Reservation Details</title>
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
        {content == "details" ? (
          <div className="mx-auto md:w-10/12 w-11/12 text-slate-700 my-10 flex flex-col">
            <button
              className="justify-between mb-5 text-white font-semibold rounded-lg text-md p-4 text-center items-center self-end bg-blue-600 hover:bg-blue-700"
              onClick={changeContent}
            >
              ADD USER {plus}
            </button>
            <h1 className="text-2xl md:text-3xl font-mono font-semibold text-center">
              Search for Reservation
            </h1>
            <input
              type="search"
              placeholder="Input reference no..."
              required
              autoComplete="true"
              name="reference"
              value={ref}
              onChange={setRefFilter}
              className="text-lg border-purple-500 border-2 md:text-center my-5 focus:outline-none rounded-2xl p-4 md:p-5 lg:p-6 w-full"
            />

            <div className="block mx-auto w-8/12 md:flex justify-between gap-5 space-y-5 md:space-y-0">
              <div className="w-full">
                <button
                  onClick={() => ToggleFilter("rooms")}
                  className="justify-between text-white font-medium rounded-lg text-md p-4 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 w-full"
                  type="button"
                >
                  {roomFilterSelected} {down}
                </button>
                <div className="z-10 my-2  rounded-lg shadow bg-gray-700">
                  <ul
                    ref={roomFilters}
                    className="py-2 hidden text-sm text-gray-700 dark:text-gray-200"
                  >
                    <li
                      onClick={setRoomsFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Deluxe King
                    </li>
                    <li
                      onClick={setRoomsFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Cozy Exeutive
                    </li>
                    <li
                      onClick={setRoomsFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Deluxe King Extra
                    </li>
                    <li
                      onClick={setRoomsFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Diamond Suite
                    </li>
                    <li
                      onClick={setRoomsFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Studio Room
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <button
                  onClick={() => ToggleFilter("guests")}
                  className="justify-between text-white font-medium rounded-lg text-md p-4 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 w-full"
                  type="button"
                >
                  {guestFilterSelected}
                  {down}
                </button>
                <div
                  ref={guestFilters}
                  className="z-10 my-2 hidden rounded-lg shadow bg-gray-700"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li
                      onClick={setGuestFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      Just One
                    </li>
                    <li
                      onClick={setGuestFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      2 Guests
                    </li>
                    <li
                      onClick={setGuestFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      3 Guests
                    </li>
                    <li
                      onClick={setGuestFilter}
                      className="block px-4 py-2 hover:bg-gray-600 hover:text-white"
                    >
                      4 Guests
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {reservations ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 md:py-10 py-6 gap-6 px-5 text-center">
                {reservations.map((reservation, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:bg-purple-200 cursor-pointer ease-in-out duration-300 3py-5 w-full border-4 border-slate-500 rounded-3xl"
                    >
                      <div className="space-y-8 my-4">
                        <h3
                          className={`text-3xl font-mono font-semibold ${poppins.className}`}
                        >
                          {reservation.rname}
                        </h3>
                        <p className="text-2xl text-slate-600"></p>
                        <ul className="list-style-none space-y-4">
                          <li>
                            <strong>Name:</strong> {reservation.name}
                          </li>
                          <li>
                            <strong>Arrival Date:</strong>{" "}
                            {reservation.arrivalDate}
                          </li>
                          <li>
                            <strong>Departure Date:</strong>{" "}
                            {reservation.departureDate}
                          </li>
                          <li>
                            <strong>Guest Number:</strong>{" "}
                            {reservation.guestNumber}
                          </li>
                          <li>
                            <strong>Price:</strong> ₦ {reservation.price}
                          </li>
                          <li>
                            <strong>Reference:</strong> {reservation.ref}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className=" ml-0 w-full my-6 lg:my-12 flex justify-center ">
                {load}
              </div>
            )}
          </div>
        ) : (
          <div className="mx-auto md:w-10/12 w-11/12 text-slate-700 my-10 flex flex-col">
            <button
              className="justify-between mb-5 text-white font-semibold rounded-lg text-md p-4 text-center items-center self-end bg-blue-600 hover:bg-blue-700"
              onClick={changeValue}
            >
              View Reservations
            </button>
            <AddReservation detailsHandler={updateContent} />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Details;
