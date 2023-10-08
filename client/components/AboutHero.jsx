import React from "react";
import Goals from "./Goals";
import AboutUs from "./AboutUs";

function AboutHero() {
  return (
    <div className="h-56  w-full bg-purple-700">
      <img
        src="/images/building2.jpg"
        className="absolute left-0 h-56  w-full object-cover opacity-20"
      />
      <div className="relative h-56  flex flex-col justify-center text-white space-y-4 font-extralight">
        <h1 className="text-center lg:text-5xl text-4xl">About Us</h1>
        <p className="text-center text-lg">
          Discover our story, where hospitality meets elegance.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
