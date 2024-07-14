import React, { useEffect, useRef } from "react";
import anime from "animejs";
import Testimonials from "../components/Testimonials";
import lottie from "lottie-web";
import aboutAnimation from "../assets/aboutAnimation.json";
import WhyChooseUs from "../components/WhyChooseUs";

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
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    triggerAnimation({
      target: {
        dataset: {
          index: Math.floor(Math.random() * (GRID_WIDTH * GRID_HEIGHT)),
        },
      },
    });
  }, []);

  const triggerAnimation = (e) => {
    if (animeRef.current) {
      animeRef.current.pause();
    }

    isAnimatingRef.current = true;
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
        from: e.target.dataset.index,
      }),
      complete: () => {
        isAnimatingRef.current = false;
      },
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="p-2 transition-colors rounded-full group cursor-pointer hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
          onClick={triggerAnimation}
        >
          <div
            className="w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="grid z-2 w-fit"
      >
        {dots}
      </div>
      <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <h2 className="text-6xl text-[#F57613] z-10">About Us</h2>
        <br />
        <p className="z-10 mb-2 text-sm font-light">
          We provide the best development environment for passionate engineers
          so that we
        </p>
        <p className="z-10 mb-2 text-sm font-light">
          can solve complex problems
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
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div>
      <Header />
      <br />

      <div className="flex items-center gap-14 px-14 mb-14">
        <div className="w-[60%]">
          <p className="mb-2 text-sm font-thin">Our Company</p>
          <h2 className="text-3xl text-[#F57613] mb-2">
            We Provide Expert Development Service All Over The World
          </h2>
          <p className="mb-2 text-xs">
            We are passionate teams of engineers striving to solve intractable
            business problems in creative and pragmatic ways.
          </p>
          <p className="mb-2 text-xs">
            We believe meaningful value can be provided through long-term
            commitment. We don’t want to be an extension of your team, we strive
            to be a part of it, sharing your vision.
          </p>
          <p className="mb-2 text-xs">
            We take on business challenges, learn lessons, do self-improving,
            and always move forward to rise above them. Two things we value are
            ensuring a cultivating environment for our teams and the
            satisfaction of our clients.
          </p>
        </div>
        <div
          className="flex justify-end"
          ref={container}
          style={{ width: "900px" }}
        ></div>
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
