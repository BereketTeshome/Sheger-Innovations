import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between w-full rounded-lg p-2 transition-colors duration-200 ${
          isOpen
            ? "bg-[#eeebeb] text-[#000]"
            : "hover:bg-[#eeebeb] hover:text-[#000]"
        }`}
      >
        <span>{title}</span>
        <svg
          className={`fill-indigo-500 ml-8 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-200 ${
          isOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-3 mt-2 text-sm">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
