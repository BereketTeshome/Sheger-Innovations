import React, { useRef } from "react";
import Accordion from "./Accordion";
import { motion, useInView } from "framer-motion";
const FAQ = () => {
  const viewH1 = useRef();
  const viewAccordion = useRef();
  const isInView = useInView(viewH1);

  return (
    <div className="px-5 overflow-hidden" ref={viewH1}>
      <motion.h1
        className="px-2 mb-10 text-4xl text-center sm:text-5xl md:text-6xl"
        initial={{ x: 1000 }}
        animate={isInView && { x: 0 }}
        transition={{
          delay: 0,
          duration: 1,
        }}
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="items-center block max-w-screen-xl p-3 mx-auto bg-[#001F3F] rounded-lg md:flex mb-28">
        <img src="/FAQ.png" alt="FAQ" className="w-full md:w-[40%] z-10" />

        <motion.div
          className="sm:px-8 px-3 text-sm sm:text-[14px] py-5 bg-[#001F3F] rounded-lg "
          initial={{ x: -1000 }}
          animate={isInView && { x: 0 }}
          transition={{
            delay: 0,
            duration: 2,
          }}
          ref={viewAccordion}
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
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
