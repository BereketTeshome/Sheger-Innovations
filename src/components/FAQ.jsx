import React, { useEffect } from "react";
import Accordion from "./Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="px-5 overflow-hidden">
      <h1 className="px-2 mb-10 text-4xl text-center sm:text-5xl md:text-6xl">
        Frequently Asked Questions
      </h1>
      <div className="items-center block max-w-screen-xl p-3 mx-auto bg-[#001F3F] rounded-lg md:flex mb-28 ">
        <img
          src="/FAQ.png"
          alt="FAQ"
          className="w-full md:w-[40%] z-10 animation"
          data-aos="fade-right"
        />

        <div
          className="sm:px-8 px-3 text-sm sm:text-[14px] py-5 rounded-lg animation"
          data-aos="fade-left"
        >
          <Accordion
            title="How long does it take to design and launch a website?"
            answer="The timeline for website design and launch varies but typically ranges from 1 to 4 weeks, depending on the complexity of the project."
          />
          <Accordion
            title="Can You Assist with Website Maintenance and Updates After the Launch?"
            answer="Absolutely! We offer ongoing maintenance and support services to keep your website secure, up-to-date, and optimized for performance."
          />
          <Accordion
            title="Do You Provide SEO Services to Improve Website Visibility?"
            answer="Yes, we offer comprehensive SEO services to enhance your website's visibility on search engines, helping you attract more organic traffic and improve your online presence."
          />
          <Accordion
            title="How much does professional web design cost?"
            answer="Professional web design costs vary based on project requirements and complexity. We provide customized quotes after understanding your specific needs."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
