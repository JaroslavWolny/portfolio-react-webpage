import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    id: "linkedin",
    icon: <FaLinkedin size={20} />,
    href: "https://www.linkedin.com/in/jaroslav-wolný-b9281221a",
  },
  {
    id: "github",
    icon: <FaGithub size={20} />,
    href: "https://github.com/JaroslavWolny",
  },
  {
    id: "behance",
    icon: <FaBehance size={20} />,
    href: "https://www.behance.net/jaroslavwoln",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCondensed(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "text-sm font-semibold tracking-wide text-white/70 hover:text-white transition-colors px-4 py-2 rounded-full";

  return (
    <header className="fixed top-4 left-1/2 z-40 w-full -translate-x-1/2 px-4">
      <motion.div
        className="mx-auto max-w-[1200px] rounded-full border border-white/10 bg-[#050511]/40 backdrop-blur-2xl flex items-center gap-4 px-4 md:px-6 py-3"
        animate={{
          boxShadow: condensed
            ? "0px 20px 60px rgba(15, 23, 42, 0.6)"
            : "0px 10px 30px rgba(15, 23, 42, 0.2)",
          opacity: condensed ? 0.95 : 1,
          scale: condensed ? 0.98 : 1,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <Link
          to="home"
          smooth
          duration={500}
          offset={-100}
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-sm font-black tracking-[0.35em] uppercase flex items-center justify-center text-white shadow-lg shadow-pink-500/40">
            JW
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[11px] uppercase text-white/60 tracking-[0.4em]">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-white">
              Jaroslav Wolný
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-100}
              className={`${navLinkClasses} hover:bg-white/5`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label={social.id}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <Link
            to="contact"
            smooth
            duration={500}
            offset={-100}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-gray-900 shadow-lg shadow-pink-500/40"
          >
            Let's build
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full border border-white/20 p-2 text-white focus:outline-none md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <IoClose size={22} /> : <HiOutlineMenuAlt4 size={22} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-24 left-1/2 w-[90%] max-w-sm -translate-x-1/2 rounded-3xl border border-white/10 bg-[#050511]/95 p-8 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    smooth
                    duration={500}
                    offset={-100}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/5 px-4 py-3 text-lg font-semibold tracking-wide text-white/80 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                <span>Follow my drops</span>
                <div className="flex items-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 p-2 text-white/70 hover:text-white"
                      aria-label={social.id}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
