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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt itaque amet error aliquam neque libero dolor mollitia perspiciatis consectetur.",
      image: "/Eyosias.jpg",
      name: "Eyosias",
      title: "CEO, Erkab Consulting",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt itaque amet error aliquam neque libero dolor mollitia perspiciatis consectetur.",
      image: "/Yibeltal.png",
      name: "Yibeltal",
      title: "Entrepreneur",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt itaque amet error aliquam neque libero dolor mollitia perspiciatis consectetur.",
      image: "/Dagim.png",
      name: "Dagim",
      title: "CTO, Erkab Consulting",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt itaque amet error aliquam neque libero dolor mollitia perspiciatis consectetur.",
      image: "/Alemfire.png",
      name: "Alemfire",
      title: "Janitor",
    },
  ];

  return (
    <>
      <h1 className="mb-6 text-2xl text-center">Testimonials</h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl px-2 text-center">What Our Clients Say</h1>
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
            <i>{slide.quote}</i>
            <div className="flex items-center mt-4 gap-7">
              <img
                src={slide.image}
                alt={slide.name}
                className="testimonial-img"
              />
              <div>
                <h2>{slide.name}</h2>
                <p>{slide.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
