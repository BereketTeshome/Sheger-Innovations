import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"
import lottie from "lottie-web";
import frontendAnimation from "../assets/frontend2.json";
import appAnimation from "../assets/app.json";
import backendAnimation from "../assets/backend.json";


const Services = () => {
  const frontend = useRef(null);
  const app = useRef(null);
  const backend = useRef(null);
  const view = useRef();
  const isInView = useInView(view)

  useEffect(() => {
    lottie.loadAnimation({
      container: frontend.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: frontendAnimation,
    });
    lottie.loadAnimation({
      container: app.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: appAnimation,
    });
    lottie.loadAnimation({
      container: backend.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: backendAnimation,
    });
    return () => {
      lottie.destroy();
    };
  }, []);
  return (
    <main className="w-full h-screen bg-[#04091E] px-8 max-w-screen-xl mx-auto" ref={view}>
      <h1 className="text-6xl text-center mb-20">Our Services</h1>
      <motion.div className=" grid grid-cols-3 mx-auto w-full gap-10">
        <motion.div animate={isInView && {opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} className="bg-[#4169e1] py-4 rounded-xl z-50 scale-[0.93]">
          <div className="w-[270px] h-[280px] ml-10 mb-9" ref={frontend}></div>
          <h1 className="px-8 text-3xl text-gray-200">Front-End</h1>
          <div className="px-8 mt-4 text-gray-200">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum, hic sint at animi minima sapiente? Necessitatibus debitis provident vero!</p>
          </div>
        </motion.div>
        <motion.div animate={isInView && {opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} className="bg-[#001f3f] py-4 rounded-xl z-50">
          <div className="h-[300px]" ref={app}></div>
          <h1 className="px-8 text-3xl text-gray-200">App Development</h1>
          <div className="px-8 mt-4 text-gray-200">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum, hic sint at animi minima sapiente? Necessitatibus debitis provident vero!</p>
          </div>
        </motion.div>
        <motion.div animate={isInView && {opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.5, duration: 2}} className="bg-[#4169e1] py-4 rounded-xl z-50 scale-[0.93]">
          <div className="w-[270px] h-[300px] ml-12" ref={backend}></div>
          <h1 className="px-8 text-3xl text-gray-200">Back-End</h1>
          <div className="px-8 mt-4 text-gray-200">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum, hic sint at animi minima sapiente? Necessitatibus debitis provident vero!</p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Services;
