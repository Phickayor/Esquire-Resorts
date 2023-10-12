import React, { useEffect, useState } from "react";
import Rooms from "../utils/rooms.json";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BookRoom from "./BookRoom";
import Aos from "aos";
import "aos/dist/aos.css";

const RoomDescription = (props) => {
    const [loading, setLoading]= useState(true)
  const { selectedIndex } = props;
  const room = Rooms[selectedIndex] || {};
  props.nameHandler(room.name);
  const check = <FontAwesomeIcon className="text-purple-500" icon={faCheck} />;

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 3000);
  });
  return (
    <div className=" lg:flex justify-between lg:space-x-20 mx-auto w-11/12 my-5">
      {loading ? (
        <div className="card space-y-10 w-full">
          <div className="card-skeleton py-3 w-1/2"></div>
          <div className="card-skeleton w-10/12 h-80"> </div>
          <div className="p-2 space-y-5">
          <div className="card-skeleton w-2/3 py-2"> </div>
          <div className="card-skeleton w-1/2 py-2"> </div>
          <div className="card-skeleton w-1/2 py-2"> </div>
          <div className="card-skeleton w-1/2 py-2"> </div>
          <div className="card-skeleton w-1/2 py-2"> </div>
          </div>
        </div>
      ) :(
        <div
          // data-aos="fade-right"
          // data-aos-duration="3000"
          className="p-5 lg:w-1/2"
        >
          {/* Room Name  */}
          <h1 className="text-3xl font-bold text-slate-700 pb-10">
            {room.name}
          </h1>
 
          {/* Room Images */}

          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {room.image.map((index, i) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full object-cover h-80 rounded-2xl"
                  src={room.image[i]}
                  alt="Reviews"
                />
              </SwiperSlide>
            ))}
            <h1 className="mt-5 opacity-0">...</h1>
          </Swiper>

          {/*Room Features */}
          <div>
            <h1 className="font-semibold bg-bgcolor p-2 text-2xl text-slate-700">
              Features of the {room.name}
            </h1>
            <ul className="lg:text-lg">
              {room.features.map((feature, index) => (
                <li key={index}>
                  {check}&nbsp; {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) }

      <BookRoom price={room.price} roomname={room.name} />
    </div>
  );
};

export default RoomDescription;
