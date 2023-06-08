import React, { useEffect } from 'react'
import reviews from '../utils/reviews.json'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'
function Reviews() {

    const star = <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
    useEffect(() => {
        Aos.init()
    })

    return (
        <div
            data-aos="flip-right"
            data-aos-duration="3000"
            className='my-5 mx-auto w-11/12 px-5'>
            <div className='flex flex-col lg:flex-row space-y-10'>
                <div className='lg:w-1/2 lg:self-center lg:order-2 p-4 flex flex-col justify-center space-y-2'>
                    <h1 className='lg:text-5xl text-4xl leading-2 text-center text-purple-500 font-bold'>OUR REVIEWS</h1>
                    <p className='text-3xl font-semibold text-slate-700 text-center'>What people say about us</p>
                </div>

                <div className='lg:w-1/2 lg:order-1 lg:self-center'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        onSwiper={swiper => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {reviews.map((review, index) => (
                            <SwiperSlide key={index} className="cursor-pointer " >
                                <h1 className='text-purple-500 font-semibold text-3xl lg:text-4xl mb-2'>{review.name}</h1>
                                <h1 className='text-slate-700 font-semibold text-3xl'>{star} {star} {star} {star} {star}</h1>
                                <p className='lg:text-xl text-lg text-slate-700 font-serif mt-5'>
                                    {review.review}
                                </p>
                            </SwiperSlide>

                        ))}
                        <h1 className="mt-5 opacity-0">...</h1>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default Reviews