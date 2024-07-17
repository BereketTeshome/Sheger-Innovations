import React, { useEffect, useRef, lazy, Suspense } from "react";
import anime from "animejs";
import lottie from "lottie-web";
import aboutAnimation from "../assets/aboutAnimation.json";

// Lazy load components
const Testimonials = lazy(() => import("../components/Testimonials"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const Header = () => {
  return (
    <div className="relative grid bg-transparent place-content-center py-11">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 50;
const GRID_HEIGHT = 13;

const DotGrid = () => {
  const animeRef = useRef(null);

  useEffect(() => {
    triggerAnimation();
  }, []);

  const triggerAnimation = (e) => {
    if (animeRef.current) {
      animeRef.current.pause();
    }

    animeRef.current = anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from:
          e?.target?.dataset?.index ||
          Math.floor(Math.random() * (GRID_WIDTH * GRID_HEIGHT)),
      }),
    });
  };

  const dots = Array.from({ length: GRID_WIDTH * GRID_HEIGHT }, (_, index) => (
    <div
      className="p-2 transition-colors rounded-full group cursor-pointer hover:bg-slate-600"
      data-index={index}
      key={index}
      onClick={triggerAnimation}
    >
      <div className="w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 group-hover:from-indigo-600 group-hover:to-white" />
    </div>
  ));

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="grid w-fit"
      >
        {dots}
      </div>
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <h2 className="text-5xl md:text-6xl text-[#F57613]">About Us</h2>
        <p className="mb-2 sm:text-sm text-xs text-center">
          We provide the best development environment for passionate engineers.
        </p>
        <p className="mb-2 sm:text-sm text-xs font-light">
          So that we can solve complex problems.
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: aboutAnimation,
    });
    return () => animation.destroy();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex items-center gap-14 px-8 sm:px-14 mb-14 flex-col md:flex-row max-w-screen-xl mx-auto">
        <div className="lg:w-[60%] md:w-[95%] text-center md:text-left">
          <p className="mb-2 text-sm font-thin">Our Company</p>
          <h2 className="text-2xl sm:text-3xl text-[#F57613] mb-2">
            We Provide Expert Development Service All Over The World
          </h2>
          <p className="mb-2 text-xs">
            We are passionate teams of engineers striving to solve intractable
            business problems creatively.
          </p>
          <p className="mb-2 text-xs">
            We believe in providing meaningful value through long-term
            commitment.
          </p>
          <p className="mb-2 text-xs">
            We value cultivating an environment for our teams and client
            satisfaction.
          </p>
        </div>
        <div className="flex justify-end md:w-[900px]" ref={container}></div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <WhyChooseUs />
        <Testimonials />
      </Suspense>
    </div>
  );
};

export default About;
