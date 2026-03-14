import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background dark:bg-slate-950">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="My career journey and the impact I've made along the way."
      />
      
      <div className="relative border-l-2 border-accent/30 ml-4 md:ml-6 space-y-12">
        {experience.map((job, index) => {
          const Icon = job.icon;
          return (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 0px hsl(262 83% 62% / 0)", "0 0 14px hsl(262 83% 62% / 0.7)", "0 0 0px hsl(262 83% 62% / 0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-background border-4 border-accent flex items-center justify-center">
                <Icon className="w-3 h-3 text-accent" />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 60px -15px hsl(262 83% 62% / 0.18)" }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 hover:border-accent/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-slate-50 font-display">
                      {job.role}
                    </h3>
                    <p className="text-lg font-medium text-accent mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary dark:bg-slate-800 text-sm font-medium text-muted-foreground dark:text-slate-400 whitespace-nowrap">
                    {job.period}
                  </div>
                </div>
                <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
