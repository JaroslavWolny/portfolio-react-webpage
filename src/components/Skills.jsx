import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const skillBadges = [
  { name: "React", icon: <FaReact className="text-cyan-300" size={36} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-sky-400" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-emerald-400" size={32} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-200" size={30} /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" size={32} /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" size={30} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-400" size={32} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" size={32} /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-indigo-300" size={30} /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-300" size={32} /> },
];

const stacks = [
  {
    title: "Experience engineering",
    description:
      "Component systems, motion blueprints and performance budgets tuned for launch campaigns.",
    bullets: ["Design tokens", "GSAP / Framer Motion", "Accessibility QA"],
  },
  {
    title: "Realtime & 3D",
    description:
      "three.js scenes, shaders and WebGL layers that amplify brand storytelling.",
    bullets: ["@react-three/fiber", "Custom shaders", "GPU particles"],
  },
  {
    title: "Visual operations",
    description:
      "Branded toolkits, templates and creative automation for social drops.",
    bullets: ["Figma libraries", "Adobe suite", "Motion presets"],
  },
];

const Skills = () => (
  <section name="skills" className="w-full py-24 text-white">
    <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
          Capabilities
        </p>
        <div className="space-y-4">
          <h2 className="text-4xl font-semibold">
            A multi-disciplinary stack for immersive digital art products.
          </h2>
          <p className="max-w-2xl text-white/70">
            I obsess over the bridge between visual identity and living
            interfaces — pairing component-driven code with editorial design,
            typography and motion. Here’s how I break down the toolkit.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {stacks.map((stack, index) => (
            <motion.article
              key={stack.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Stack 0{index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{stack.title}</h3>
              <p className="mt-2 text-sm text-white/70">{stack.description}</p>
              <ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
                {stack.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-full border border-white/15 px-4 py-1 uppercase tracking-wide"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="rounded-3xl border border-white/10 bg-[#060a1d]/70 p-6 backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Toolset
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skillBadges.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-semibold text-white/80"
              >
                <div className="mb-2 flex justify-center">{skill.icon}</div>
                {skill.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
