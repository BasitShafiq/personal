import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background dark:bg-slate-950">
      <SectionHeading 
        title="Education" 
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15, type: "spring", bounce: 0.3 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)" }}
            className="flex gap-6 p-6 rounded-2xl bg-card dark:bg-slate-900 border border-border/50 dark:border-slate-700 shadow-sm transition-all"
          >
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-14 h-14 rounded-full bg-secondary dark:bg-slate-800 flex items-center justify-center text-primary dark:text-accent"
              >
                <GraduationCap className="w-7 h-7" />
              </motion.div>
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-primary dark:text-slate-50">
                {edu.degree}
              </h3>
              <p className="font-medium text-foreground dark:text-slate-300 mt-1">
                {edu.institution}
              </p>
              <p className="text-sm font-medium text-accent mt-2">
                {edu.period}
              </p>
              <p className="text-muted-foreground dark:text-slate-400 mt-3 text-sm leading-relaxed">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
