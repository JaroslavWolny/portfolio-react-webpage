import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Logo from "../assets/jaro.png";

const sections = ["home", "my services", "skills", "work", "contact"];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/jaroslav-wolný-b9281221a",
    icon: <FaLinkedin size={28} />,
    label: "LinkedIn",
    color: "bg-blue-600",
  },
  {
    href: "https://github.com/JaroslavWolny",
    icon: <FaGithub size={28} />,
    label: "GitHub",
    color: "bg-[#333333]",
  },
  {
    href: "mailto:jaroslav.wolny97@gmail.com",
    icon: <HiOutlineMail size={28} />,
    label: "Email",
    color: "bg-[#6fc2b0]",
  },
  {
    href: "https://www.instagram.com/justbyjaro",
    icon: <FaInstagram size={28} />,
    label: "Instagram",
    color: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
  },
  {
    href: "https://www.behance.net/jaroslavwoln",
    icon: <FaBehance size={28} />,
    label: "Behance",
    color: "bg-[#1769ff]",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Change navbar background color based on scroll position
  const navBgClass = scrolled
    ? "bg-[#181c25]/80 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 flex items-center px-8 py-2 transition-all duration-300 ${navBgClass}`}
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            onClick={() => setNavOpen(false)}
          >
            <motion.img
              src={Logo}
              alt="Logo"
              className="w-20 cursor-pointer filter drop-shadow-lg"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex ml-auto space-x-10 uppercase text-[#ccd6f6] font-medium tracking-wide">
            {sections.map((sec, index) => (
              <motion.li
                key={sec}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <Link
                  to={sec}
                  smooth
                  duration={500}
                  offset={-80}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Link>
                <motion.span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              className="text-gray-200 focus:outline-none"
              aria-label={navOpen ? "Zavřít menu" : "Otevřít menu"}
            >
              {!navOpen ? <FaBars size={28} /> : <FaTimes size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Backdrop & Menu */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setNavOpen(false)}
            />

            <motion.div
              className={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 z-40 bg-[#181c25]/95 backdrop-blur-md overflow-y-auto`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              {/* Spacer for navbar height */}
              <div className="h-[80px]" />

              <div className="flex flex-col items-end px-6 space-y-6">
                {sections.map((sec, index) => (
                  <motion.div
                    key={sec}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <Link
                      to={sec}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setNavOpen(false)}
                      className="w-full text-right text-white uppercase font-medium tracking-wide text-lg hover:text-yellow-300 transition-colors duration-200"
                    >
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-8 flex space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: sections.length * 0.1 + 0.3 }}
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-300 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar (desktop only) */}
      <div
        className="hidden lg:flex flex-col"
        style={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 40,
        }}
      >
        <ul>
          {socialLinks.map((link) => (
            <li
              key={link.label}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 shadow-lg rounded-lg mb-2 ${link.color}`}
            >
              <a
                className="flex justify-between items-center w-full text-white font-semibold"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.label}
                <span className="ml-2">{link.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
