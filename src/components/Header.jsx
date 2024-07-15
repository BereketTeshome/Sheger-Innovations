import React, { useEffect, useRef } from "react";
import Particle from "./Particle";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import lottie from "lottie-web";
import animationData from "../assets/header-lottie2.json";

const headerVariants = {
  right: {
    x: "-100vw",
  },
  left: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 1,
      duration: 2,
    },
  },
};

const Header = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="h-[100vh] w-full relative overflow-hidden max-w-screen-xl mx-auto">
      <Particle />
      <div className="absolute inset-0 flex items-center justify-between w-full sm:px-8 px-5 flex-col md:flex-row">
        <div className="md:w-[54%] mt-16 md:mt-0 text-center md:text-left">
          <motion.div
            variants={headerVariants}
            initial="right"
            animate="visible"
            className="md:text-[2em] text-[1.6em]"
          >
            <TypeAnimation
              sequence={[
                "Empowering Brands with Web Development",
                1000,
                "Empowering Brands with E-Commerce",
                1000,
                "Empowering Brands with App Development",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
              }}
              repeat={Infinity}
            />
            <p className="font-light text-gray-400 my-7 text-sm md:text-[14px]">
              With the synergy of Excellent communication, Experienced
              Engineers, and Latest technology trends, we will provide you with
              the best quality services and products.
            </p>
          </motion.div>
          <motion.button
            className="md:px-10 px-7 md:py-3 py-2 font-bold text-sm md:text-[14px] text-black rounded-lg shadow-[0_2px_10px_3px_rgba(0,0,0,0.3)] shadow-[#F7BE05] bg-[#F7BE05]"
            animate="visible"
            variants={headerVariants}
            initial="right"
            whileHover={{ color: "#F7BE05", background: "#000" }}
          >
            Explore
          </motion.button>
        </div>
        <motion.div
          className="md:w-[43%] sm:w-[65%] w-[83%]"
          variants={headerVariants}
          initial={{ y: "100vh" }}
          animate={{
            y: 0,
            transition: {
              type: "spring",
              delay: 0.3,
            },
          }}
        >
          <div className="flex justify-end " ref={container}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
