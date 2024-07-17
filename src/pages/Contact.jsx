import React, { useEffect, useRef } from "react";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import emailjs from "emailjs-com";
import lottie from "lottie-web";
import contactAnimation from "../assets/contact.json";
import anime from "animejs";

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
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div
        style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
        className="grid z-2 w-fit"
      >
        {dots}
      </div>
      <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">
        <h2 className="text-5xl sm:text-6xl text-[#F57613] z-10">Contact Us</h2>
        <br />
        <header className="mb-8 text-center ">
          <h2 className="text-3xl font-bold md:text-4xl">We're Here to Help</h2>
          <p className="mt-2 text-xs text-center text-gray-300 md:text-lg sm:text-sm">
            Feel free to reach out to us with any questions or concerns. We're
            always here to assist you!
          </p>
        </header>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: contactAnimation,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kotixdb",
        "template_sobgegj",
        form.current,
        "OYHFEeDBpc_p3GA9O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section className="max-w-screen-xl mx-auto contact">
      <Header />

      <div className="container px-10 contact__container">
        <div className="flex flex-col items-center contact__options">
          <div ref={container}></div>
          <div className="flex gap-6">
            <a href="mailto:shegerinnovations@gmail.com" target="_blank">
              <article className="contact__option">
                <SiGmail className="contact-icon" />
              </article>
            </a>

            <a href="https://t.me/Medication12" target="_blank">
              <article className="contact__option">
                <FaTelegramPlane className="contact-icon" />
              </article>
            </a>

            <a href="tel:0909242510">
              <article className="contact__option">
                <MdCall className="contact-icon" />
              </article>
            </a>
          </div>
        </div>

        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-2 mb-4 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="p-2 text-white bg-blue-500 rounded btn btn-primary min-w-[150px]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
