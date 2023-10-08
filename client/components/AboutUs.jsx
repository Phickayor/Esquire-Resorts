import Link from "next/link";
import React from "react";
import Goals from "./Goals";
import { AiOutlineDoubleRight } from "react-icons/ai";
function AboutUs() {
  const angle = <AiOutlineDoubleRight className="inline" />;

  return (
    <div className="space-y-10">
      <div className="lg:h-[25rem] flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-4 flex lg:order-1 order-2 flex-col justify-center space-y-5 my-5">
          <h1 className="heading">
            <span className="text-purple-500">About</span> Us
          </h1>
          <p className="leading-[2rem]">
            Welcome to our luxurious hotel, where comfort meets elegance.
            Indulge in our spacious and cozy rooms, designed to provide ultimate
            relaxation. Delight your taste buds with our exquisite culinary
            offerings, accompanied by impeccable service that will exceed your
            expectations.
          </p>
          <Link href="/about" className="font-medium text-purple-500">
            Learn More{angle}
          </Link>
        </div>
        <div className="lg:w-1/2 lg:order-2 order-1">
          <img
            className=" h-full rounded-2xl mx-auto w-11/12"
            src="/images/building2.jpg"
            alt="Esquire Building"
          />
        </div>
      </div>
      <Goals />{" "}
    </div>
  );
}

export default AboutUs;
