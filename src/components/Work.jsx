import React, { useMemo, useState } from "react";
import { FaBehance, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data as projects } from "../data/data.js";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "programming", label: "Programming" },
  { key: "graphic", label: "Graphic" },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section name="work" className="w-full py-24 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Selected work
            </p>
            <h2 className="text-4xl font-semibold">
              Where design experiments meet production-ready code.
            </h2>
            <p className="text-white/70">
              A mix of interface builds, creative coding studies and graphic
              explorations for music, fitness and culture brands.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  selectedCategory === cat.key
                    ? "border-white bg-white text-[#050511]"
                    : "border-white/20 text-white/70 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name || project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050511] via-transparent to-transparent opacity-60" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
                    {project.category === "graphic" ? "Visual" : "Code"}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.name || project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-white/70">{project.description}</p>
                  )}
                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.category === "graphic" && project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
                      >
                        <FaBehance /> Shot
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#050511]"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:text-white"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
