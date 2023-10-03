import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
function Home() {
  const angle = <AiOutlineDoubleRight className="self-center" />;
  return (
    <div className="top-0 min-h-screen flex flex-col justify-center items-center px-10 lg:px-24">
      <div className="grid grid-cols-2 gap-10">
        <div className="absolute w-40 h-36 bg-violet-400 -z-10 blur-xl rounded-full"></div>
        <div className="absolute right-20 bottom-0  w-40 h-40 bg-violet-400 -z-10 blur-xl rounded-full"></div>
        <div className="self-center space-y-6">
          <h1 className="text-6xl leading-[5rem] font-semibold ">
            Discover your <span className="text-violet-700 ">Oasis </span> from
            <span className="text-violet-700 "> Luxury</span>
          </h1>
          <p className="text-lg">
            Indulge in the epitome of sophistication and relaxation at our
            exquisite hotel. Experience unparalleled comfort, world-class
            amenities, and impeccable service amidst stunning surroundings. Your
            perfect getaway begins here.
          </p>
          <button className="flex gap-2 btn">
            Explore {angle}
          </button>
        </div>
        <div>
          <img
            src="/images/DSC_3341.jpg"
            className="rounded-xl"
            alt="Luxurious room"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
