import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work across full-stack and mobile development."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -10, boxShadow: "0 25px 60px -15px hsl(262 83% 62% / 0.25)" }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 shadow-sm transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Project Image */}
                <div className="w-full h-40 overflow-hidden bg-muted dark:bg-slate-800 relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.18, rotate: 12 }}
                    className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-accent dark:text-accent mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-foreground dark:text-slate-50 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-accent hover:text-primary dark:hover:text-accent text-sm font-medium transition-colors"
                      >
                        Visit Project <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
