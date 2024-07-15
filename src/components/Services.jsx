import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { loadAnimation, destroy } from "lottie-web";
import frontendAnimation from "../assets/frontend2.json";
import appAnimation from "../assets/app.json";
import backendAnimation from "../assets/backend.json";

const Services = () => {
  const view = useRef();
  const isInView = useInView(view);

  const servicesData = [
    {
      ref: useRef(null),
      animation: frontendAnimation,
      bgColor: "bg-[#4169e1]",
      title: "Front-End",
      delay: 0.3,
      initial: { x: "-100vw" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum.",
      size: { width: "w-[230px]", height: "h-[300px]", marginLeft: "sm:ml-16" },
    },
    {
      ref: useRef(null),
      animation: appAnimation,
      bgColor: "bg-[#001f3f]",
      title: "App Development",
      delay: 1.4,
      initial: { y: "100vh" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum.",
      size: { width: "sm:w-[350px] w-[230px]", height: "h-[300px]" },
    },
    {
      ref: useRef(null),
      animation: backendAnimation,
      bgColor: "bg-[#4169e1]",
      title: "Back-End",
      delay: 0.7,
      initial: { x: "100vw" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque ea recusandae, earum repudiandae, quisquam voluptates nemo officia inventore voluptatum.",
      size: { width: "sm:w-[270px] w-[230px]", height: "h-[300px]", marginLeft: "md:ml-12" },
    },
  ];

  useEffect(() => {
    servicesData.forEach((service) => {
      loadAnimation({
        container: service.ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: service.animation,
      });
    });

    return () => {
      destroy();
    };
  }, []);

  return (
    <main
      className="w-full bg-[#04091E] sm:px-8 px-5 max-w-screen-xl mx-auto md:mb-52 mb-28 overflow-hidden"
      ref={view}
    >
      <h1 className="mb-20 text-4xl sm:text-5xl md:text-6xl text-center">Our Services</h1>
      <motion.div className="grid w-full lg:grid-cols-3 md:grid-cols-2 md:text-left text-center gap-10 mx-auto md:px-0 sm:px-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            animate={isInView && { ...service.initial, x: 0, y: 0 }}
            initial={service.initial}
            transition={{ delay: service.delay, duration: 2, type: "spring" }}
            className={`${service.bgColor} py-4 rounded-xl z-50`}
          >
            <div
              className={`${service.size.height} ${service.size.marginLeft} mb-9`}
              ref={service.ref}
            ></div>
            <h1 className="sm:px-8 px-2 text-3xl text-gray-200">{service.title}</h1>
            <div className="sm:px-8 px-2 mt-4 text-gray-200">
              <p className="font-light text-sm sm:text-[14px]">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Services;
