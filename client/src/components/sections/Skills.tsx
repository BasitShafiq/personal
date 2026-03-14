import { motion } from "framer-motion";
import { skills, awards } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Award } from "lucide-react";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0,-30,0], y:[0,20,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(262 83% 62% / 0.1) 0%, transparent 70%)" }} />
        <motion.div animate={{ x:[0,20,0], y:[0,-25,0] }} transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(200 100% 60% / 0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I use to bring products to life."
        />
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category}>
                <h4 className="text-sm font-bold tracking-widest uppercase text-muted-foreground dark:text-slate-500 mb-4">
                  {category}
                </h4>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {items.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={item}
                      whileHover={{ 
                        y: -5,
                        scale: 1.06,
                        boxShadow: "0 10px 30px -8px hsl(262 83% 62% / 0.3)"
                      }}
                      whileTap={{ scale: 0.93 }}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground shadow-sm hover:border-accent/60 hover:bg-accent/5 cursor-pointer transition-all"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          
          <div>
            <motion.div 
              whileHover={{ y: -6, boxShadow: "0 20px 60px -15px hsl(262 83% 62% / 0.2)" }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/40 shadow-sm h-full transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 text-amber-500 flex items-center justify-center mb-6">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                  <Award className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold font-display text-primary dark:text-slate-50 mb-6">
                Honors & Awards
              </h3>
              <ul className="space-y-4">
                {awards.map((award, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground dark:text-slate-400">{award}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
