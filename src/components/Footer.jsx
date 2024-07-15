import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top flex items-center flex-col sm:flex-row">
          <div className="logo-details">
            <img src="./Logo.png" alt="footer logo" className="max-w-36" />
          </div>
          <div className="media-icons">
            <a href="#">
              <FaFacebookF className="relative top-[10px] left-2.5" />
            </a>
            <a href="#">
              <FaTwitter className="relative top-[10px] left-2.5" />
            </a>
            <a href="#">
              <FaInstagram className="relative top-[10px] left-2.5" />
            </a>
            <a href="#">
              <FaLinkedinIn className="relative top-[10px] left-2.5" />
            </a>
            <a href="#">
              <FaYoutube className="relative top-[10px] left-2.5" />
            </a>
          </div>
        </div>
        <div className="link-boxes flex flex-wrap">
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
          <ul class="box">
            <li class="link_name">Services</li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Front-End Development</a>
            </li>
            <li>
              <a href="#">Back-End Development</a>
            </li>
          </ul>

          <ul class="box input-box">
            <li class="link_name">Subscribe</li>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <input type="button" value="Subscribe" />
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright © 2024 <a href="#"> Sheger Innovations.</a>All rights
            reserved
          </span>
          <span class="policy_terms">
            <a href="#">Privacy policy</a>
            <a href="#">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
