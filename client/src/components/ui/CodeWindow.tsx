import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CODE_LINES = [
  { tokens: [{ text: "const ", color: "#c792ea" }, { text: "developer", color: "#82aaff" }, { text: " = {", color: "#89ddff" }] },
  { tokens: [{ text: "  name", color: "#f07178" }, { text: ": ", color: "#89ddff" }, { text: '"Basit Shafiq"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: "  role", color: "#f07178" }, { text: ": ", color: "#89ddff" }, { text: '"Software Engineer"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: "  skills", color: "#f07178" }, { text: ": [", color: "#89ddff" }] },
  { tokens: [{ text: '    "Java"', color: "#c3e88d" }, { text: ", ", color: "#89ddff" }, { text: '"Spring Boot"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: '    "React"', color: "#c3e88d" }, { text: ", ", color: "#89ddff" }, { text: '"TypeScript"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: '    "AWS"', color: "#c3e88d" }, { text: ", ", color: "#89ddff" }, { text: '"Firebase"', color: "#c3e88d" }] },
  { tokens: [{ text: "  ]", color: "#89ddff" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: "  experience", color: "#f07178" }, { text: ": ", color: "#89ddff" }, { text: '"3+ years"', color: "#c3e88d" }, { text: ",", color: "#89ddff" }] },
  { tokens: [{ text: "  available", color: "#f07178" }, { text: ": ", color: "#89ddff" }, { text: "true", color: "#f78c6c" }] },
  { tokens: [{ text: "};", color: "#89ddff" }] },
  { tokens: [] },
  { tokens: [{ text: "function ", color: "#c792ea" }, { text: "greet", color: "#82aaff" }, { text: "() {", color: "#89ddff" }] },
  { tokens: [{ text: "  return ", color: "#c792ea" }, { text: "`Hi! I'm ", color: "#c3e88d" }, { text: "${", color: "#f07178" }, { text: "developer.name", color: "#82aaff" }, { text: "}", color: "#f07178" }, { text: " 👋`", color: "#c3e88d" }] },
  { tokens: [{ text: "}", color: "#89ddff" }] },
];

const TOTAL_CHARS = CODE_LINES.reduce((sum, line) => {
  return sum + line.tokens.reduce((s, t) => s + t.text.length, 0);
}, 0);

export function CodeWindow() {
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCharCount((c) => {
        if (c >= TOTAL_CHARS) {
          clearInterval(intervalRef.current!);
          setDone(true);
          return c;
        }
        return c + 2;
      });
    }, 18);
    return () => clearInterval(intervalRef.current!);
  }, []);

  let remaining = charCount;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
      className="relative w-full max-w-lg"
    >
      {/* Glow behind the window */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-2xl blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(262 83% 62% / 0.25) 0%, hsl(200 100% 60% / 0.1) 70%, transparent 100%)" }}
      />

      {/* Window chrome */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: "#0f1117" }}>

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8" style={{ background: "#1a1d27" }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-xs text-white/30 font-mono">developer.ts</span>
          </div>
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
        </div>

        {/* Code area */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[340px]" style={{ background: "#0f1117" }}>
          {CODE_LINES.map((line, lineIdx) => {
            const lineText = line.tokens.map((t) => t.text).join("");
            const lineLen = lineText.length;

            if (remaining <= 0) {
              return <div key={lineIdx} className="h-5" />;
            }

            const charsForLine = Math.min(remaining, lineLen);
            remaining -= charsForLine;

            let tokenRemaining = charsForLine;
            const isCurrentLine = charsForLine < lineLen && charsForLine > 0;
            const isNextLine = charsForLine === 0 && lineIdx > 0;

            return (
              <div key={lineIdx} className="flex items-center min-h-5">
                {/* Line number */}
                <span className="select-none w-6 mr-4 text-right shrink-0" style={{ color: "#3d4060" }}>
                  {lineIdx + 1}
                </span>

                {/* Tokens */}
                <span>
                  {line.tokens.map((token, ti) => {
                    if (tokenRemaining <= 0) return null;
                    const visible = token.text.slice(0, tokenRemaining);
                    tokenRemaining -= visible.length;
                    return (
                      <span key={ti} style={{ color: token.color }}>
                        {visible}
                      </span>
                    );
                  })}
                  {/* Cursor on active line */}
                  {isCurrentLine && !done && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-0.5 h-4 align-middle ml-px"
                      style={{ background: "#a855f7" }}
                    />
                  )}
                </span>
              </div>
            );
          })}

          {/* Final blinking cursor after done */}
          {done && (
            <div className="flex items-center min-h-5">
              <span className="select-none w-6 mr-4 text-right shrink-0" style={{ color: "#3d4060" }}>
                {CODE_LINES.length + 1}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-4 align-middle"
                style={{ background: "#a855f7" }}
              />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-1.5 text-xs font-mono border-t border-white/8" style={{ background: "#1a1d27", color: "#4b5263" }}>
          <span style={{ color: "#c792ea" }}>TypeScript</span>
          <span>UTF-8</span>
          <span style={{ color: "#c3e88d" }}>✓ Ready</span>
        </div>
      </div>

      {/* Floating tech badges */}
      {[
        { label: "Java", color: "#f07178", delay: 0 },
        { label: "React", color: "#82aaff", delay: 0.2 },
        { label: "AWS", color: "#ffcb6b", delay: 0.4 },
        { label: "Spring", color: "#c3e88d", delay: 0.6 },
      ].map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: 1.5 + badge.delay, duration: 0.4 },
            scale: { delay: 1.5 + badge.delay, duration: 0.4, type: "spring", bounce: 0.6 },
            y: { delay: 1.5 + badge.delay, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute text-xs font-bold font-mono px-2.5 py-1 rounded-full border"
          style={{
            color: badge.color,
            borderColor: `${badge.color}50`,
            background: `${badge.color}15`,
            ...(i === 0 && { top: "12%", right: "-14%" }),
            ...(i === 1 && { top: "38%", right: "-18%" }),
            ...(i === 2 && { bottom: "30%", right: "-16%" }),
            ...(i === 3 && { bottom: "10%", right: "-13%" }),
          }}
        >
          {badge.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
