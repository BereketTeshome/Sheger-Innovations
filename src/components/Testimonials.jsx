import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
  const swiperRef = React.useRef(null);

  const handleClick = (index) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.activeIndex;

      if (index > activeIndex) {
        swiper.slideNext();
      } else if (index < activeIndex) {
        swiper.slidePrev();
      }
    }
  };

  const slides = [
    {
      quote:
        "I had the pleasure of working with Sheger Innovations on our project, and the experience was exceptional from start to finish. Their team had a deep understanding of our needs and delivered a well designed, user-friendly website.",
      image: "/profile.png",
      name: "Eyosias",
      title: "CEO, Erkab Consulting",
    },
    {
      quote:
        "Sheger Innovations transformed our outdated website into a modern, sleek, and user-friendly platform. The team was fantastic to work with, delivering on time and within budget. Highly recommended",
      image: "/profile.png",
      name: "Yibeltal",
      title: "Entrepreneur",
    },
    {
      quote:
        "Working with Sheger Innovations was a breeze. They quickly understood our vision and created a website that perfectly aligns with our brand. Their professionalism and expertise are top-notch",
      image: "/profile.png",
      name: "Sisay",
      title: "CEO, AHAZ Pharma",
    },
  ];

  return (
    <>
      <h1 className="mb-6 text-2xl text-center">Testimonials</h1>
      <h1 className="px-2 text-4xl text-center sm:text-5xl md:text-6xl">
        What Our Clients Say
      </h1>
      <Swiper
        ref={swiperRef}
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index} onClick={() => handleClick(index)}>
            <img
              src="/right-quote.png"
              className="swiper-quote"
              alt="right-quote.png"
            />
            <i>{slide?.quote}</i>
            <div className="flex items-center mt-4 gap-7">
              <img
                src={slide?.image}
                alt={slide?.name}
                className="testimonial-img"
              />
              <div>
                <h2>{slide?.name}</h2>
                <p>{slide?.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
