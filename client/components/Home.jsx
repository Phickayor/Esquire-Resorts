import React from "react";
import { Italianno } from "@next/font/google";
import { AiOutlineDoubleRight } from "react-icons/ai";
const italianno = Italianno({ weight: "400", subsets: ["latin"] });
function Home() {
  const angle = <AiOutlineDoubleRight className="self-center" />;
  return (
    <div className="top-0 h-[80vh] flex flex-col justify-center ">
      <div className="absolute left-0 top-0 bg-slate-800">
        <img
          src="/images/environment1.jpg"
          className="w-screen h-[80vh] -z-10 opacity-60 object-cover"
        />
      </div>
      <div className="gap-10 text-center relative text-white">
        <div className="lg:space-y-6 space-y-8">
          <h1 className={`text-5xl xl:text-6xl leading-[3.5rem] font-semibold`}>
            Discover your <span className="text-purple-300 ">Oasis </span> from
            <span className="text-purple-300 "> Luxury</span>
          </h1>
          <p className="xl:text-lg font-light mx-auto lg:px-4 px-2">
            Indulge in the epitome of sophistication and relaxation at our
            exquisite hotel.
          </p>
          <div className="flex flex-col">
            <button className="self-center gap-2 btn">Explore {angle}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
