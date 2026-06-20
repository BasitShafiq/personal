import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Code2, Server, Smartphone, Database, Award, MapPin } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Frontend", desc: "Angular, React, Ionic, Flutter" },
  { icon: Server, label: "Backend", desc: "Spring Boot, Node.js, Flask" },
  { icon: Database, label: "Database", desc: "PostgreSQL, MongoDB, Redis" },
  { icon: Smartphone, label: "Mobile", desc: "Flutter, Ionic, Android" },
];

const facts = [
  { emoji: "🎓", text: "BSE from PUCIT — CGPA 3.56/4.0" },
  { emoji: "🏆", text: "Runner-Up at PUCon App Hackathon" },
  { emoji: "📍", text: "Based in Lahore, Pakistan" },
  { emoji: "🚀", text: "Currently at i2c Inc. building fintech solutions" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, hsl(262 83% 62% / 0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Photo + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10 relative">
                <div className="w-full h-full bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm text-muted-foreground font-medium">Basit Shafiq</div>
                    <div className="text-xs text-accent mt-1">Full Stack Dev</div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-500 text-lg">●</span>
                  <div>
                    <div className="text-xs font-bold text-foreground">Available Now</div>
                    <div className="text-[10px] text-muted-foreground">Open to offers</div>
                  </div>
                </div>
              </motion.div>
              {/* Corner glow */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 blur-xl -z-10" />
            </div>

            {/* Quick facts */}
            <div className="space-y-3 w-full max-w-sm">
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-accent/40 transition-colors"
                >
                  <span className="text-xl">{fact.emoji}</span>
                  <span className="text-sm text-foreground/80">{fact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + expertise grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", delay: 0.1 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-xs font-semibold text-accent mb-5 tracking-wider uppercase">
              About Me
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold font-display leading-tight text-foreground mb-6">
              Turning complex{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                ideas
              </span>{" "}
              into real products
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm a Software Engineer at <span className="text-foreground font-medium">i2c Inc.</span>, a global fintech company, where I build compliance features for payment platforms using Java, Spring Boot, and Android. Before that I delivered full-stack web and mobile apps across startups in Lahore.
              </p>
              <p>
                I graduated with a <span className="text-foreground font-medium">3.56 GPA</span> from PUCIT, won a hackathon runner-up prize, and shipped 7+ products ranging from e-commerce apps to browser extensions serving real daily users. I move fast, write clean code, and care deeply about the end user experience.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 30px -8px hsl(262 83% 62% / 0.2)" }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-sm font-bold text-foreground mb-0.5">{label}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
