import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" size={48} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={48} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={48} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={48} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" size={48} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" size={48} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-300" size={48} />,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" size={48} /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" size={48} /> },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-blue-300" size={48} />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => (
  <div name="skills" className="w-full min-h-screen text-gray-300 py-16">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500">
          My Skills
        </h2>
        <p className="py-6 text-lg text-gray-400">
          Modern web development stack & design tools I use daily.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="bg-[#181c25] rounded-xl shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center p-6 group"
          >
            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="mt-2 font-semibold tracking-wider text-lg group-hover:text-yellow-300 transition-colors">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Skills;
