"use client";

import { CSSProperties } from "react";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export function BorderBeam({
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#9B7B6A",
  colorTo = "#D4C4BC",
  className = "",
}: BorderBeamProps) {
  return (
    <>
      <style>{`
        @keyframes border-beam {
          0%   { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
      <div
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          overflow: "hidden",
          zIndex: 10,
        }}
      >
        {/* gradient border mask */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            padding: "1.5px",
            background: `linear-gradient(var(--angle, 0deg), ${colorFrom}, ${colorTo}, transparent)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            animation: `spin-angle ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          } as CSSProperties}
        />
      </div>
      <style>{`
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes spin-angle {
          to { --angle: 360deg; }
        }
      `}</style>
    </>
  );
}
