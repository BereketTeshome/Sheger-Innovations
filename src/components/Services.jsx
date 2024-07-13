import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import lottie from "lottie-web";
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
      size: { width: "w-[230px]", height: "h-[300px]", marginLeft: "ml-16" },
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
      size: { width: "w-[350px]", height: "h-[300px]" },
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
      size: { width: "w-[270px]", height: "h-[300px]", marginLeft: "ml-12" },
    },
  ];

  useEffect(() => {
    servicesData.forEach((service) => {
      lottie.loadAnimation({
        container: service.ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: service.animation,
      });
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <main
      className="w-full bg-[#04091E] px-8 max-w-screen-xl mx-auto mb-52 overflow-hidden"
      ref={view}
    >
      <h1 className="mb-20 text-6xl text-center">Our Services</h1>
      <motion.div className="grid w-full grid-cols-3 gap-10 mx-auto">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            animate={isInView && { ...service.initial, x: 0, y: 0 }}
            initial={service.initial}
            transition={{ delay: service.delay, duration: 2, type: "spring" }}
            className={`${service.bgColor} py-4 rounded-xl z-50`}
          >
            <div
              className={`${service.size.width} ${service.size.height} ${service.size.marginLeft} mb-9`}
              ref={service.ref}
            ></div>
            <h1 className="px-8 text-3xl text-gray-200">{service.title}</h1>
            <div className="px-8 mt-4 text-gray-200">
              <p className="font-light">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Services;
