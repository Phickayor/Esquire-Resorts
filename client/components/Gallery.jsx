import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Link from "next/link";

function Gallery() {
  const pics = [
    "bar1",
    "barman-mixing",
    "barman",
    "chef",
    "food1",
    "garden2",
    "food2",
    "staffs1",
    "food3"
  ];
  var i = 4;
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <div className="my-10">
        <h1 className="heading">
          Our <span className="text-purple-500">Gallery</span>
        </h1>
        <p className="desc">Relive these beautiful moments with us</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/bar1.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/barman-mixing.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/barman.jpg"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/food1.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/environment1.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/staffs1.jpg"
            />
          </div>
        </div>
        <div className="hidden md:grid gap-4">
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/reception.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/garden3.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/food3.jpg"
            />
          </div>
        </div>
        <div className="hidden md:grid gap-4">
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/chef.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/building2.jpg"
            />
          </div>
          <div>
            <img
              className="h-auto self-center max-w-full rounded-lg"
              src="/images/environment2.jpg"
            />
          </div>
        </div>
      </div>
      <button className="mx-auto w-fit my-5 self-center btn">
        Open Gallery
      </button>
    </div>
  );
}

export default Gallery;
