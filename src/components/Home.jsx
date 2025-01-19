import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen
                 bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f]
                 flex items-center"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        {/* Jméno */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-2">
          JAROSLAV WOLNÝ
        </h1>

        {/* Pozice s typovacím efektem */}
        <h2 className="text-3xl sm:text-5xl font-bold text-yellow-400 mb-6">
          <Typewriter
            options={{
              strings: [
                "Front-end Developer",
                "Graphic Designer",
                "Creative Coder",
                "UI & UX Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        {/* Krátký popis */}
        <p className="text-[#8892b0] max-w-[700px] mb-8">
          I craft immersive and visually striking digital experiences, merging
          my passion for front-end development with graphic design. Every line
          of code and pixel serves a purpose, creating web solutions that are
          not only functional, but also memorable.
        </p>

        {/* Tlačítka (CTA) */}
        <div className="flex gap-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-yellow-400 hover:border-yellow-400">
              View Works
              <span className="group-hover:rotate-90 duration-300 ml-3">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-500 hover:border-pink-500">
              Contact Me
              <span className="group-hover:rotate-90 duration-300 ml-3">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
