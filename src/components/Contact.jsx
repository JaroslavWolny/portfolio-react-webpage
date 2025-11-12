import React from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

const contactChannels = [
  {
    label: "Email",
    value: "jaroslav.wolny97@gmail.com",
    href: "mailto:jaroslav.wolny97@gmail.com",
    icon: <HiOutlineMail />,
  },
  {
    label: "LinkedIn",
    value: "@jaroslav-wolny",
    href: "https://www.linkedin.com/in/jaroslav-wolný-b9281221a",
    icon: <FaLinkedin />,
  },
  {
    label: "Behance",
    value: "Visual drops",
    href: "https://www.behance.net/jaroslavwoln",
    icon: <FaBehance />,
  },
];

const Contact = () => {
  return (
    <section
      name="contact"
      className="relative w-full py-24 text-white"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Let's collaborate
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Tell me about your product and I'll design the cinematic web
            version of it.
          </h2>
          <p className="mt-4 text-white/70">
            I reply within one business day. Include timelines, vibe boards or
            references — I love diving into the moodboard.
          </p>

          <div className="mt-8 space-y-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#060a1d]/70 px-4 py-3 text-sm text-white/80 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{channel.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">
                      {channel.label}
                    </p>
                    <p className="text-base font-semibold">{channel.value}</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Reach out
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 text-white/60">
            <span className="text-sm uppercase tracking-[0.3em]">
              Also building on
            </span>
            <div className="flex gap-3 text-lg">
              <a
                href="https://github.com/JaroslavWolny"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jaroslav-wolný-b9281221a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.behance.net/jaroslavwoln"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaBehance />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          method="POST"
          action="https://getform.io/f/cdd145f4-6a41-48e4-959f-14cd252cf7f4"
          className="rounded-3xl border border-white/10 bg-[#060a1d]/80 p-8 backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-2 pb-8">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Project brief
            </p>
            <h3 className="text-3xl font-semibold">Send a note</h3>
            <p className="text-white/70">
              Share links, goals or the type of vibe you’re after. I’ll send a
              tailored moodboard and roadmap.
            </p>
          </div>

          <div className="space-y-4">
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              placeholder="Full name"
              name="name"
              required
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              placeholder="Project / brand"
              name="project"
            />
            <textarea
              className="h-40 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
              name="message"
              placeholder="Tell me about timelines, vibe, required deliverables..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-3xl bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 px-6 py-4 text-base font-semibold text-[#050511] shadow-lg shadow-pink-500/30"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
