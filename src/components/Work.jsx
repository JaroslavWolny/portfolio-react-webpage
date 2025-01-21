import React, { useState } from "react";
import { data } from "../data/data.js";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div
      name="work"
      className="
        w-full 
        min-h-screen
        bg-gradient-to-r 
        from-[#0a192f] via-[#0f2a40] to-[#0a192f]
        text-gray-300
      "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Nadpis */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        {/* Tlačítka filtru */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className="
              text-white group border-2 px-6 py-3 flex items-center 
              transition transform duration-300
              hover:scale-105 
              hover:bg-yellow-400 
              hover:border-yellow-400
            "
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("programming")}
            className="
              text-white group border-2 px-6 py-3 flex items-center 
              transition transform duration-300
              hover:scale-105 
              hover:bg-yellow-400 
              hover:border-yellow-400
            "
          >
            Programming
          </button>
          <button
            onClick={() => setSelectedCategory("graphic")}
            className="
              text-white group border-2 px-6 py-3 flex items-center 
              transition transform duration-300
              hover:scale-105 
              hover:bg-yellow-400 
              hover:border-yellow-400
            "
          >
            Graphic
          </button>
        </div>

        {/* Grid projektů */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="
                relative 
                group 
                overflow-hidden 
                rounded-lg 
                shadow-md 
                shadow-[#040c16] 
                transition-transform 
                transform 
                hover:scale-105 
                hover:shadow-lg 
                duration-500
              "
            >
              {/* Obrázek (pozadí) */}
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div
                  className="
                    absolute 
                    inset-0 
                    bg-black/70 
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-300
                  "
                />
              </div>

              {/* Overlay s informacemi */}
              <div
                className="
                  absolute 
                  inset-0 
                  flex 
                  flex-col 
                  items-center 
                  justify-center 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-all 
                  duration-300
                  translate-y-4 
                  group-hover:translate-y-0
                "
              >
                {/* Název projektu */}
                <span className="text-xl font-bold text-white tracking-wider text-center px-4">
                  {item.name}
                </span>

                <div className="mt-4 flex space-x-4">
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="
                          px-5 
                          py-2 
                          rounded-full 
                          bg-yellow-400 
                          text-gray-900 
                          font-bold 
                          text-lg 
                          transition 
                          duration-300 
                          hover:scale-110 
                          hover:bg-yellow-300
                          hover:-translate-y-1
                        "
                      >
                        Live
                      </button>
                    </a>
                  )}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="
                          px-5 
                          py-2 
                          rounded-full 
                          bg-gray-200 
                          text-gray-900 
                          font-bold 
                          text-lg 
                          transition 
                          duration-300 
                          hover:scale-110 
                          hover:bg-gray-300
                          hover:-translate-y-1
                        "
                      >
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
