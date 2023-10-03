import Link from "next/link";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function AboutUs() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="">
      <div className="lg:h-[25rem] mx-auto w-11/12 flex flex-col lg:flex-row">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1500"
          className="lg:w-1/2 p-4 flex lg:order-1 order-2 flex-col justify-center space-y-5 my-5"
        >
          <h1 className="lg:text-5xl text-4xl font-semibold text-slate-700">
            About Us
          </h1>
          <p className=" text-lg">
            Welcome to our luxurious hotel, where comfort meets elegance.
            Indulge in our spacious and cozy rooms, designed to provide ultimate
            relaxation. Delight your taste buds with our exquisite culinary
            offerings, accompanied by impeccable service that will exceed your
            expectations.
          </p>
          <Link href="/rooms">
            <button className="btn">Book Room</button>
          </Link>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          className="lg:w-1/2 lg:order-2 order-1"
        >
          <img
            className=" h-full rounded-2xl mx-auto w-11/12"
            src="/background/bg1.jpeg"
            alt="Esquire Building"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
