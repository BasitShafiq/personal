import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin, Download, Code2, Layers, Zap } from "lucide-react";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { TypingText } from "@/components/ui/TypingText";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { GlitchText } from "@/components/ui/GlitchText";
import { MagneticButton } from "@/components/ui/MagneticButton";

const titleWords = [
  "Full Stack Developer",
  "Java / Spring Boot",
  "Angular + Node.js",
  "Mobile App Developer",
  "Problem Solver",
];

const stats = [
  { value: "3+", label: "Years Experience", icon: Zap },
  { value: "7+", label: "Projects Shipped", icon: Layers },
  { value: "5+", label: "Tech Stacks", icon: Code2 },
];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.3 + i * 0.07, duration: 0.55, ease: "easeOut" },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-background"
    >
      <FloatingParticles count={30} />

      {/* Violet orb — top right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 62% / 0.18) 0%, transparent 70%)", y: bgY }}
      />
      {/* Cyan orb — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(200 100% 60% / 0.12) 0%, transparent 70%)", y: bgY }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <motion.span
                  animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-accent font-semibold">Open to work</span>
              <span className="text-muted-foreground">· Lahore, Pakistan</span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.08] tracking-tight text-foreground mb-3">
              {["I", "Build"].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                custom={3}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              >
                Products
              </motion.span>
              <br />
              <motion.span
                custom={4}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-foreground/90"
              >
                That Scale.
              </motion.span>
            </h1>

            {/* Name + typing */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-muted-foreground text-lg">
                <GlitchText text={personalInfo.name} triggerOnHover />
              </span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-lg font-medium">
                <TypingText words={titleWords} className="text-accent" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <MagneticButton strength={0.4}>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 shimmer text-sm"
                  style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #06b6d4 100%)" }}
                >
                  View My Work
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <motion.a
                  href="/resume.pdf"
                  download="Basit_Shafiq_Resume.pdf"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-accent/40 text-foreground font-semibold hover:bg-accent/10 hover:border-accent/70 transition-all duration-200 text-sm"
                >
                  <Download className="w-4 h-4 text-accent" />
                  Download Resume
                </motion.a>
              </MagneticButton>

              <div className="flex items-center gap-2 pl-1">
                {[
                  { href: personalInfo.github, icon: Github, label: "GitHub", hover: "hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-400" },
                  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", hover: "hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400" },
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", hover: "hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10 hover:text-fuchsia-400" },
                ].map(({ href, icon: Icon, label, hover }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, type: "spring", bounce: 0.6 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 rounded-xl bg-secondary border border-border text-muted-foreground transition-all duration-200 ${hover}`}
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center gap-6 pt-6 border-t border-border/60"
            >
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-display text-foreground leading-none">{value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-8 bg-border ml-4" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Code Window */}
          <div className="hidden lg:flex items-center justify-center pr-6">
            <CodeWindow />
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-sm text-muted-foreground"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-accent/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-accent/70" />
          </motion.div>
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
