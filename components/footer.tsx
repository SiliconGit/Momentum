import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { IoLogoGoogle } from "react-icons/io";

interface FooterProps {
  textColor: string;
}

const Footer: React.FC<FooterProps> = ({ textColor }) => {
  return (
    <footer className={`bg-gray-900 ${textColor} py-4`}>
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center justify-center sm:justify-start">
          <span className="ml-3 text-xl">Silicon</span>
        </a>
        <p className="text-sm mt-4 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2">
          © 2020 Silicon
        </p>
        <div className="flex justify-center sm:justify-start space-x-4 mt-4 sm:mt-0">
          <a
            className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 hover:text-blue-500 transition"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 hover:text-blue-500 transition"
            href="https://github.com/SiliconGit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
          <a
            className="w-6 h-6 sm:w-7 sm:h-7 text-gray-300 hover:text-blue-500 transition"
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGoogle />
          </a>
          {/* Add other icons like Facebook, Instagram, LinkedIn if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
