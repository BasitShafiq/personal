import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, awards, skillProficiency } from "@/lib/data";
import { SectionHeading } from "../ui/SectionHeading";
import { Award } from "lucide-react";

const categoryColors: Record<string, string> = {
  languages: "from-violet-500 to-purple-600",
  frontend: "from-cyan-500 to-blue-500",
  backend: "from-emerald-500 to-teal-600",
  databases: "from-amber-500 to-orange-500",
  tools: "from-rose-500 to-pink-600",
};

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  tools: "Tools & Cloud",
};

function ProficiencyBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.08 }}
          className="text-xs font-bold tabular-nums"
          style={{ color }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.08,
            ease: [0.34, 1.2, 0.64, 1],
          }}
          className="h-full rounded-full relative overflow-hidden"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
        >
          {/* Shimmer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={inView ? { x: "200%" } : {}}
            transition={{ duration: 1.2, delay: 0.5 + index * 0.08, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0,-30,0], y:[0,20,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(262 83% 62% / 0.08) 0%, transparent 70%)" }} />
        <motion.div animate={{ x:[0,20,0], y:[0,-25,0] }} transition={{ duration:18, repeat:Infinity, ease:"easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, hsl(200 100% 60% / 0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring products to life."
        />

        {/* Top — proficiency chart + awards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-14">

          {/* Proficiency bars */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border h-full"
            >
              <h3 className="text-base font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Core Proficiency
              </h3>
              <div className="space-y-4">
                {skillProficiency.map((s, i) => (
                  <ProficiencyBar key={s.name} {...s} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Awards */}
          <motion.div
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl p-6 border border-border hover:border-accent/40 shadow-sm transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 dark:bg-amber-500/5 text-amber-500 flex items-center justify-center mb-5">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Award className="w-5 h-5" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold font-display text-foreground mb-5">Honors & Awards</h3>
            <ul className="space-y-4">
              {awards.map((award, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{award}</span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative circle */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">Current Role</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">i2c</div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Java / Spring Boot Dev</div>
                  <div className="text-xs text-muted-foreground">July 2024 – Present</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom — skill tag cloud by category */}
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[category]} text-white`}>
                  {categoryLabels[category] ?? category}
                </span>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map(skill => (
                  <motion.div
                    key={skill}
                    variants={item}
                    whileHover={{ y: -4, scale: 1.05, boxShadow: "0 8px 25px -6px hsl(262 83% 62% / 0.25)" }}
                    whileTap={{ scale: 0.93 }}
                    className="px-3.5 py-1.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground shadow-sm hover:border-accent/60 hover:bg-accent/5 cursor-default transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
