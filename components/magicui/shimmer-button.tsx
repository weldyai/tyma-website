"use client";

import { CSSProperties, ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  style?: CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className = "",
  shimmerColor = "rgba(255,255,255,0.25)",
  shimmerSize = "0.08em",
  shimmerDuration = "2.5s",
  borderRadius = "9999px",
  background = "linear-gradient(135deg, #22c55e, #15803d)",
  style,
  href,
  target,
  rel,
  onClick,
}: ShimmerButtonProps) {
  const buttonStyle: CSSProperties = {
    "--shimmer-color": shimmerColor,
    "--shimmer-duration": shimmerDuration,
    "--radius": borderRadius,
    "--bg": background,
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6rem",
    padding: "0.9rem 2rem",
    borderRadius,
    background,
    color: "white",
    fontWeight: 600,
    fontSize: "0.95rem",
    whiteSpace: "nowrap" as const,
    cursor: "pointer",
    transition: "transform 0.25s, box-shadow 0.25s",
    minHeight: "50px",
    textDecoration: "none",
    ...style,
  } as CSSProperties;

  const shimmerStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
    backgroundSize: "200% 100%",
    animation: `shimmer-sweep ${shimmerDuration} linear infinite`,
    pointerEvents: "none",
  };

  const inner = (
    <>
      <style>{`
        @keyframes shimmer-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(34,197,94,0.35); }
      `}</style>
      <div style={shimmerStyle} />
      <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "0.6rem" }}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`shimmer-btn ${className}`} style={buttonStyle}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`shimmer-btn ${className}`} style={buttonStyle}>
      {inner}
    </button>
  );
}
