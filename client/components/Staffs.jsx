import React, { useEffect, useState } from "react";
import Slideshow from "./Slideshow";

function Staffs() {
  let arr = ["staffs1", "staffs2", "barman","chef", "barman-mixing"];
  const [currentImage, setcurrentImage] = useState(null);
  useEffect(() => {
    const stopSlideshow = Slideshow(arr, (value) => {
      try {
        // Handle the value at each interval here
        setcurrentImage(value);
      } catch (error) {
        console.error("Error in callback:", error);
      }
    });

    return () => {
      stopSlideshow();
    };
  }, []);

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between  lg:[&>*]:px-10">
        <div className="lg:w-1/2 order-2 lg:order-1 space-y-5 py-10 self-center">
          <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            The<span className="text-purple-500"> Staffs</span>
          </h2>
          <p className="leading-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            corporis quasi magnam adipisci ipsum nul la a eum cupiditate quos.
            Neque, dolore. Optio praesentium suscipit soluta at aliquam sit,
            quisquam sed? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officia aut officiis suscipit ea eius eos mollitia.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center lg:w-1/2">
          <img src={`/images/${currentImage}.jpg`} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Staffs;
