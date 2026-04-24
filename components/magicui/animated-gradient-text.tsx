"use client";

import { ReactNode, CSSProperties } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  colorFrom?: string;
  colorVia?: string;
  colorTo?: string;
  duration?: string;
}

export function AnimatedGradientText({
  children,
  className = "",
  colorFrom = "#9B7B6A",
  colorVia = "#D4C4BC",
  colorTo = "#7A5A4A",
  duration = "4s",
}: AnimatedGradientTextProps) {
  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .magic-gradient-text {
          background: linear-gradient(135deg, ${colorFrom}, ${colorVia}, ${colorTo}, ${colorFrom});
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-x ${duration} ease infinite;
        }
      `}</style>
      <span className={`magic-gradient-text ${className}`}>
        {children}
      </span>
    </>
  );
}
