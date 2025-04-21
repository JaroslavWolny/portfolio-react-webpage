import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaVideo, FaInstagram } from "react-icons/fa";

const About = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode className="text-yellow-300" size={48} />,
      desc: "I architect blazing‑fast React front‑ends that load in a blink, animate with Framer Motion flair and tap resilient edge APIs—code that's lean, accessible and future‑proof.",
    },
    {
      title: "Design",
      icon: <FaPaintBrush className="text-pink-400" size={48} />,
      desc: "Figma & Photoshop are my playgrounds—I weave vibrant gradients, glassy layers and kinetic type into layouts that breathe accessibility and micro‑joy.",
      ig: "https://www.instagram.com/jarofreeman/",
    },
    {
      title: "Video Editing",
      icon: <FaVideo className="text-purple-400" size={48} />,
      desc: "From gym clips to launch promos, I cut stories at 60 fps, blend motion‑graphics neon and export reels that pop on any feed.",
      ig: "https://www.instagram.com/jarofreeman/",
    },
  ];

  return (
    <div
      name="services"
      className="relative w-full py-24 overflow-visible text-gray-300"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div>
            <motion.p
              className="text-5xl md:text-6xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              My Services
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-8" />
            <p className="text-base md:text-lg text-gray-400 max-w-md">
              Code<span className="text-yellow-300">.</span> Color
              <span className="text-pink-400">.</span> Motion
              <span className="text-purple-400">.</span>
              That’s the trio I,{" "}
              <span className="font-semibold text-yellow-300">Jaro</span>, blend
              into every project.
            </p>
          </div>
        </div>

        {/* Services timeline */}
        <div className="relative w-full max-w-[800px] mx-auto flex flex-col items-center mt-12 px-4">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-yellow-300 via-pink-400 to-purple-500 opacity-30" />

          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={s.title}
                className={`relative w-[90%] mx-auto md:w-[45%] md:mx-0 ${
                  isLeft ? "md:self-start md:pr-12" : "md:self-end md:pl-12"
                } mb-16`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* connector dot */}
                <div
                  className={`hidden md:block absolute top-6 ${
                    isLeft ? "right-[-8px]" : "left-[-8px]"
                  } w-4 h-4 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500`}
                />

                <div className="bg-[#181c25]/80 backdrop-blur-md rounded-xl p-6 shadow hover:-translate-y-2 hover:shadow-yellow-400/20 transition-all duration-300">
                  <div className="mb-4 flex justify-center">{s.icon}</div>
                  <h3 className="text-2xl font-semibold text-yellow-300 mb-2 text-center">
                    {s.title}
                  </h3>
                  <p className="text-[#ccd6f6] text-center">{s.desc}</p>
                  {s.ig && (
                    <a
                      href={s.ig}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center text-pink-400 hover:text-yellow-300 transition-colors"
                    >
                      <FaInstagram size={22} />
                      <span className="sr-only">Instagram</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
