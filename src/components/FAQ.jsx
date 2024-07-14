import React, { useRef } from "react";
import Accordion from "./Accordion";
import { motion, useInView } from "framer-motion";
const FAQ = () => {
  const viewH1 = useRef();
  const viewAccordion = useRef();
  const isInView = useInView(viewH1);

  return (
    <div className="overflow-hidden">
      <motion.h1
        className="mb-10 text-6xl text-center"
        initial={{ x: 1000 }}
        animate={isInView && { x: 0 }}
        transition={{
          delay: 0,
          duration: 1,
        }}
        ref={viewH1}
      >
        Frequently Asked Questions
      </motion.h1>
      <motion.div
        className="px-8 py-5 bg-[#001F3F] rounded-lg max-w-screen-xl mx-auto mb-28"
        initial={{ x: -1000 }}
        animate={isInView && { x: 0 }}
        transition={{
          delay: 0,
          duration: 1,
        }}
        ref={viewAccordion}
      >
        <Accordion
          title="How long does it take to design and launch a website?"
          answer="The timeline for website design and launch varies but typically ranges from 1 to 4 weeks, depending on the complexity of the project."
        />
        <Accordion
          title="How much does professional web design cost?"
          answer="Professional web design costs vary based on project requirements and complexity. We provide customized quotes after understanding your specific needs."
        />
        <Accordion
          title="Can You Assist with Website Maintenance and Updates After the Launch?"
          answer="Absolutely! We offer ongoing maintenance and support services to keep your website secure, up-to-date, and optimized for performance."
        />
        <Accordion
          title="Do You Provide E-commerce Solutions, and Can You Integrate Payment Gateways?"
          answer="Yes, we specialize in e-commerce development, and we can seamlessly integrate secure payment gateways to enhance your online transactions."
        />
      </motion.div>
    </div>
  );
};

export default FAQ;
