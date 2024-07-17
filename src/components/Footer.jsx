import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61562675561558",
    icon: <FaFacebookF />,
  },
  {
    href: "https://x.com/ShegerInovation?t=_jzUvTszmgDMfPHds4RrYQ&s=09",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.instagram.com/sheger_innovations?igsh=MWZnenJ3eHdnYjJoNA==",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/sheger-innovations-222430317",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.tiktok.com/@sheger.innovation?_t=8o5fW76whwT&_r=1",
    icon: <FaTiktok />,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top flex items-center flex-col sm:flex-row">
          <div className="logo-details">
            <img src="./Logo.png" alt="footer logo" className="max-w-36" />
          </div>
          <div className="media-icons flex space-x-2">
            {socialLinks.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {React.cloneElement(icon, {
                  className: "relative top-[10px] left-2.5",
                })}
              </a>
            ))}
          </div>
        </div>
        <div className="link-boxes flex flex-wrap">
          <div className="max-w-[300px] font-light mb-6 md:mb-0 footer-desc">
            <p
              className="text-balance text-gray-300"
              style={{ wordSpacing: "0.15rem" }}
            >
              <b className="text-4xl text-[#ff932f] font-mono">S</b>heger
              Innovations is a software development firm specializing in
              full-stack web development and SaaS solutions. We collaborate with
              medium-sized enterprises and are always open to new partnerships.
            </p>
            <hr className="py-2 mt-2" />
            <p className="text-gray-300">
              Based in{" "}
              <i className="text-white text-lg">Addis Ababa, Ethiopia</i>
            </p>
          </div>
          <ul className="box">
            <li className="link_name">Links</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Software Maintenance</a>
            </li>
            <li>
              <a href="#">Front-End Development</a>
            </li>
            <li>
              <a href="#">Back-End Development</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2024 <a href="#">Sheger Innovations.</a> All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
