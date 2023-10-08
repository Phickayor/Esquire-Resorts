import React from "react";
import Goals from "./Goals";

function AboutIntroduction() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between lg:[&>*]:px-10">
        <div className="lg:w-1/2 space-y-5 py-10 self-center">
          <h2 className="text-purple-500 text-2xl lg:text-3xl font-semibold">
            Introduction
          </h2>
          <p className="leading-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            corporis quasi magnam adipisci ipsum nul la a eum cupiditate quos.
            Neque, dolore. Optio praesentium suscipit soluta at aliquam sit,
            quisquam sed? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officia aut officiis suscipit ea eius eos mollitia.
          </p>
        </div>
        <div className="hidden lg:flex flex-col justify-center w-1/2">
          <img src="/icons/about-illustration.jpg" />
        </div>
      </div>
      <Goals />
    </div>
  );
}

export default AboutIntroduction;
