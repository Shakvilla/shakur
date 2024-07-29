import React from "react";
import { RiTwitterXLine, RiFacebookFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap md:justify-between items-center px-4 sm:px-6 md:px-8 bg-gray-800 border-t border-gray-700">
      <div className="flex space-x-2 md:space-x-4 items-center">
        <p className="text-sm text-gray-300 border-r border-gray-700 px-4 py-2">
          find me in:
        </p>
        <a
          href="https://twitter.com"
          className="text-gray-400 py-2 hover:text-white border-r border-gray-700 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterXLine />
        </a>
        <a
          href="https://facebook.com"
          className="text-gray-400 py-2 hover:text-white border-r border-gray-700 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookFill />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-400 py-2 hover:text-white border-r border-gray-700 md:px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="mt-0">
        <a
          href="https://github.com/shakvilla"
          className="flex items-center gap-2 py-2 text-gray-400 hover:text-white border-l border-gray-700 md:px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hidden md:block">@shakvilla</span>
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
