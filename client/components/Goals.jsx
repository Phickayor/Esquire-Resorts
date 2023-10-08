import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function Goals() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="lg:flex lg:space-y-0 space-y-10">
      <div className=" px-10 space-y-5 text-center">
        <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
          Our <span className="text-purple-500"> Vision</span>
        </h2>
        <p className="leading-[2rem]">
          To be the premier destination where luxury, comfort, and exceptional
          hospitality converge, creating unforgettable experiences for our
          esteemed guests.
        </p>
      </div>
      <div className=" px-10 lg:border-l-2 text-center space-y-5">
        <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
          Our <span className="text-purple-500"> Mission</span>
        </h2>
        <p className="leading-[2rem]">
          Committed to exceptional service, luxury, and exquisite dining, we aim
          to exceed expectations, creating a cherished haven of indulgence.
        </p>
      </div>
    </div>
  );
}

export default Goals;
