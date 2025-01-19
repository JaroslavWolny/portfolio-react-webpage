import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300
                 bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Nadpis */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
            Work
          </p>
          <p className="py-6">
            {/* Krátká popiska */}
            // Check out some of my recent work
          </p>
        </div>

        {/* Grid layout pro projekty */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md
                         shadow-lg shadow-[#040c16] group
                         transition-transform transform hover:scale-105
                         duration-300"
            >
              {/* Obrázek pozadí */}
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Poloprůhledná tmavá vrstva na hover */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-60
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300"
                ></div>
              </div>

              {/* Informace o projektu (zobrazeny na hover) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"
              >
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="mt-4 flex space-x-4">
                  {/* Tlačítko Live */}
                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="px-4 py-2 bg-yellow-400 text-gray-900 font-bold text-lg rounded-lg
                                         transition-transform transform hover:scale-110"
                      >
                        Live
                      </button>
                    </a>
                  )}
                  {/* Tlačítko Code */}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="px-4 py-2 bg-gray-200 text-gray-900 font-bold text-lg rounded-lg
                                         transition-transform transform hover:scale-110"
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
