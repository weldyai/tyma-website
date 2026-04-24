"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { NumberTicker }          from "@/components/magicui/number-ticker";
import { AnimatedGradientText }  from "@/components/magicui/animated-gradient-text";
import { SparklesText }          from "@/components/magicui/sparkles-text";
import { SocialIcon }            from "@/lib/social-icons";
import {
  WHATSAPP, PHONE_TEL, INSTAGRAM, FACEBOOK, TIKTOK, YOUTUBE,
  GOOGLE_MAPS, GOOGLE_REVIEWS, getFooterNetworks, getReelsNetworks,
  type SocialNetwork,
} from "@/lib/social-config";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});
const imgBuilder = imageUrlBuilder(sanityClient);
const sanityImg = (source: Record<string, unknown>) =>
  imgBuilder.image(source).width(600).quality(80).auto("format").url();

/* ─── CONSTANTES ─── */
const PHONE_DISPLAY  = "+212 6 94 86 36 46";

const NAV_LINKS = [
  { label: "Parcours",    href: "#parcours" },
  { label: "Prestations", href: "#prestations" },
  { label: "Guide",       href: "#guide" },
  { label: "Galerie",     href: "#galerie" },
  { label: "Avis",        href: "#avis" },
  { label: "Accès",       href: "#acces" },
];

const CREDENTIALS = [
  { icon: "🎓", text: "Diplômée en maquillage professionnel — Institut Supérieur de Beauté, Casablanca" },
  { icon: "✨", text: "Spécialiste mariage & coiffure nuptiale — Formation avancée Paris 2022" },
  { icon: "📸", text: "Maquilleuse attitrée de plusieurs agences photo & productions télévisées au Maroc" },
  { icon: "🌿", text: "Certifiée soins visage & techniques contouring HD — New York Institute of Beauty" },
];

const SERVICES = [
  {
    num: "01",
    icon: "💍",
    title: "Maquillage Mariée",
    tag: "Jour J",
    desc: "Look sur-mesure avec essai inclus. Longue tenue garantie toute la journée. Du fond de teint à la touche finale, chaque détail est pensé pour sublimer votre beauté naturelle.",
  },
  {
    num: "02",
    icon: "📸",
    title: "Shooting Photo & Vidéo",
    tag: "Studio & Extérieur",
    desc: "Maquillage photogénique conçu pour toutes les lumières et tous les objectifs. Rendu impeccable en studio comme en plein air.",
  },
  {
    num: "03",
    icon: "🌟",
    title: "Soirées & Événements",
    tag: "Gala · Cérémonie · Anniversaire",
    desc: "Présence et éclat assurés pour vos grandes occasions. Soirée de gala, cérémonie officielle, fête d'anniversaire de prestige.",
  },
  {
    num: "04",
    icon: "🌸",
    title: "Soins du Visage",
    tag: "Beauté & Bien-être",
    desc: "Rituels de soin personnalisés selon votre type de peau. Éclat immédiat, peau préparée pour recevoir le maquillage ou simplement rayonner au naturel.",
  },
  {
    num: "05",
    icon: "🎨",
    title: "Cours & Formations",
    tag: "Individuel & Groupe",
    desc: "Techniques professionnelles transmises en séance sur-mesure. Apprenez à vous maquiller vous-même ou perfectionnez votre art. Tous niveaux.",
  },
  {
    num: "06",
    icon: "💄",
    title: "Retouches & Urgences",
    tag: "Déplacement possible",
    desc: "Intervention rapide pour retouches de maquillage sur site. Disponible le jour J pour accompagner la mariée et sa suite tout au long de la journée.",
  },
];

const GUIDE_ROWS = [
  { occasion: "Mariage traditionnel",      style: "Oriental nacré · Smoky doré",         prestation: "Maquillage Mariée" },
  { occasion: "Cérémonie moderne",         style: "Naturel glamour · Lumineux HD",        prestation: "Maquillage Mariée" },
  { occasion: "Shooting mode / éditorial", style: "Avant-gardiste · Graphique fort",      prestation: "Shooting Photo" },
  { occasion: "Portrait & lifestyle",      style: "Peau parfaite · Glowy skin",           prestation: "Shooting Photo" },
  { occasion: "Soirée de gala",            style: "Lèvres intenses · Regard magnétique",  prestation: "Soirées & Événements" },
  { occasion: "Anniversaire prestige",     style: "Glam festif · Paillettes subtiles",    prestation: "Soirées & Événements" },
  { occasion: "Peau fatiguée / terne",     style: "Éclat instantané · Teint unifié",      prestation: "Soins du Visage" },
  { occasion: "Débutante maquillage",      style: "Techniques de base personnalisées",    prestation: "Formation individuelle" },
];


const TESTIMONIALS = [
  {
    name: "Sara B.",
    role: "Mariée · Casablanca",
    stars: 5,
    text: "Tyma a transformé mon look le jour de mon mariage. Tous mes invités étaient époustouflés. Le niveau de détail est incomparable.",
    img: "photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Imane K.",
    role: "Modèle · Rabat",
    stars: 5,
    text: "Professionnelle, créative, à l'écoute. Mon shooting était parfait grâce à elle. Elle maîtrise parfaitement comment le maquillage réagit sous les lumières studio.",
    img: "photo-1531746020798-e6953c6e8e04",
  },
  {
    name: "Nadia R.",
    role: "Cliente · Fès",
    stars: 5,
    text: "J'ai pris des cours avec Tyma et j'ai appris en 2 séances ce que je n'avais pas réussi à apprendre seule en des années. Pédagogie exceptionnelle.",
    img: "photo-1544005313-94ddf0286df2",
  },
];

/* ─── HELPERS ─── */
function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  };
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#9B7B6A" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/* ─── HEADER AMBIANCE — bokeh mariage ─── */
const BOKEH = [
  { x: "6%",  y: "50%", s: 48, b: 18, c: "rgba(192,150,80,0.08)",  d: 0,   dur: 14 },
  { x: "18%", y: "70%", s: 28, b: 12, c: "rgba(255,248,220,0.06)", d: 2.2, dur: 17 },
  { x: "32%", y: "20%", s: 60, b: 24, c: "rgba(192,150,80,0.05)",  d: 4.1, dur: 20 },
  { x: "46%", y: "80%", s: 22, b: 10, c: "rgba(255,255,255,0.04)", d: 1.3, dur: 13 },
  { x: "58%", y: "30%", s: 44, b: 19, c: "rgba(234,212,160,0.07)", d: 3.0, dur: 16 },
  { x: "70%", y: "60%", s: 34, b: 15, c: "rgba(192,150,80,0.06)",  d: 5.5, dur: 15 },
  { x: "82%", y: "40%", s: 52, b: 21, c: "rgba(255,248,220,0.05)", d: 2.7, dur: 18 },
  { x: "91%", y: "75%", s: 26, b: 11, c: "rgba(234,212,160,0.06)", d: 0.8, dur: 12 },
  { x: "25%", y: "45%", s: 36, b: 16, c: "rgba(255,255,255,0.03)", d: 6.2, dur: 22 },
  { x: "75%", y: "15%", s: 56, b: 23, c: "rgba(192,150,80,0.04)",  d: 3.8, dur: 19 },
  { x: "50%", y: "85%", s: 20, b:  9, c: "rgba(236,72,153,0.025)", d: 7.1, dur: 24 },
  { x: "40%", y: "55%", s: 42, b: 18, c: "rgba(234,212,160,0.05)", d: 1.9, dur: 21 },
];

function HeaderAmbiance() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {BOKEH.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x, top: p.y,
            width: p.s, height: p.s,
            background: p.c,
            filter: `blur(${p.b}px)`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 7, -5, 2, 0],
            y: [0, -5, 4, -2, 0],
            scale: [1, 1.1, 0.93, 1.05, 1],
            opacity: [0.55, 1, 0.65, 0.9, 0.55],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.d,
          }}
        />
      ))}
    </div>
  );
}

/* ─── SCROLL PROGRESS ─── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

/* ═══════════════════════════════════════
   HEADER
═══════════════════════════════════════ */
function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-sm py-3" : "py-5"
      }`}
    >
      {/* Ambiance bokeh mariage */}
      {!scrolled && <HeaderAmbiance />}

      <div className="relative max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-3">
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: scrolled ? "var(--t0)" : "var(--s0)", fontWeight: 300, letterSpacing: "0.05em", lineHeight: 1, transition: "color 0.4s" }}>
            Tyma
          </span>
          <span style={{ color: scrolled ? "rgba(122,98,68,0.35)" : "rgba(253,252,249,0.22)", fontSize: "1rem", fontWeight: 200, transition: "color 0.4s" }}>|</span>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: scrolled ? "var(--t2)" : "rgba(253,252,249,0.65)", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1, transition: "color 0.4s" }}>
            Makeup Artist
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: scrolled ? "var(--t2)" : "rgba(253,252,249,0.7)", fontWeight: 400, letterSpacing: "0.04em", transition: "color 0.3s" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Burger */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(v => !v)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} style={{ background: scrolled || mobileOpen ? "var(--t0)" : "var(--s0)" }} />
            <span className={`block h-px transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} style={{ background: scrolled || mobileOpen ? "var(--t0)" : "var(--s0)" }} />
            <span className={`block h-px transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} style={{ background: scrolled || mobileOpen ? "var(--t0)" : "var(--s0)" }} />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t px-6 py-7 flex flex-col gap-6"
          style={{
            background: "rgba(253,252,249,0.97)",
            backdropFilter: "blur(24px)",
            borderColor: "var(--glass-border)",
          }}
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--t0)", fontWeight: 400, letterSpacing: "0.02em" }}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════
   PORTRAIT GLOW
═══════════════════════════════════════ */
function PortraitGlow({ size = "lg" }: { size?: "sm" | "lg" }) {
  const w = size === "lg" ? 320 : 260;
  const h = size === "lg" ? 440 : 360;
  return (
    <div className="relative flex justify-center items-center" style={{ width: w, height: h }}>
      {/* Halo or doré */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-18%",
          background: "radial-gradient(circle, rgba(192,150,80,0.28) 0%, transparent 68%)",
          filter: "blur(28px)",
        }}
        animate={{ scale: [1, 1.09, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Anneau rose secondaire */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-10%",
          background: "radial-gradient(circle, rgba(236,72,153,0.13) 0%, transparent 65%)",
          filter: "blur(18px)",
        }}
        animate={{ scale: [1.06, 1, 1.06], opacity: [0.4, 0.85, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Portrait — forme arch organique */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          borderRadius: [
            `${w / 2}px ${w / 2}px 18px 18px`,
            `${w / 2 + 6}px ${w / 2 - 6}px 14px 22px`,
            `${w / 2}px ${w / 2}px 18px 18px`,
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: w,
          height: h,
          borderRadius: `${w / 2}px ${w / 2}px 18px 18px`,
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(192,150,80,0.35), 0 32px 80px rgba(12,10,7,0.55)",
          flexShrink: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=90&auto=format&fit=crop&crop=faces"
          alt="Tyma – Maquilleuse professionnelle"
          className="w-full h-full object-cover object-top"
          fetchPriority="high"
        />
        {/* Reflet doré bas */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "28%", background: "linear-gradient(to top, rgba(192,150,80,0.18), transparent)" }}
        />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "var(--t0)" }}
    >
      {/* ── Vidéo mariage — fond hero ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop : parallax */}
        <motion.video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          style={{ y: videoY, filter: "saturate(0.6) brightness(0.55)", scale: 1.08 }}
        >
          <source src="/wedding-bg.mp4" type="video/mp4" />
        </motion.video>
        {/* Mobile : fixe */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          style={{ filter: "saturate(0.5) brightness(0.45)" }}
        >
          <source src="/wedding-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(8,5,3,0.72)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(192,150,80,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-28 md:pt-24 md:pb-16 md:min-h-screen md:flex md:items-center">
        <div className="w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Colonne texte ── */}
          <div>
            {/* Badge Google */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-7">
              <a
                href="https://share.google/rV2vUc5ApuF8PzcMI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-opacity hover:opacity-80"
                style={{ background: "rgba(192,150,80,0.12)", border: "1px solid rgba(192,150,80,0.28)" }}
              >
                <Stars />
                <span className="text-sm font-semibold" style={{ color: "#EAD4A0" }}>4,7 / 5</span>
                <span className="text-xs" style={{ color: "rgba(234,212,160,0.55)" }}>· 30 avis Google</span>
              </a>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="type-display mb-1" style={{ color: "rgba(253,252,249,0.9)" }}>
              Votre beauté
            </motion.h1>
            <motion.h1 {...fadeUp(0.18)} className="type-hero-italic mb-6">
              <AnimatedGradientText
                colorFrom="#C09650"
                colorVia="#EAD4A0"
                colorTo="#8C6A28"
                duration="5s"
              >
                entre des mains expertes
              </AnimatedGradientText>
            </motion.h1>

            {/* Portrait — mobile uniquement, sous le titre */}
            <motion.div {...fadeUp(0.22)} className="flex flex-col items-center md:hidden mb-8 gap-4">
              <PortraitGlow size="sm" />
              <div className="text-center">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "rgba(253,252,249,0.85)", fontWeight: 200, letterSpacing: "0.18em" }}>Tyma</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "0.55rem", color: "rgba(192,150,80,0.65)", fontWeight: 400, letterSpacing: "0.28em", textTransform: "uppercase" }}>Makeup Artist · Maroc</div>
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.26)} className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: "rgba(202,185,154,0.75)", fontWeight: 300, lineHeight: 1.75 }}>
              Maquilleuse professionnelle spécialisée mariée, shooting et événements.
              Résultats longue tenue, sur-mesure pour chaque visage.
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeUp(0.44)} className="grid grid-cols-2 gap-x-8 gap-y-6 mt-10 pt-8" style={{ borderTop: "1px solid rgba(192,150,80,0.18)" }}>
              {[
                { num: "11+",   label: "ans d'expérience" },
                { num: "500+",  label: "mariées" },
                { num: "100+",  label: "shooting photos" },
                { num: "100+",  label: "maquilleuses formées" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.2rem)", color: "#EAD4A0", fontWeight: 200, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", color: "rgba(202,185,154,0.5)", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.35rem" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne portrait — desktop uniquement ── */}
          <motion.div
            {...fadeUp(0.2)}
            className="hidden md:flex flex-col justify-center items-center gap-7"
          >
            <PortraitGlow size="lg" />
            {/* Nom flottant sous le portrait */}
            <motion.div
              className="text-center"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "rgba(253,252,249,0.88)", fontWeight: 200, letterSpacing: "0.18em" }}>
                Tyma
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", color: "rgba(192,150,80,0.7)", fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                Makeup Artist · Maroc
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0 z-10" />
    </section>
  );
}

/* ═══════════════════════════════════════
   MARQUEE
═══════════════════════════════════════ */
function Marquee() {
  const words = ["Mariée", "Shooting", "Gala", "Formation", "Bien-être", "Sur-mesure", "Longue tenue", "Éclat naturel", "Mariage", "Studio"];
  const doubled = [...words, ...words];
  return (
    <div className="overflow-hidden py-6" style={{ background: "var(--s1)", borderTop: "1px solid var(--glass-border)", borderBottom: "1px solid var(--glass-border)" }}>
      <div className="marquee-inner">
        {doubled.map((w, i) => (
          <span key={i} className="mx-8 whitespace-nowrap" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--t2)" }}>
            {w} <span style={{ color: "var(--gold-pale)", margin: "0 0.5rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   PARCOURS
═══════════════════════════════════════ */
function Parcours() {
  return (
    <section id="parcours" className="py-28" style={{ background: "var(--s0)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <motion.p {...fadeUp(0)} className="type-label mb-4" style={{ color: "var(--gold)" }}>
              Parcours & Formations
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="type-section mb-6" style={{ color: "var(--t0)" }}>
              Une expertise<br />
              <SparklesText sparkleColor="#9B7B6A" density={3} className="type-section" style={{ color: "var(--gold)", fontStyle: "italic" } as React.CSSProperties}>
                construite avec passion
              </SparklesText>
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "var(--t1)" }}>
              Chaque prestation est le résultat d'années de formation, de pratique intense
              et d'un amour sincère pour l'art du maquillage. Mon engagement : révéler la beauté
              unique de chaque cliente.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3 mb-10">
              <a href={PHONE_TEL} className="btn-gold">
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {CREDENTIALS.map((c, i) => (
              <motion.div key={i} {...fadeUp(0.1 + i * 0.08)}>
                <div className="service-card flex items-start gap-4 !p-5 !rounded-2xl">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--t1)" }}>{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="gold-line my-16" />

        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: 11,  suffix: "+", decimalPlaces: 0, label: "Années d'expérience" },
            { value: 500, suffix: "+", decimalPlaces: 0, label: "Mariées sublimées" },
            { value: 100, suffix: "+", decimalPlaces: 0, label: "Shooting photos" },
            { value: 100, suffix: "+", decimalPlaces: 0, label: "Maquilleuses formées" },
          ].map((s, i) => (
            <div key={i} className="stat-card text-center">
              <NumberTicker
                value={s.value}
                suffix={s.suffix}
                decimalPlaces={s.decimalPlaces}
                className="type-num"
                style={{ color: "var(--t0)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", fontWeight: 200 }}
              />
              <div className="type-label mt-2" style={{ color: "var(--t1)", fontSize: "0.6rem" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   PRESTATIONS
═══════════════════════════════════════ */
function Prestations() {
  return (
    <section id="prestations" className="py-28" style={{ background: "var(--s1)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
              Nos Prestations
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
              L'art du maquillage<br />
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>à votre service</span>
            </motion.h2>
          </div>
          <motion.a {...fadeUp(0.12)} href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold whitespace-nowrap self-start sm:self-auto">
            Devis gratuit →
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div key={i} {...fadeUp(0.06 * i)}>
              <div className="service-card h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="type-num" style={{ color: "var(--s3)", fontSize: "2rem" }}>{s.num}</span>
                </div>
                <div className="type-label mb-1.5" style={{ color: "var(--gold)", fontSize: "0.58rem" }}>{s.tag}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--t1)" }}>{s.desc}</p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--glass-border)" }}>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                    className="type-label text-xs transition-colors hover:text-[var(--gold)]"
                    style={{ color: "var(--t1)" }}>
                    Réserver →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   GUIDE BEAUTÉ
═══════════════════════════════════════ */
function GuideBeaute() {
  return (
    <section id="guide" className="py-28" style={{ background: "var(--s0)" }}>
      <div className="max-w-5xl mx-auto px-5">
        <motion.p {...fadeUp(0)} className="type-label mb-3 text-center" style={{ color: "var(--gold)" }}>
          Guide Beauté
        </motion.p>
        <motion.h2 {...fadeUp(0.08)} className="type-section text-center mb-4" style={{ color: "var(--t0)" }}>
          Quel look pour<br />
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>quelle occasion ?</span>
        </motion.h2>
        <motion.p {...fadeUp(0.14)} className="text-sm text-center mb-14 max-w-xl mx-auto" style={{ color: "var(--t1)", lineHeight: 1.8 }}>
          Chaque moment mérite un maquillage qui lui ressemble.
          Retrouvez les associations occasion → style → prestation recommandée.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="overflow-x-auto rounded-2xl" style={{ border: "1px solid var(--glass-border)" }}>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--t0)", color: "var(--s0)" }}>
                <th className="text-left px-6 py-4 type-label" style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}>Occasion</th>
                <th className="text-left px-6 py-4 type-label" style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}>Style recommandé</th>
                <th className="text-left px-6 py-4 type-label" style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}>Prestation</th>
              </tr>
            </thead>
            <tbody>
              {GUIDE_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:bg-[var(--s2)]"
                  style={{ borderTop: "1px solid var(--glass-border)" }}
                >
                  <td className="px-6 py-4 font-medium" style={{ color: "var(--t0)" }}>{row.occasion}</td>
                  <td className="px-6 py-4" style={{ color: "var(--t1)" }}>{row.style}</td>
                  <td className="px-6 py-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "var(--s2)", color: "var(--gold-dim)", border: "1px solid var(--glass-border)" }}
                    >
                      {row.prestation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div {...fadeUp(0.28)} className="text-center mt-10">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Vous ne savez pas lequel choisir ? Demandez conseil →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   GALERIE
═══════════════════════════════════════ */
type SanityGalleryItem = {
  _id: string;
  label: string;
  sub?: string;
  source: "upload" | "external" | "youtube" | "instagram" | "tiktok";
  image?: Record<string, unknown>;
  videoId?: string;
  externalUrl?: string;
  tall?: boolean;
};

function Galerie() {
  const [sanityItems, setSanityItems] = useState<SanityGalleryItem[]>([]);

  useEffect(() => {
    sanityClient
      .fetch<SanityGalleryItem[]>(
        `*[_type == "gallery"] | order(order asc, _createdAt desc) {
          _id, label, sub, source, image, videoId, externalUrl, tall
        }`
      )
      .then(setSanityItems)
      .catch(() => {});

    // Injecter le script Behold une seule fois
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section id="galerie" className="py-28" style={{ background: "var(--s1)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
              Galerie
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
              Réalisations<br />
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>& inspirations</span>
            </motion.h2>
          </div>
          <motion.a {...fadeUp(0.12)} href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-outline whitespace-nowrap self-start sm:self-auto">
            Voir Instagram →
          </motion.a>
        </div>

        {/* Widget Behold — layout contrôlé depuis behold.so */}
        {/* @ts-expect-error custom element */}
        <behold-widget feed-id="Pif3VuIMu4dr7mXS0XAA" />

        {/* Items Sanity (uploads manuels) */}
        {sanityItems.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
            {sanityItems.map((item, i) => (
              <motion.div
                key={item._id}
                {...fadeUp(0.05 * i)}
                className={`gallery-item ${item.tall ? "row-span-2" : ""}`}
                style={{ aspectRatio: item.tall ? "3/4" : "4/3" }}
              >
                {item.source === "upload" && item.image ? (
                  <img src={sanityImg(item.image)} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                ) : item.source === "youtube" && item.videoId ? (
                  <iframe src={`https://www.youtube.com/embed/${item.videoId}?rel=0&modestbranding=1`} title={item.label} allowFullScreen className="w-full h-full" style={{ border: 0 }} />
                ) : item.externalUrl ? (
                  <img src={item.externalUrl} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
                ) : null}
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <div className="text-white font-medium text-sm" style={{ fontFamily: "var(--font-display)" }}>{item.label}</div>
                  {item.sub && <div className="text-white/60 text-xs mt-0.5">{item.sub}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   REELS & SHORTS
═══════════════════════════════════════ */
/* Remplacer les IDs par les vrais IDs YouTube de Tyma */
const REELS = [
  {
    id: "dQw4w9WgXcQ",
    label: "Tuto Mariée",
    sub: "Look Oriental Nacré",
    thumb: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&fit=crop&crop=faces",
  },
  {
    id: "dQw4w9WgXcQ",
    label: "Smoky Eye",
    sub: "Technique Pro",
    thumb: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80&fit=crop&crop=faces",
  },
  {
    id: "dQw4w9WgXcQ",
    label: "Contouring HD",
    sub: "Shooting Mode",
    thumb: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&q=80&fit=crop&crop=top",
  },
  {
    id: "dQw4w9WgXcQ",
    label: "Glam Soirée",
    sub: "Lèvres bordeaux",
    thumb: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=400&q=80&fit=crop&crop=top",
  },
];

function ReelCard({ reel, index }: { reel: typeof REELS[0]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div {...fadeUp(0.07 * index)}>
      <div
        className="relative overflow-hidden rounded-2xl cursor-pointer group"
        style={{ aspectRatio: "9/16", border: "1px solid var(--glass-border)" }}
        onClick={() => setPlaying(true)}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${reel.id}?autoplay=1&rel=0&modestbranding=1`}
            title={reel.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <>
            <img
              src={reel.thumb}
              alt={reel.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,10,7,0.85) 0%, rgba(12,10,7,0.2) 50%, transparent 100%)" }} />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(192,150,80,0.9)", backdropFilter: "blur(8px)" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 translate-x-0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            {/* Label bas */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-sm font-semibold" style={{ color: "white", fontFamily: "var(--font-display)", fontStyle: "italic" }}>{reel.label}</div>
              <div className="type-label mt-0.5" style={{ color: "rgba(234,212,160,0.7)", fontSize: "0.52rem" }}>{reel.sub}</div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function ReelsSection() {
  return (
    <section id="reels" className="py-24" style={{ background: "var(--s0)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
              Reels & Vidéos
            </motion.p>
            <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
              Tutoriels &<br />
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>coulisses beauté</span>
            </motion.h2>
          </div>
          {/* Boutons vers les plateformes vidéo — depuis lib/social-config.ts */}
          <div className="flex flex-wrap gap-3">
            {getReelsNetworks().map((network: SocialNetwork, i) => (
              <motion.a key={network.id} {...fadeUp(0.1 + i * 0.05)}
                href={network.url} target="_blank" rel="noopener noreferrer"
                className="btn-outline whitespace-nowrap self-start sm:self-auto text-sm flex items-center gap-2"
                style={{ padding: "0.65rem 1.25rem", minHeight: "44px" }}>
                <SocialIcon icon={network.icon} className="w-3.5 h-3.5" />
                {network.name} →
              </motion.a>
            ))}
          </div>
        </div>

        {/* Grid 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {REELS.map((reel, i) => (
            <ReelCard key={i} reel={reel} index={i} />
          ))}
        </div>

        {/* CTA bas */}
        <motion.div {...fadeUp(0.24)} className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2">
              <SocialIcon icon="youtube" className="w-4 h-4" />
              YouTube
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              <SocialIcon icon="instagram" className="w-4 h-4" />
              Instagram Reels
            </a>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              <SocialIcon icon="tiktok" className="w-4 h-4" />
              TikTok
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CTA INSTAGRAM
═══════════════════════════════════════ */
function InstagramCTA() {
  return (
    <section className="py-20" style={{ background: "var(--t0)" }}>
      <div className="max-w-4xl mx-auto px-5 text-center">
        <motion.div {...fadeUp(0)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-10 h-10 mx-auto mb-6" style={{ color: "var(--gold-pale)" }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
          </svg>
        </motion.div>
        <motion.h2 {...fadeUp(0.08)} className="type-section mb-4" style={{ color: "var(--s0)" }}>
          Suivez l'univers<br />
          <span style={{ color: "var(--gold-light)", fontStyle: "italic" }}>Tyma Makeup Artist</span>
        </motion.h2>
        <motion.p {...fadeUp(0.14)} className="text-sm leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "var(--s3)" }}>
          Conseils beauté, techniques maquillage, avant/après et coulisses de mes créations.
          Rejoignez ma communauté sur Instagram pour une dose d'inspiration quotidienne.
        </motion.p>
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3 justify-center">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ background: "var(--s0)", color: "var(--t0)" }}>
            @tymabeauty sur Instagram →
          </a>
          <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "rgba(246,243,238,0.3)", color: "var(--s0)" }}>
            Facebook
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   AVIS
═══════════════════════════════════════ */
function Avis() {
  return (
    <section id="avis" className="py-28" style={{ background: "var(--s0)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
            Témoignages
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
            Ce que disent<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>mes clientes</span>
          </motion.h2>
          <motion.div {...fadeUp(0.14)} className="flex items-center justify-center gap-3 mt-6">
            <Stars />
            <span className="text-lg font-bold" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>4,7 / 5</span>
            <span className="text-sm" style={{ color: "var(--t1)" }}>— 30 avis Google vérifiés</span>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} {...fadeUp(0.08 * i)}>
              <div className="testimonial-card h-full p-6 flex flex-col">
                <div className="quote-mark mb-2">"</div>
                <Stars n={t.stars} />
                <p className="text-sm leading-relaxed mt-4 flex-1" style={{ color: "var(--t1)" }}>{t.text}</p>
                <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid var(--glass-border)" }}>
                  <img
                    src={`https://images.unsplash.com/${t.img}?w=60&h=60&q=80&fit=crop&crop=faces`}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--t0)", fontFamily: "var(--font-display)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--t2)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   ACCÈS & CONTACT
═══════════════════════════════════════ */
function Acces() {
  return (
    <section id="acces" className="py-28" style={{ background: "var(--s1)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
            Contact & Accès
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
            Prenez rendez-vous<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>facilement</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-5">
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-5" style={{ color: "var(--t0)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>
                Informations de contact
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--s2)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-4 h-4" style={{ color: "var(--gold)" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="type-label mb-0.5" style={{ color: "var(--t2)", fontSize: "0.58rem" }}>Localisation</div>
                    <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--t0)" }}>
                      Casablanca, Maroc · Déplacement possible
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold mb-4" style={{ color: "var(--t0)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>Disponibilités</h3>
              <div className="flex flex-col gap-3 text-sm">
                {[
                  { j: "Lundi — Vendredi", h: "9h00 – 20h00" },
                  { j: "Samedi",           h: "8h00 – 22h00" },
                  { j: "Dimanche",         h: "Sur rendez-vous" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center pb-3" style={{ borderBottom: i < 2 ? "1px solid var(--glass-border)" : "none" }}>
                    <span style={{ color: "var(--t1)" }}>{r.j}</span>
                    <span className="font-medium" style={{ color: "var(--t0)" }}>{r.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.18)} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--glass-border)", minHeight: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.28!2d-7.589992!3d33.573109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4786b2f8b5%3A0xb0a9e6d58fe94073!2sCasablanca%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Tyma Makeup Artist"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: "var(--t0)", color: "var(--s2)" }}>
      <div className="gold-line" />
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <div className="mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--s0)", fontWeight: 300, letterSpacing: "0.08em" }}>
              Tyma
            </div>
            <div className="type-label" style={{ color: "var(--s3)", fontSize: "0.55rem" }}>
              Maquilleuse professionnelle · Maroc
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="type-label transition-colors hover:text-[var(--gold-pale)]"
                style={{ color: "var(--s3)", fontSize: "0.58rem" }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            {/* Bouton téléphone */}
            <a href={PHONE_TEL} aria-label="Téléphone"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
              style={{ border: "1px solid rgba(210,200,184,0.2)", color: "var(--s3)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 9.19 7.548 16.631 16.632 16.631h2.124a2.25 2.25 0 002.25-2.25v-2.5a2.25 2.25 0 00-1.657-2.165l-2.5-.714a2.25 2.25 0 00-2.416.872l-.454.681a.75.75 0 01-.87.27A13.503 13.503 0 014.93 8.13a.75.75 0 01.27-.87l.681-.454a2.25 2.25 0 00.872-2.416l-.714-2.5A2.25 2.25 0 003.874 0H1.374" />
              </svg>
            </a>
            {/* Réseaux sociaux depuis la config — ajout/suppression dans lib/social-config.ts */}
            {getFooterNetworks().map((network: SocialNetwork) => (
              <a key={network.id} href={network.url} target="_blank" rel="noopener noreferrer" aria-label={network.name}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(210,200,184,0.2)", color: "var(--s3)" }}>
                <SocialIcon icon={network.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="gold-line my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: "var(--s4)" }}>
          <span>© 2026 Tyma Makeup Artist. Tous droits réservés.</span>
          <span>Designé avec soin ✦</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   PAGE
═══════════════════════════════════════ */
export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Parcours />
        <Prestations />
        <GuideBeaute />
        <Galerie />
        <ReelsSection />
        <InstagramCTA />
        <Avis />
        <Acces />
      </main>
      <Footer />

      {/* WhatsApp flottant */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.118 1.528 5.849L.073 23.927l6.235-1.435A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.656-.497-5.19-1.367l-.372-.216-3.7.852.878-3.592-.24-.384A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

    </>
  );
}
