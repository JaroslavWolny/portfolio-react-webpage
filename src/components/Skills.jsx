import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import TypeScript from "../assets/typescript.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="
        w-full
        min-h-screen
        bg-gradient-to-r 
        from-[#0a192f] 
        via-[#0f2a40] 
        to-[#0a192f]
        text-gray-300
        flex
        items-center
      "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        {/* Nadpis */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
            Skills
          </p>
          <p className="py-4">These are the technologies I’ve worked with</p>
        </div>

        {/* Grid s technologiemi */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8">
          {/* HTML */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60 
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img className="w-16 mx-auto mb-2" src={HTML} alt="HTML icon" />
            <p className="mt-2 font-semibold tracking-wider">HTML</p>
          </div>

          {/* CSS */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img className="w-16 mx-auto mb-2" src={CSS} alt="CSS icon" />
            <p className="mt-2 font-semibold tracking-wider">CSS</p>
          </div>

          {/* JavaScript */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img
              className="w-16 mx-auto mb-2"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="mt-2 font-semibold tracking-wider">JavaScript</p>
          </div>

          {/* TypeScript */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img
              className="w-16 mx-auto mb-2"
              src={TypeScript}
              alt="TypeScript icon"
            />
            <p className="mt-2 font-semibold tracking-wider">TypeScript</p>
          </div>

          {/* React */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img
              className="w-16 mx-auto mb-2"
              src={ReactImg}
              alt="React icon"
            />
            <p className="mt-2 font-semibold tracking-wider">React</p>
          </div>

          {/* GitHub */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img className="w-16 mx-auto mb-2" src={GitHub} alt="GitHub icon" />
            <p className="mt-2 font-semibold tracking-wider">GitHub</p>
          </div>

          {/* Tailwind */}
          <div
            className="
              bg-[#0a192f]/40
              rounded-lg
              shadow-md 
              shadow-[#040c16] 
              hover:shadow-lg 
              hover:bg-[#0a192f]/60
              transition 
              duration-500 
              flex 
              flex-col 
              items-center 
              p-6
            "
          >
            <img
              className="w-16 mx-auto mb-2"
              src={Tailwind}
              alt="Tailwind CSS icon"
            />
            <p className="mt-2 font-semibold tracking-wider">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
