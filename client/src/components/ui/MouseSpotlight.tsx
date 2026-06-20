import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseSpotlight() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer soft glow */}
      <motion.div
        className="pointer-events-none fixed z-0 rounded-full mix-blend-screen"
        style={{
          width: 600,
          height: 600,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(262 83% 62% / 0.07) 0%, transparent 70%)",
        }}
      />
      {/* Inner tighter glow */}
      <motion.div
        className="pointer-events-none fixed z-0 rounded-full mix-blend-screen"
        style={{
          width: 200,
          height: 200,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(200 100% 60% / 0.08) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
