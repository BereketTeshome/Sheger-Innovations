import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="grid z-2 w-fit"
      >
        {dots}
      </div>
      <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <h2 className="text-5xl md:text-6xl text-[#F57613] z-10">Portfolio</h2>
        <br />
        <p className="z-10 mb-2 text-xs text-center sm:text-sm">
          We make fast loading, friction removing, problem-solving products that
          get used
        </p>
        <p className="z-10 mb-2 text-xs sm:text-sm">
          by thousands of people on a daily basis.
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />

      <div>
        <div className="grid gap-8 px-6 mt-20 lg:grid-cols-3 md:grid-cols-2 sm:px-10">
          {projects.map((item, index) => {
            return (
              <Link to={item.link} target="_blank">
                <div
                  key={index}
                  className="bg-[#001f3f] rounded-lg hover:scale-105 duration-200 overflow-hidden shadow-lg shadow-gray-950 animation"
                  data-aos="slide-up"
                >
                  <div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="aspect-[1.8/1]"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-4 text-xl">{item.title}</h3>
                    <p className="text-xs text-gray-400">
                      {item.desc.length < 222
                        ? item.desc
                        : `${item.desc.substring(0, 222)}...`}
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-between px-5 py-2 border-t-2 border-teal-900 max-h-20"
                    key={index}
                  >
                    {item.icons.map((icon, index) => {
                      return (
                        <div
                          className="w-10 h-10 aspect-w-1 aspect-h-1"
                          key={index}
                        >
                          <img
                            className="object-contain w-full h-full"
                            src={icon.src}
                            alt={icon.alt}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
