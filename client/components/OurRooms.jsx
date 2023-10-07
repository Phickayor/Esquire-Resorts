import React, { useEffect } from "react";
import rooms from "../utils/rooms.json";
import Router from "next/router";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
function OurRooms() {
  function Test(event) {
    Router.push({
      pathname: `/booknow/${event}`
    });
  }
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="heading">
          Our<span className="text-purple-500"> Rooms</span>
        </h1>
        <p className="desc">
          Discover our inviting rooms with prices to suit every budget.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {rooms.map((room, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={index}
            className="space-y-4 shadow-2xl shadow-slate-700 rounded-xl h-fit lg:h-full p-6"
          >
            <img
              src={room.image[0]}
              className="rounded-2xl mx-auto self-center h-2/4 w-full"
              alt={room.name + "Image"}
            />
            <div className="space-y-4">
              <h3 className="text-center text-2xl font-semibold text-slate-700">
                {room.name}
              </h3>
              <h1 className="text-center text-lg lg:text-xl font-semibold">
                &#8358;{room.price}
              </h1>
              <div className="flex justify-center">
                <button onClick={() => Test(room.path)} className="btn">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurRooms;
