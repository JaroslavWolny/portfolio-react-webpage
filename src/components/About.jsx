import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Jaroslav Wolný, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I'm always eager to learn more and take on new challenges, so I'm
              looking for opportunities to grow as a developer. Whether it's
              working on a team or on my own, I'm committed to creating
              high-quality, user-friendly websites that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
