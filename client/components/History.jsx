import React from "react";

function History() {
  return (
    <div>
      <div className="lg:flex justify-between lg:[&>*]:px-10">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <img
            src="/icons/history-illustration.png"
            className="lg:h-4/6 mx-auto w-1/2 lg:w-fit object-cover"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 py-10 self-center">
          <h2 className="text-slate-700 text-2xl lg:text-3xl font-semibold">
            Our <span className="text-purple-500"> History</span>
          </h2>
          <p className="leading-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            corporis quasi magnam adipisci ipsum nul la a eum cupiditate quos.
            Neque, dolore. Optio praesentium suscipit soluta at aliquam sit,
            quisquam sed? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Officia aut officiis suscipit ea eius eos mollitia. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum
            placeat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
