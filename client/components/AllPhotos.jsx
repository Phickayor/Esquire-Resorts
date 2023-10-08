import React from "react";
import Gallery from "./Gallery";

function AllPhotos() {
  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="heading">
          Our<span className="text-purple-500"> Photos</span>
        </h1>
        <p>Photographs serve as the archives of our cherished memories</p>
      </div>
      <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
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
    </div>
  );
}

export default AllPhotos;
