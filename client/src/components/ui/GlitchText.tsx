import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
}

export function GlitchText({ text, className = "", triggerOnHover = false }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const startGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    frameRef.current = 0;
    const totalFrames = 18;

    intervalRef.current = setInterval(() => {
      frameRef.current += 1;
      const progress = frameRef.current / totalFrames;
      const resolved = Math.floor(progress * text.length);

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frameRef.current >= totalFrames) {
        clearInterval(intervalRef.current!);
        setDisplay(text);
        setIsGlitching(false);
      }
    }, 45);
  };

  useEffect(() => {
    if (!triggerOnHover) {
      const timer = setTimeout(startGlitch, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, []);

  if (triggerOnHover) {
    return (
      <span
        className={className}
        onMouseEnter={startGlitch}
        style={{ cursor: "default" }}
      >
        {display}
      </span>
    );
  }

  return <span className={className}>{display}</span>;
}
