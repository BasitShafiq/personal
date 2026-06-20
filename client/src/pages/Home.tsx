import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative selection:bg-accent/30 selection:text-primary">
      <MouseSpotlight />
      {/* Scroll Progress Bar — violet-to-cyan gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] transform origin-left z-[100]"
        style={{ 
          scaleX,
          background: "linear-gradient(90deg, #7c3aed, #a855f7, #06b6d4)"
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
