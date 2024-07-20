import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const TelegramIcon = () => {
  return (
    <div className="fixed z-50 p-3 duration-150 bg-blue-600 rounded-full shadow-xl cursor-pointer shadow-black hover:scale-125 hover:text-blue-600 bottom-3 right-3 hover:bg-white animate-jump">
      <a
        href="https://t.me/medication12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegramPlane size={20} />
      </a>
    </div>
  );
};

export default TelegramIcon;
