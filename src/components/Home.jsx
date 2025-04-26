import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  // State for mouse scroll indicator
  const [mouseOpacity, setMouseOpacity] = useState(0);
  const [showMouse, setShowMouse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMouse(true);
      setMouseOpacity(1);
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showMouse) return;
    const handleScroll = () => {
      // Smoothly fade out the mouse indicator on scroll
      const y = window.scrollY;
      const fadeEnd = window.innerHeight * 0.5;
      let opacity = 1 - y / fadeEnd;
      if (opacity < 0) opacity = 0;
      if (opacity > 1) opacity = 1;
      setMouseOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showMouse]);

  return (
    <div name="home" className="relative w-full h-screen overflow-hidden">
      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-[1000px] mx-auto h-full px-6 flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          JAROSLAV WOLNÝ
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Frontend Developer & Designer
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-pink-400 mb-8"></div>

        {/* Bio */}
        <motion.p
          className="text-[#ccd6f6] max-w-[700px] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Hi, I'm Jaro – a former administrative ninja who swapped folders for
          JavaScript. When I'm not fine‑tuning React animations, I'm lifting
          weights or editing videos, because strength should live in pixels too.
          My mission is to channel office precision and gym energy into code
          that's as clean as my deadlift.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <Link to="work" smooth duration={500}>
            <motion.button
              className="px-8 py-4 bg-white text-[#0a192f] font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              View Works
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={500}>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#0a192f] transform hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
              <HiArrowNarrowRight className="inline ml-2" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {showMouse && (
        <motion.div
          className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
          style={{ opacity: mouseOpacity, pointerEvents: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: mouseOpacity }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-8 h-14 border-2 border-white rounded-full flex justify-center items-start p-1"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <motion.div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
