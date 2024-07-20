import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { loadAnimation, destroy } from "lottie-web";

const Services = () => {
  const view = useRef();
  const isInView = useInView(view);

  const [animations, setAnimations] = useState({
    frontendAnimation: null,
    appAnimation: null,
    backendAnimation: null,
  });

  const servicesData = [
    {
      ref: useRef(null),
      animationKey: "frontendAnimation",
      bgColor: "bg-[#4169e1]",
      title: "Front-End",
      delay: 0.3,
      initial: { x: "-100vw" },
      description:
        "Sheger Innovations excels in crafting visually stunning and highly responsive front-end designs. Our team specializes in creating intuitive user interfaces that enhance user experience, ensuring seamless interaction and engagement with your digital platforms.",
      size: { width: "w-[210px]", height: "h-[300px]", marginLeft: "sm:ml-10" },
    },
    {
      ref: useRef(null),
      animationKey: "appAnimation",
      bgColor: "bg-[#001f3f]",
      title: "App Development",
      delay: 1.4,
      initial: { y: "100vh" },
      description:
        "At Sheger Innovations, we transform ideas into functional and high-performing mobile applications. Our app development services are tailored to meet your business needs, delivering robust, scalable, and user-friendly apps for both Android and iOS platforms.",
      size: { width: "sm:w-[350px] w-[230px]", height: "h-[300px]" },
    },
    {
      ref: useRef(null),
      animationKey: "backendAnimation",
      bgColor: "bg-[#4169e1]",
      title: "Back-End",
      delay: 0.7,
      initial: { x: "100vw" },
      description:
        "Sheger Innovations provides comprehensive back-end development services, focusing on building secure, efficient, and scalable server-side solutions. Our expertise ensures your applications run smoothly, with seamless data management and integration capabilities.",
      size: {
        width: "sm:w-[270px] w-[230px]",
        height: "h-[300px]",
        marginLeft: "md:ml-12",
      },
    },
  ];

  useEffect(() => {
    const loadAnimations = async () => {
      const [frontendAnimation, appAnimation, backendAnimation] =
        await Promise.all([
          import("../assets/frontend2.json"),
          import("../assets/app.json"),
          import("../assets/backend.json"),
        ]);

      setAnimations({
        frontendAnimation: frontendAnimation.default,
        appAnimation: appAnimation.default,
        backendAnimation: backendAnimation.default,
      });
    };

    loadAnimations();

    return () => {
      destroy();
    };
  }, []);

  useEffect(() => {
    servicesData.forEach((service) => {
      if (animations[service.animationKey]) {
        loadAnimation({
          container: service.ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animations[service.animationKey],
        });
      }
    });
  }, [animations]);

  return (
    <main
      className="w-full bg-[#04091E] sm:px-8 px-5 max-w-screen-xl mx-auto md:mb-52 mb-28 overflow-hidden"
      ref={view}
    >
      <h1 className="mb-20 text-4xl text-center sm:text-5xl md:text-6xl">
        Our Services
      </h1>
      <motion.div className="grid w-full gap-10 mx-auto text-center lg:grid-cols-3 md:grid-cols-2 md:text-left md:px-0 sm:px-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            animate={isInView && { ...service.initial, x: 0, y: 0 }}
            initial={service.initial}
            transition={{ delay: service.delay, duration: 2, type: "spring" }}
            className={`${service.bgColor} py-4 rounded-xl z-49`}
          >
            <div
              className={`${service.size.height} ${service.size.marginLeft} mb-9`}
              ref={service.ref}
            ></div>
            <h1 className="px-2 text-3xl text-gray-200 sm:px-8">
              {service.title}
            </h1>
            <div className="px-2 mt-4 text-gray-200 sm:px-8">
              <p className="font-light text-sm sm:text-[14px]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Services;
