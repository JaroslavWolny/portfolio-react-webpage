import React, { useState } from "react";
import { FaBehance, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data as projects } from "../data/data.js";
import Background from "./Background";
import { motion } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "programming", label: "Programming" },
  { key: "graphic", label: "Graphic" },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <Background>
      <section name="work" className="w-full min-h-screen text-gray-300 py-16">
        <div className="max-w-[1100px] mx-auto px-4 flex flex-col w-full h-full">
          <header>
            <h2 className="text-5xl md:text-6xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500">
              My&nbsp;Work
            </h2>
            <p className="py-4 text-lg text-gray-400">
              Check out some of my recent work
            </p>
          </header>

          {/* Buttons_Filter */}
          <nav className="flex gap-4 mb-10 mt-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`
                  px-6 py-2 rounded-full border-2 font-semibold
                  transition-all duration-300
                  shadow-sm
                  ${
                    selectedCategory === cat.key
                      ? "bg-yellow-400 border-yellow-400 text-gray-900 scale-105"
                      : "bg-transparent border-gray-500 text-white hover:bg-yellow-400 hover:border-yellow-400 hover:text-gray-900 hover:scale-105"
                  }
                `}
                aria-pressed={selectedCategory === cat.key}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#181c25] rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex flex-col group overflow-hidden border border-white/10 w-[90%] mx-auto sm:w-full"
              >
                <motion.div
                  className="w-full h-40 sm:h-48 bg-cover bg-center relative group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-4 sm:p-6 flex flex-col flex-1 w-full">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                    {project.name || project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                  )}
                  <div className="flex gap-3 mt-auto">
                    {project.category === "graphic" ? (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-bold shadow hover:bg-blue-600 hover:scale-105 transition-all duration-200">
                          <FaBehance /> Behance
                        </button>
                      </a>
                    ) : (
                      project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 text-gray-900 font-bold shadow hover:scale-105 transition-transform duration-200">
                            <FaExternalLinkAlt /> Demo
                          </button>
                        </a>
                      )
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-bold shadow hover:bg-gray-700 hover:scale-105 transition-all duration-200">
                          <FaGithub /> Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Background>
  );
};

export default Work;
