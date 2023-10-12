import React, { useEffect, useState } from "react";
import reviews from "../utils/reviews.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Reviews() {
  const star = <AiFillStar className="text-yellow-400 inline" />;
  const [numberOfSlides, setNumberOfSlides] = useState(null);

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setNumberOfSlides(1);
    } else {
      setNumberOfSlides(2);
    }
  }

  useEffect(() => {
    handleScreenSizeChange();
    window.addEventListener("resize", handleScreenSizeChange);
  });

  return (
    <div data-aos="flip-right" data-aos-duration="3000">
      <div className=" p-4 space-y-2">
        <h1 className="heading">
          Our <span className="text-purple-500">Reviews</span>
        </h1>
        <p className="desc">What people say about us</p>
      </div>

      <div className="flex  self-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={numberOfSlides}
          // navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="cursor-pointer p-6 ">
              <div className="flex justify-between w-11/12">
                <h1 className="text-purple-500 font-semibold text-2xl lg:text-3xl lg:text-4xl">
                  {review.name}
                </h1>
                <svg
                  className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
              </div>
              <h1 className="text-slate-700 font-semibold text-2xl lg:text-3xl">
                {star} {star} {star} {star} {star}
              </h1>
              <p className="lg:text-xl text-lg text-slate-700 font-serif mt-8">
                {review.review}
              </p>
            </SwiperSlide>
          ))}
          <h1 className="mt-5 opacity-0">...</h1>
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
