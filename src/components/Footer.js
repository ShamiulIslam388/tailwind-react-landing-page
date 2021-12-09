import React from "react";
import Logo from "../images/logo-bookmark-white.png";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-bookmark-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center text-sm sm:justify-start gap-12">
          <img src={Logo} alt="" className="cursor-pointer" />
          <ul className="flex text-white gap-10 uppercase">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Features</li>
          </ul>
        </div>
        <div className="flex gap-10 items-center mt-8 md:mt-0">
          <AiOutlineGithub className="text-white text-3xl" />
          <AiFillLinkedin className="text-white text-3xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
