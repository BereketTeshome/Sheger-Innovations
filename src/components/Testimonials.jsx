import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 className="text-2xl text-center mb-6">Testimonials</h1>
      <h1 className="text-6xl text-center ">What Our Clients Say</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/right-quote.png"
            className="swiper-quote"
            alt="right-quote.png"
          />
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nesciunt itaque amet error aliquam neque libero dolor mollitia
            perspiciatis consectetur.
          </i>

          <div className="flex items-center mt-4 gap-7">
            <img
              src="/Eyosias.jpg"
              alt="Eyosias.jpg"
              className="testimonial-img"
            />
            <div>
              <h2>Eyosias</h2>
              <p>CEO, Erkab Consulting</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/right-quote.png"
            className="swiper-quote"
            alt="right-quote.png"
          />
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nesciunt itaque amet error aliquam neque libero dolor mollitia
            perspiciatis consectetur.
          </i>
          <div className="flex items-center mt-4 gap-7">
            <img
              src="/Yibeltal.png"
              alt="Yibeltal.png"
              className="testimonial-img"
            />
            <div>
              <h2>Yibeltal</h2>
              <p>Entrepreneur</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/right-quote.png"
            className="swiper-quote"
            alt="right-quote.png"
          />
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nesciunt itaque amet error aliquam neque libero dolor mollitia
            perspiciatis consectetur.
          </i>
          <div className="flex items-center mt-4 gap-7">
            <img src="/Dagim.png" alt="Dagim.png" className="testimonial-img" />
            <div>
              <h2>Dagim</h2>
              <p>CTO, Erkab Consulting</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/right-quote.png"
            className="swiper-quote"
            alt="right-quote.png"
          />
          <i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            nesciunt itaque amet error aliquam neque libero dolor mollitia
            perspiciatis consectetur.
          </i>
          <div className="flex items-center mt-4 gap-7">
            <img
              src="/Alemfire.png"
              alt="Alemfire.png"
              className="testimonial-img"
            />
            <div>
              <h2>Alemire</h2>
              <p>Janitor</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
