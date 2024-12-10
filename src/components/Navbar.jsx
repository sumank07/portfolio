import React, { useState } from "react";
import logoImage from '../Assets/logo-image.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0" role="navigation" aria-label="Main Navigation">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-12 h-12" />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="block hover:text-gray-400">
            My Skills
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact Me
          </a>
        </div>
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden mt-4 py-4 space-y-4 bg-black`}
      >
        <a href="#home" className="block text-white hover:text-gray-400">
          Home
        </a>
        <a href="#about" className="block text-white hover:text-gray-400">
          About Me
        </a>
        <a href="#skills" className="block text-white hover:text-gray-400">
          My Skills
        </a>
        <a href="#contact" className="block text-white hover:text-gray-400">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
