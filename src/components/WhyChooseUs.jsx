import React, { useState } from "react";

const features = [
  {
    icon: "fa-chart-column",
    title: "Advanced Analytics",
    description:
      "Track and analyze your data with powerful analytics tools. Gain valuable insights for better decision-making.",
    bgColor: "bg-purple-200",
  },
  {
    icon: "fa-truck-fast",
    title: "Fast Integration",
    description:
      "Seamlessly integrate with your existing tools and systems for a smooth workflow experience.",
    bgColor: "bg-teal-200",
  },
  {
    icon: "fa-shield",
    title: "Security First",
    description:
      "Ensure the safety of your data with top-notch security features. Your privacy is our priority.",
    bgColor: "bg-yellow-200",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Integration",
    description:
      "Access your data from anywhere with seamless cloud integration. Work without boundaries.",
    bgColor: "bg-red-200",
  },
  {
    icon: "fa-pen-nib",
    title: "Task Management",
    description:
      "Organize your workflow with efficient task management features. Stay on top of your projects effortlessly.",
    bgColor: "bg-green-200",
  },
  {
    icon: "fa-bolt",
    title: "Performance Metrics",
    description:
      "Monitor and measure your performance with comprehensive metrics. Optimize your processes for maximum efficiency.",
    bgColor: "bg-orange-200",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="new-features" className="py-8 bg-none sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#EC6B0F] sm:text-4xl xl:text-5xl">
            WHY CHOOSE SHEGER?
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-400 sm:mt-8">
            Enhance your workflow with advanced features
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {features.map((feature, index) => {
            const [isHovered, setIsHovered] = useState(false);
            const iconStyle = {
              transition: "transform 0.6s ease-in-out",
              transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
            };

            return (
              <div
                key={index}
                className={`md:p-4 lg:p-8 flex flex-col justify-center items-center hover:bg-[#001F3F] duration-300 ${
                  index === 1
                    ? "md:border-l-8 md:border-t md:border-[#EC6B0F]"
                    : ""
                } ${
                  index === 4
                    ? "md:border-r-8 md:border-t-2 md:border-b md:border-[#EC6B0F]"
                    : ""
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`w-14 h-14 rounded-full ${feature.bgColor} flex justify-center items-center`}
                >
                  <i
                    className={`fa-solid ${feature.icon} text-2xl text-[#04091E]`}
                    style={iconStyle}
                  ></i>
                </div>
                <h3 className="mt-12 text-xl font-bold text-gray-400">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
