"use client";
import { motion } from "framer-motion";

/* Pseudo-random but stable (no Math.random — avoids SSR hydration mismatch) */
const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: ((i * 47 + 13) * 16.18) % 100,
  y: ((i * 31 + 7)  * 27.18) % 100,
  size: 1 + (i % 3),
  delay: (i * 0.19) % 4,
  duration: 2.5 + (i * 0.11) % 3,
  color:
    i % 3 === 0
      ? "rgba(236,72,153,0.7)"
      : i % 3 === 1
      ? "rgba(139,92,246,0.65)"
      : "rgba(234,212,160,0.75)",
}));

/* Top-lash coordinates — matches the ellipse cx=0 cy=-15 rx=125 ry=50 */
const LASHES_TOP = [
  { x1: -110, y1: -38, x2: -128, y2: -60 },
  { x1:  -80, y1: -53, x2:  -92, y2: -76 },
  { x1:  -40, y1: -62, x2:  -44, y2: -87 },
  { x1:    0, y1: -65, x2:    0, y2: -92 },
  { x1:   40, y1: -62, x2:   44, y2: -87 },
  { x1:   80, y1: -53, x2:   94, y2: -75 },
  { x1:  110, y1: -38, x2:  128, y2: -57 },
];

const LASHES_BTM = [
  { x1: -70, y1: 26, x2: -72, y2: 38 },
  { x1: -30, y1: 33, x2: -30, y2: 44 },
  { x1:  15, y1: 35, x2:  17, y2: 46 },
  { x1:  55, y1: 30, x2:  57, y2: 41 },
];

const PALETTE = [
  { cx:  90, cy: 590, r: 24, color: "#EC4899" },
  { cx: 145, cy: 568, r: 19, color: "#F472B6" },
  { cx: 195, cy: 558, r: 21, color: "#C084FC" },
  { cx: 245, cy: 562, r: 18, color: "#8B5CF6" },
  { cx: 293, cy: 572, r: 20, color: "#A855F7" },
  { cx: 338, cy: 590, r: 17, color: "#E879F9" },
];

const SPARKLES = [
  { x: 65,  y: 145, s: 11 },
  { x: 435, y: 240, s:  8 },
  { x: 355, y: 120, s: 10 },
  { x: 175, y: 648, s:  9 },
  { x: 462, y: 480, s:  7 },
  { x: 280, y:  80, s:  8 },
];

export default function BeautyAbstractVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#0D0208" }}>

      {/* ── Ambient glow blobs ── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "70%", height: "70%", top: "-5%", left: "-10%",
          background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(139,92,246,0.18) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "55%", height: "55%", bottom: "5%", right: "-5%",
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(236,72,153,0.12) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, -12, 0], y: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "40%", height: "40%", top: "40%", left: "25%",
          background: "radial-gradient(circle, rgba(249,168,212,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── SVG Artwork ── */}
      <svg
        viewBox="0 0 500 700"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bav-gPP" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#EC4899" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="bav-gRP" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F9A8D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="bav-lBrush" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#EC4899" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="bav-lGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#EAD4A0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C09650" stopOpacity="0.35" />
          </linearGradient>
          <filter id="bav-fGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="bav-fSoft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Background brush swipes ── */}
        <motion.path
          d="M 30 260 C 90 210 180 280 210 240 C 240 200 310 160 400 200"
          fill="none" stroke="rgba(236,72,153,0.22)" strokeWidth="55" strokeLinecap="round"
          filter="url(#bav-fSoft)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 100 430 C 180 390 280 450 340 410 C 390 375 440 410 480 395"
          fill="none" stroke="rgba(139,92,246,0.18)" strokeWidth="45" strokeLinecap="round"
          filter="url(#bav-fSoft)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M 350 80 C 400 120 380 180 420 200 C 460 220 470 270 450 310"
          fill="none" stroke="rgba(249,168,212,0.15)" strokeWidth="35" strokeLinecap="round"
          filter="url(#bav-fSoft)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
        />

        {/* ── Abstract eye — center piece ── */}
        <g transform="translate(230, 195)">
          {/* Eyeliner top arc */}
          <motion.path
            d="M -125 -15 C -90 -65 -20 -82 0 -72 C 20 -82 90 -65 125 -15"
            fill="none" stroke="rgba(249,168,212,0.5)" strokeWidth="1" strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          />
          {/* Ellipse outline */}
          <motion.ellipse
            cx="0" cy="-15" rx="125" ry="50"
            fill="none" stroke="url(#bav-lBrush)" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          />
          {/* Iris */}
          <motion.circle cx="0" cy="-15" r="33" fill="url(#bav-gPP)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.88 }}
            transition={{ duration: 0.9, delay: 1.6, ease: "backOut" }}
          />
          {/* Pupil */}
          <motion.circle cx="0" cy="-15" r="15" fill="rgba(8,2,5,0.85)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          />
          {/* Catchlights */}
          <motion.circle cx="8" cy="-22" r="5.5" fill="rgba(253,242,248,0.92)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
          />
          <motion.circle cx="-6" cy="-8" r="2.5" fill="rgba(253,242,248,0.5)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
          />
          {/* Top lashes */}
          {LASHES_TOP.map((l, i) => (
            <motion.line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="rgba(236,72,153,0.75)"
              strokeWidth={i === 3 ? 2 : 1.6}
              strokeLinecap="round"
              filter="url(#bav-fGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 2 + i * 0.06 }}
            />
          ))}
          {/* Bottom lashes — subtle */}
          {LASHES_BTM.map((l, i) => (
            <motion.line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke="rgba(236,72,153,0.4)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.5 + i * 0.08 }}
            />
          ))}
        </g>

        {/* ── Lipstick — right ── */}
        <g transform="translate(390, 360)">
          <motion.rect
            x="-17" y="-75" width="34" height="95" rx="5"
            fill="url(#bav-gPP)" opacity="0.82"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.82 }}
            transition={{ duration: 0.9, delay: 1.4, ease: "backOut" }}
            style={{ transformOrigin: "0px 20px" }}
          />
          <motion.path
            d="M -17 -75 L 17 -75 L 17 -108 L -3 -128 L -17 -108 Z"
            fill="#EC4899" opacity="0.92"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.92 }}
            transition={{ duration: 0.7, delay: 1.7, ease: "backOut" }}
            style={{ transformOrigin: "0px -75px" }}
          />
          <motion.path
            d="M -3 -128 L 9 -116 L 9 -92 L -3 -92 Z"
            fill="rgba(253,242,248,0.38)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.1 }}
          />
          <motion.rect
            x="-10" y="-70" width="4" height="70" rx="2"
            fill="rgba(253,242,248,0.2)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          />
          <motion.rect
            x="-19" y="20" width="38" height="22" rx="4"
            fill="rgba(192,150,80,0.65)"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          />
        </g>

        {/* ── Makeup brush — left ── */}
        <g transform="translate(105, 390) rotate(-25)">
          <motion.rect
            x="-5" y="0" width="10" height="155" rx="5"
            fill="url(#bav-lGold)"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "0px 155px" }}
          />
          <motion.rect
            x="-7.5" y="-18" width="15" height="22" rx="2"
            fill="rgba(192,150,80,0.75)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          />
          <motion.path
            d="M -7.5 -18 C -32 -65 -28 -108 0 -118 C 28 -108 32 -65 7.5 -18 Z"
            fill="url(#bav-gRP)" opacity="0.7"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "backOut" }}
            style={{ transformOrigin: "0px -18px" }}
          />
          {[-4, 0, 4].map((x, i) => (
            <motion.line
              key={i}
              x1={x} y1="-18" x2={x * 2.8} y2="-112"
              stroke="rgba(249,168,212,0.45)" strokeWidth="1.1" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.7, delay: 2 + i * 0.1 }}
            />
          ))}
        </g>

        {/* ── Color palette pigment circles ── */}
        {PALETTE.map((c, i) => (
          <g key={i} filter="url(#bav-fGlow)">
            <motion.circle
              cx={c.cx} cy={c.cy} r={c.r}
              fill={c.color} opacity="0.82"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.82 }}
              transition={{ duration: 0.55, delay: 0.4 + i * 0.14, ease: "backOut" }}
            />
            <motion.circle
              cx={c.cx - c.r * 0.28} cy={c.cy - c.r * 0.32} r={c.r * 0.28}
              fill="rgba(253,242,248,0.32)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.65 + i * 0.14 }}
            />
          </g>
        ))}
        <motion.path
          d="M 60 605 Q 210 625 360 605"
          fill="none" stroke="rgba(192,150,80,0.3)" strokeWidth="1" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* ── Editorial fine lines ── */}
        <motion.path
          d="M 440 110 C 420 165 450 225 430 275 C 415 310 445 350 435 390"
          fill="none" stroke="url(#bav-lGold)" strokeWidth="0.8"
          strokeLinecap="round" strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        <motion.line
          x1="30" y1="480" x2="200" y2="510"
          stroke="rgba(249,168,212,0.22)" strokeWidth="0.8" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* ── Sparkles ── */}
        {SPARKLES.map((sp, i) => (
          <motion.g key={i} transform={`translate(${sp.x}, ${sp.y})`}>
            <motion.path
              d={`M 0 -${sp.s} L 0 ${sp.s} M -${sp.s} 0 L ${sp.s} 0 M -${sp.s * 0.65} -${sp.s * 0.65} L ${sp.s * 0.65} ${sp.s * 0.65} M ${sp.s * 0.65} -${sp.s * 0.65} L -${sp.s * 0.65} ${sp.s * 0.65}`}
              stroke="rgba(234,212,160,0.85)"
              strokeWidth="1.1"
              strokeLinecap="round"
              filter="url(#bav-fGlow)"
              animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.4, 1, 0.4], rotate: [0, 45, 0] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          </motion.g>
        ))}
      </svg>

      {/* ── Floating micro-particles ── */}
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
          }}
          animate={{ y: [0, -24, 0], opacity: [0, 0.85, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
