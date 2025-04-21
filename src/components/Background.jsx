import React from "react";
import { motion } from "framer-motion";

const Background = ({ children }) => (
  <>
    {/* Fixed Background */}
    <div className="fixed inset-0 overflow-hidden -z-10">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#0f2a40] to-[#0a192f]" />
      {/* Morphing blobs */}
      <motion.div
        className="absolute w-[40%] h-[30%] top-[-10%] left-[-10%] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-30 filter blur-2xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[50%] h-[40%] bottom-[-15%] right-[-10%] bg-gradient-to-r from-blue-400 to-green-300 rounded-full opacity-30 filter blur-2xl"
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[30%] h-[25%] top-[20%] right-[-10%] bg-gradient-to-r from-yellow-300 to-red-400 rounded-full opacity-20 filter blur-3xl"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
    {/* Page content */}
    <div className="relative z-10">{children}</div>
  </>
);

export default Background;
