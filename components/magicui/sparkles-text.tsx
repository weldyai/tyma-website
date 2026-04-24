"use client";

import { CSSProperties, useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  size: number;
  delay: number;
}

function generateSparkle(): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.floor(Math.random() * 100)}%`,
    y: `${Math.floor(Math.random() * 100)}%`,
    size: Math.floor(Math.random() * 12) + 10,
    delay: Math.random() * 0.6,
  };
}

interface SparklesTextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  sparkleColor?: string;
  density?: number;
}

export function SparklesText({
  children,
  className = "",
  style,
  sparkleColor = "#9B7B6A",
  density = 4,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSparkles(Array.from({ length: density }, generateSparkle));
  }, [density]);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setSparkles((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * prev.length);
        next[idx] = generateSparkle();
        return next;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <span className={`relative inline-block ${className}`} style={style}>
      {mounted && sparkles.map((s) => (
        <motion.span
          key={s.id}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.7, delay: s.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 160 160" fill="none" style={{ display: "block" }}>
            <path
              d="M80 7C80 7 84.2846 37.2987 93.5492 46.5632C102.814 55.8278 133.113 60.1124 133.113 60.1124C133.113 60.1124 102.814 64.397 93.5492 73.6616C84.2846 82.9261 80 113.225 80 113.225C80 113.225 75.7154 82.9261 66.4508 73.6616C57.1862 64.397 26.8875 60.1124 26.8875 60.1124C26.8875 60.1124 57.1862 55.8278 66.4508 46.5632C75.7154 37.2987 80 7 80 7Z"
              fill={sparkleColor}
            />
          </svg>
        </motion.span>
      ))}
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}
