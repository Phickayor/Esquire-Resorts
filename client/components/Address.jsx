import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faMapMarkerAlt,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
function Address() {
  const location = <FontAwesomeIcon icon={faMapMarkerAlt} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const web = <FontAwesomeIcon icon={faGlobe} />;
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-20">
        <iframe
          className="w-full h-96"
          title="map"
          src="https://www.google.com/maps/embed/v1/place?q=The+Esquire+Resort+Limited,+Okunola+Crescent+Road,+Lagos,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>

        <div>
          <h1 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            <span className="text-purple-500">Where</span> to{" "}
            <span className="text-purple-500"> Find</span> Us
          </h1>
          <div className=" mx-auto py-10 px-5 my-10 shadow-2xl shadow-slate-700 justify-center space-y-5">
            <div className="flex gap-4 ">
              <FaPhoneAlt className="self-center text-purple-500" />
              <span>09031870456</span>
            </div>
            <div className="flex gap-4 ">
              <FaMapMarker className="self-center text-purple-500" />
              <span>18, Olokunola Crescent Ikorodu</span>
            </div>
            <div className="flex gap-4 ">
              <AiFillMail className="self-center text-purple-500" />
              <span>esquireresorts@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Address;
