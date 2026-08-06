"use client";

import { useState } from "react";
import { WHATSAPP, PHONE_TEL } from "@/lib/social-config";

export function LandingHeader({ homeLabel = "Accueil" }: { homeLabel?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav py-4">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-3">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--t0)", fontWeight: 300, letterSpacing: "0.05em", lineHeight: 1 }}>
            Tyma
          </span>
          <span style={{ color: "rgba(122,98,68,0.35)", fontSize: "1rem", fontWeight: 200 }}>|</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", color: "var(--t2)", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1 }}>
            Makeup Artist
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          <a href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--t2)", fontWeight: 400, letterSpacing: "0.04em" }}>
            {homeLabel}
          </a>
          <a href="/tarifs" style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--t2)", fontWeight: 400, letterSpacing: "0.04em" }}>
            Tarifs
          </a>
          <a href="/#faq" style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "var(--t2)", fontWeight: 400, letterSpacing: "0.04em" }}>
            FAQ
          </a>
          <a href={PHONE_TEL} className="btn-outline !py-2 !px-4 !text-xs">
            Appeler
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold !py-2 !px-4 !text-xs">
            WhatsApp
          </a>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: "var(--t0)" }} />
            <span className={`block h-px transition-all duration-300 ${open ? "opacity-0" : ""}`} style={{ background: "var(--t0)" }} />
            <span className={`block h-px transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: "var(--t0)" }} />
          </div>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-7 flex flex-col gap-6"
          style={{ background: "rgba(253,252,249,0.97)", backdropFilter: "blur(24px)", borderColor: "var(--glass-border)" }}
        >
          <a href="/" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--t0)", fontWeight: 400 }}>{homeLabel}</a>
          <div style={{ height: "1px", background: "rgba(192,150,80,0.18)" }} />
          <a href="/tarifs" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--t0)", fontWeight: 400 }}>Tarifs</a>
          <div style={{ height: "1px", background: "rgba(192,150,80,0.18)" }} />
          <a href="/#faq" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--t0)", fontWeight: 400 }}>FAQ</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold justify-center">WhatsApp</a>
        </div>
      )}
    </header>
  );
}
