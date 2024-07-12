import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

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
          className="p-2 transition-colors rounded-full cursor-pointer group hover:bg-slate-600"
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
        <h2 className="text-6xl text-[#F57613] z-10">Portfolio</h2>
        <br />
        <p className="z-10 mb-2 text-sm font-light">
          We make fast loading, friction removing, problem-solving products that
          get used
        </p>
        <p className="z-10 mb-2 text-sm font-light">
          by thousands of people on a daily basis.
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const view = useRef();
  const isInView = useInView(view, { margin: "-100px" });

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />

      <div ref={view}>
        <div className="grid grid-cols-3 gap-8 px-10 mt-20">
          {projects.map((item, index) => {
            return (
              <Link to={item.link} target="_blank">
                <motion.div
                  key={index}
                  className="bg-[#001f3f] rounded-lg hover:scale-105 duration-200 overflow-hidden shadow-lg shadow-gray-950"
                  initial={{ opacity: 0 }}
                  animate={isInView && { opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className=" aspect-[1.8/1]"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-4 text-xl">{item.title}</h3>
                    <p className="text-xs text-gray-400">
                      {item.desc.length < 230
                        ? item.desc
                        : `${item.desc.substring(0, 230)}...`}
                    </p>
                  </div>
                  <div
                    className="flex max-h-20 justify-between py-2 px-5 border-t-2 border-teal-900 items-center"
                    key={index}
                  >
                    {item.icons.map((icon, index) => {
                      return (
                        <div
                          className="h-10 w-10 aspect-w-1 aspect-h-1"
                          key={index}
                        >
                          <img
                            className="object-contain h-full w-full"
                            src={icon.src}
                            alt={icon.alt}
                          />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
