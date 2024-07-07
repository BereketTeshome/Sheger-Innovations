import React, { useEffect, useRef } from "react";
// import { SiGmail } from "react-icons/si";
// import { FaTelegramPlane } from "react-icons/fa";
// import { MdCall } from "react-icons/md";
import emailjs from "emailjs-com";
import lottie from "lottie-web";
import contactAnimation from "../assets/contact.json";

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
    <section className="contact max-w-screen-xl px-10 mx-auto">
      <header className="text-center mb-8 ">
        <h2 className="text-4xl font-bold">We're Here to Help</h2>
        <p className="text-lg text-gray-600 mt-2">
          Feel free to reach out to us with any questions or concerns. We're
          always here to assist you!
        </p>
      </header>

      {/* <header>
        <h5>Get In Touch</h5>
        <h2 className="text-3xl">
          Contact <span className="me">Us</span>
        </h2>
      </header> */}

      <div className="container contact__container">
        <div className="contact__options">
          <div className="flex justify-end " ref={container}></div>

          {/* <article className="contact__option">
            <SiGmail className="contact-icon" />
            <h4>EMAIL</h4>
            <h5>shegerinnovations@gmail.com</h5>
            <a href="mailto:shegerinnovations@gmail.com" target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact-icon" />
            <h4>Telegram</h4>
            <h5>@Medication12</h5>
            <a href="https://t.me/Medication12" target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option">
            <MdCall className="contact-icon" />
            <h4>Call</h4>
            <h5>0909242510 / 0977622890</h5>
            <a href="tel:0909242510">Ring the bell</a>
          </article> */}
        </div>

        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary bg-blue-500 text-white p-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
