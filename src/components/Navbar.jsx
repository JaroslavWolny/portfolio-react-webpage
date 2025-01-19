import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Logo from "../assets/jaro.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bg, setBg] = useState(false); // stav pro změnu barvy pozadí při scrollu

  const handleClick = () => setNav(!nav);

  // Při scrollování mění stav `bg`, který řídí průhlednost navbaru
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed w-full h-[80px] flex justify-between items-center px-4 z-50 
        text-gray-300 shadow-md shadow-[#040c16]
        transition-colors duration-300
        ${
          bg
            ? // Pokud uživatel sjel níže, navbar dostane sytější (méně průhledný) vzhled
              "bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f] bg-opacity-90 backdrop-blur-none"
            : // Když je uživatel na vrchu stránky, ukážeme průhledný / glass efekt
              "bg-gradient-to-r from-[#0a192f]/30 via-[#0f2a40]/30 to-[#0a192f]/30 backdrop-blur-md"
        }
      `}
    >
      {/* Logo vlevo */}
      <div>
        <img src={Logo} alt="Logo" style={{ width: "80px" }} />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8">
        <li className="relative group">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            Home
          </Link>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="about" smooth={true} duration={500} offset={-80}>
            About
          </Link>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="skills" smooth={true} duration={500} offset={-80}>
            Skills
          </Link>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="work" smooth={true} duration={500} offset={-80}>
            Work
          </Link>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            Contact
          </Link>
          <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-yellow-400 transition-all duration-300"></span>
        </li>
      </ul>

      {/* Hamburger ikona (jen pro mobily) */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobilní menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen
               flex flex-col justify-center items-center
               bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f]
               transition-all duration-300`
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Sociální ikony (sidebar) */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] 
                       hover:ml-[-10px] duration-300 bg-blue-600 shadow-lg rounded-lg"
          >
            <a
              className="flex justify-between items-center w-full text-white font-semibold"
              href="https://www.linkedin.com/in/jaroslav-wolný-b9281221a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} className="ml-2" />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                       hover:ml-[-10px] duration-300 bg-[#333333] shadow-lg rounded-lg"
          >
            <a
              className="flex justify-between items-center w-full text-white font-semibold"
              href="https://github.com/JaroslavWolny"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} className="ml-2" />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                       hover:ml-[-10px] duration-300 bg-[#6fc2b0] shadow-lg rounded-lg"
          >
            <a
              className="flex justify-between items-center w-full text-white font-semibold"
              href="mailto:jaroslav.wolny97@gmail.com"
            >
              Email <HiOutlineMail size={30} className="ml-2" />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px]
                       hover:ml-[-10px] duration-300 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-lg rounded-lg"
          >
            <a
              className="flex justify-between items-center w-full text-white font-semibold"
              href="https://www.instagram.com/justbyjaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagram size={30} className="ml-2" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
