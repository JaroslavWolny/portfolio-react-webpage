import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen 
                 bg-gradient-to-r from-[#0a192f] via-[#0f2a40] to-[#0a192f] 
                 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
          <div></div>
        </div>

        {/* Hlavní prvek */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hi. I’m <span className="text-yellow-400">Jaroslav Wolný</span>,
              nice to meet you!
            </p>
          </div>
          <div>
            <p>
              I’m always eager to learn and take on new challenges. I focus on
              creating high-quality, user-friendly websites that make a real
              difference. Whether I’m collaborating in a team or working solo, I
              love transforming ideas into engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
