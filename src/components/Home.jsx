import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";

const heroBadges = [
  { title: "Visual systems", detail: "Design ops + art direction" },
  { title: "Code in motion", detail: "React + Framer motion" },
  { title: "3D narratives", detail: "three.js / shaders" },
];

const stats = [
  { label: "Visual Identities", value: "24", suffix: "+" },
  { label: "Code Projects", value: "18", suffix: "+" },
  { label: "Avg. turnaround", value: "2", suffix: "w" },
];

const Home = () => {
  return (
    <section
      name="home"
      className="relative w-full min-h-screen flex items-center py-24"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] items-center gap-12 px-4 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            NEON VISUAL LAB
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              Frontend developer crafting
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                graphic-first 3D experiences
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-white/70">
              I'm Jaroslav Wolný — blending art‑direction instincts with React,
              WebGL and motion systems. From magazine-worthy hero sections to
              responsive product stories, I turn interfaces into interactive
              artworks.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="work" smooth duration={500} offset={-100}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-[#050511] shadow-xl shadow-white/30"
              >
                Browse selected work
              </motion.button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-100}>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-2 rounded-2xl border border-white/30 px-8 py-4 text-base font-semibold text-white"
              >
                Book a build
                <HiArrowNarrowRight />
              </motion.button>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/30"
              >
                <p className="text-3xl font-semibold text-white">
                  {stat.value}
                  <span className="text-pink-400">{stat.suffix}</span>
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                CREATIVE BOARD
              </p>
              <p className="text-3xl font-semibold text-white">
                Designing kinetic layouts for digital art brands.
              </p>
              <p className="text-sm text-white/70">
                Combining generative gradients, three.js objects and
                micro‑interactions for immersive storytelling.
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {heroBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-white/10 bg-[#080b1d]/70 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">
                    {badge.title}
                  </p>
                  <p className="text-xs text-white/60">{badge.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -right-6 -top-10 w-48 rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/70 via-purple-500/60 to-indigo-500/60 p-4 backdrop-blur-xl shadow-2xl shadow-pink-400/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">
              NOW PLAYING
            </p>
            <p className="text-lg font-semibold text-white">
              Behance drops
            </p>
            <span className="text-sm text-white/70">Posters & visual art</span>
          </motion.div>

          <motion.div
            className="absolute -left-4 bottom-6 w-40 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-2xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1 }}
          >
            <p className="text-4xl font-semibold text-white">94%</p>
            <p className="text-xs uppercase tracking-wide text-white/60">
              wow-factor score
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
