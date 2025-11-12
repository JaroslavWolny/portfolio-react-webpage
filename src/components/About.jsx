import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import {
  TbBrandAdobe,
  TbCodeCircle2,
  TbCameraBolt,
  TbHexagon3D,
} from "react-icons/tb";

const services = [
  {
    title: "Creative engineering",
    description:
      "Design systems, high-polish landing pages and immersive product flows coded in React, Next.js and Framer Motion.",
    tags: ["React", "Next.js", "Vite", "Edge APIs"],
    accent: "from-yellow-300 via-orange-400 to-pink-500",
    icon: TbCodeCircle2,
  },
  {
    title: "Visual direction",
    description:
      "Graphic identities, editorial layouts and bold typography explorations built straight from Figma into code.",
    tags: ["Figma", "Clash Display", "Kinetic Type"],
    accent: "from-pink-500 via-purple-500 to-indigo-500",
    icon: TbHexagon3D,
  },
  {
    title: "Motion & video",
    description:
      "Reels, launch trailers and looping hero videos color-graded for neon atmospheres.",
    tags: ["Premiere Pro", "After Effects", "60fps"],
    accent: "from-sky-400 via-cyan-400 to-emerald-400",
    icon: TbCameraBolt,
  },
];

const About = () => {
  return (
    <section name="services" className="relative w-full py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-4">
        <div className="space-y-6 text-left md:text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Services & Process
          </p>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Design engineered
            </span>{" "}
            for visual-first brands.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            I blend art direction with production-ready code: storyboards in
            Figma, shader sketches in Blender and performant React builds. Each
            release gets custom typography, bespoke gradients and micro-
            interactions tuned to the brand pulse.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-white/20 bg-[#060a1d]/80 p-3">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-white/70">{service.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="relative mt-8 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Process reel
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Workshop → Artboard → Interactive canvas
            </h3>
            <p className="mt-4 text-white/70">
              I start with analog sketchbooks, move into Figma for systems and
              prototypes, then translate everything into code with Framer Motion
              and three.js for immersive layers.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#060a1d]/70 p-6 text-sm text-white/70">
            <div className="flex items-center justify-between text-white">
              <span className="text-lg font-semibold">Inspiration log</span>
              <TbBrandAdobe size={26} />
            </div>
            <p>
              Poster studies, kinetic typography and 3D typography experiments —
              catch the latest drops on Instagram.
            </p>
            <a
              href="https://www.instagram.com/justbyjaro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-pink-300 hover:text-white"
            >
              <FaInstagram /> Visual journal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
