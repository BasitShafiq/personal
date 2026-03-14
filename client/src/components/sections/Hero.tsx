import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin, Download } from "lucide-react";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { TypingText } from "@/components/ui/TypingText";
import { CodeWindow } from "@/components/ui/CodeWindow";

const titleWords = [
  "Software Engineer",
  "Java Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Problem Solver",
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

  const greetingWords = "Hi, I'm".split(" ");

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden bg-background"
    >
      <FloatingParticles count={30} />

      {/* Violet orb — top right */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, hsl(262 83% 62% / 0.18) 0%, transparent 70%)",
          y: bgY
        }}
      />
      {/* Cyan orb — bottom left */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 -left-32 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 60% / 0.12) 0%, transparent 70%)",
          y: bgY
        }}
      />
      {/* Fuchsia orb — center */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(300 80% 60% / 0.08) 0%, transparent 70%)" }}
      />

      <motion.div
        style={{ y: textY, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-accent font-semibold">Available</span>
            <span className="text-muted-foreground">for new opportunities</span>
          </motion.div>

          {/* Word-by-word heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight text-foreground mb-4">
            {greetingWords.map((word, i) => (
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
              custom={greetingWords.length + 1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </motion.span>
          </h1>

          {/* Typing effect subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-display text-muted-foreground mb-8 h-12"
          >
            <TypingText words={titleWords} className="text-foreground/80" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white shadow-lg transition-all duration-200 shimmer"
              style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #06b6d4 100%)" }}
            >
              View My Work
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-accent/40 text-foreground font-semibold hover:bg-accent/10 hover:border-accent/70 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-accent" />
              Contact Me
            </motion.a>

            {/* Social icons */}
            <div className="flex items-center gap-3 pl-2">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub", hoverClass: "hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-violet-400" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", hoverClass: "hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", hoverClass: "hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10 hover:text-fuchsia-400" },
              ].map(({ href, icon: Icon, label, hoverClass }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, type: "spring", bounce: 0.6 }}
                  whileHover={{ scale: 1.18, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl bg-secondary border border-border text-muted-foreground transition-all duration-200 ${hoverClass}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-12 flex items-center gap-3 text-sm text-muted-foreground"
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

        </div>

        {/* Right column — Code Window */}
        <div className="hidden lg:flex items-center justify-center pr-6">
          <CodeWindow />
        </div>

        </div>
      </motion.div>
    </section>
  );
}
