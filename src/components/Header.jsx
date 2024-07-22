import React, { useEffect, useRef, lazy, Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import lottie from "lottie-web";
import animationData from "../assets/header-lottie2.json";
import Loader from "./Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Particle = lazy(() => import("./Particle"));

const Header = () => {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const typeAnimationSequence = [
    "Empowering Brands with Web Development",
    1000,
    "Empowering Brands with E-Commerce",
    1000,
    "Empowering Brands with App Development",
    1000,
  ];

  return (
    <div className="min-h-[100vh] w-full relative overflow-hidden max-w-screen-xl mx-auto">
      <Suspense fallback={<Loader />}>
        <Particle />
      </Suspense>
      <div className="absolute inset-0 flex flex-col items-center justify-between w-full px-5 sm:px-8 md:flex-row">
        <div
          className="md:w-[54%] mt-16 md:mt-0 text-center md:text-left animation"
          data-aos="slide-right"
        >
          <div className="md:text-[2em] text-[1.6em]">
            <div className="min-h-[80px] md:min-h-0">
              <TypeAnimation
                sequence={typeAnimationSequence}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <p className="font-light text-gray-400 my-7 text-sm md:text-[14px]">
              With the synergy of Excellent communication, Experienced
              Engineers, and Latest technology trends, we will provide you with
              the best quality services and products.
            </p>
          </div>
          <a href="#services">
            <button className="md:px-10 px-7 md:py-3 duration-150 py-2 font-bold hover:text-[#F7BE05] hover:bg-black text-sm md:text-[14px] text-black rounded-lg shadow-[0_2px_10px_3px_rgba(0,0,0,0.3)] shadow-[#F7BE05] bg-[#F7BE05]">
              Explore
            </button>
          </a>
        </div>
        <div
          className="md:w-[43%] sm:w-[65%] w-[100%] animation"
          data-aos="slide-up"
        >
          <div className="flex justify-end" ref={container}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
