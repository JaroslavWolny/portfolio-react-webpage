import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="relative w-full py-24 flex justify-center items-center p-4 overflow-visible text-gray-300"
    >
      <motion.form
        method="POST"
        action="https://getform.io/f/cdd145f4-6a41-48e4-959f-14cd252cf7f4"
        className="flex flex-col max-w-[600px] w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="pb-8">
          <motion.p
            className="text-5xl md:text-6xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Contact Me
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-6" />
          <motion.p
            className="text-gray-400 mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Whether you have a project in mind or just want to say&nbsp;hi, drop
            me a message and I’ll reply within 24 hours.
          </motion.p>
        </div>

        {/* Name */}
        <input
          className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          type="text"
          placeholder="Name"
          name="name"
          required
        />

        {/* E-mail */}
        <input
          className="my-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        {/* Text */}
        <textarea
          className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        {/* Button_Send */}
        <button
          type="submit"
          className="px-8 py-3 my-8 mx-auto text-white font-semibold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
