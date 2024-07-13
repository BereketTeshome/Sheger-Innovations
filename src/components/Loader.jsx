import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative bottom-6">
        <div className="border-4 border-[#FD7019] border-solid rounded-full w-28 h-28 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-[#FD7019]">
          SHEGER
        </div>
      </div>
    </div>
  );
};

export default Loader;
