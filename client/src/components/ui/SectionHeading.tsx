import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground relative inline-block">
        {title}
        <motion.span 
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="absolute -bottom-3 left-0 h-1.5 rounded-full"
          style={{ background: "linear-gradient(90deg, #7c3aed, #a855f7, #06b6d4)" }}
        />
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-lg text-muted-foreground dark:text-slate-400 max-w-2xl">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
