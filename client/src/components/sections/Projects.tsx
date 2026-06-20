import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, Github, Eye } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const categories = ["All", "Mobile", "Full Stack", "Extension", "WordPress"];

export function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter(p =>
        p.category.toLowerCase().includes(active.toLowerCase()) ||
        active.toLowerCase().includes(p.category.split(" ")[0].toLowerCase())
      );

  return (
    <section id="projects" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(200 100% 60% / 0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated selection of things I've built — from mobile platforms to browser extensions."
        />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === cat
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/25"
                  : "bg-card border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07, type: "spring", bounce: 0.3 }}
                >
                  <TiltCard className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 shadow-sm hover:shadow-[0_20px_50px_-12px_hsl(262_83%_62%_/_0.25)] transition-all duration-300 flex flex-col h-full cursor-pointer">

                    {/* Image + hover overlay */}
                    <div className="relative w-full h-44 overflow-hidden bg-muted dark:bg-slate-800">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={e => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold shadow-lg"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={e => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-700 text-white text-sm font-semibold shadow-lg border border-slate-600"
                          >
                            <Github className="w-3.5 h-3.5" />
                            GitHub
                          </motion.a>
                        )}
                        {!project.link && !project.github && (
                          <span className="text-white/70 text-sm">Private Project</span>
                        )}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-[11px] font-bold tracking-widest uppercase text-accent mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="text-lg font-bold font-display text-foreground group-hover:text-accent transition-colors leading-tight">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 ml-3 group-hover:bg-accent/20 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-slate-300 border border-border/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
