"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { NumberTicker }          from "@/components/magicui/number-ticker";
import { AnimatedGradientText }  from "@/components/magicui/animated-gradient-text";
import { SparklesText }          from "@/components/magicui/sparkles-text";
import { SocialIcon }            from "@/lib/social-icons";
import {
  WHATSAPP, PHONE_TEL, INSTAGRAM, FACEBOOK, TIKTOK, YOUTUBE,
  GOOGLE_MAPS, GOOGLE_REVIEWS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, getFooterNetworks, getReelsNetworks,
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
  { label: "FAQ",         href: "#faq" },
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

const FAQ_ITEMS = [
  {
    q: "Combien de temps dure une séance maquillage mariage ?",
    qd: "شحال كتاخد الجلسة ديال المكياج ديال العرس ؟",
    a: "Une séance mariée dure entre 2h30 et 3h30 selon la complexité du look et les essais réalisés en amont. Un essai préalable est recommandé pour affiner le résultat final.",
    ad: "الجلسة ديال العروسة كتاخد بين 2h30 و 3h30 حسب التعقيد ديال اللوك والتجربات اللي دارتيها من قبل. كنوصي بتجربة قبلية باش نوصلو للنتيجة المثالية.",
  },
  {
    q: "Proposez-vous le déplacement à domicile ?",
    qd: "كاتجيو للدار ؟",
    a: "Oui, je me déplace à domicile ou sur le lieu de l'événement à Casablanca et ses environs. Des frais de déplacement peuvent s'appliquer selon la distance.",
    ad: "إيه، كنجي للدار ولا للمكان ديال الحفلة فكازا وضواحيها. ممكن يكون فيه تكاليف التنقل حسب البعد.",
  },
  {
    q: "Faut-il réserver à l'avance pour un mariage ?",
    qd: "خاص نحجز من قبل للعرس ؟",
    a: "Absolument. Les dates de mariage se réservent plusieurs mois à l'avance, parfois jusqu'à un an. Je vous conseille de me contacter dès que votre date est fixée.",
    ad: "حتما. التواريخ ديال الأعراس كتتحجز بزاف بكري، ممكن يوصل لعام. كنصحك تتواصلي معايا من حين ما تعرفي التاريخ.",
  },
  {
    q: "Les produits utilisés sont-ils adaptés aux peaux sensibles ?",
    qd: "المنتجات اللي كتخدمي بيها مناسبة للبشرة الحساسة ؟",
    a: "Oui, j'utilise exclusivement des marques professionnelles hypoallergéniques. Je réalise systématiquement un test cutané lors de l'essai pour éviter toute réaction.",
    ad: "إيه، كنخدم غير بماركات محترفة هيبوالرجينيك. كندير دايما تيست على الجلد وقت التجربة باش نتفاداو أي رد فعل.",
  },
  {
    q: "Proposez-vous des formations pour débutantes ?",
    qd: "عندك تكوينات للمبتدئات ؟",
    a: "Oui, je propose des formations individuelles et en groupe pour tous niveaux, du maquillage quotidien aux techniques professionnelles avancées.",
    ad: "إيه، عندي تكوينات فردية وجماعية لجميع المستويات، من مكياج اليومي حتى التقنيات المحترفة.",
  },
  {
    q: "Comment se déroule l'essai mariage ?",
    qd: "كيفاش كيكون التيست ديال العرس ؟",
    a: "L'essai se déroule dans mon studio ou à domicile. Durée : 2h environ. Nous testons le look complet, prenons des photos sous différentes lumières et ajustons selon vos retours.",
    ad: "التيست كيكون فستوديو ديالي ولا فدارك. المدة: حوالي ساعتين. كنجربو اللوك كامل، كناخدو صور فضوء مختلفة وكنعدلو حسب رأيك.",
  },
  {
    q: "Quelle est la durée de tenue du maquillage ?",
    qd: "شحال كيبقى المكياج ؟",
    a: "Avec les produits fixateurs professionnels que j'utilise, le maquillage tient entre 12h et 16h selon les conditions. Idéal pour les longues journées de mariage.",
    ad: "بالمنتجات الثابتة المحترفة اللي كنخدم بيها، المكياج كيبقى بين 12 و 16 ساعة حسب الظروف. مثالي لنهار العرس الطويل.",
  },
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

function Stars({ n = 5, color = "#9B7B6A", size = "w-4 h-4" }: { n?: number; color?: string; size?: string }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={color} className={size}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleBadge({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <a
      href={GOOGLE_REVIEWS}
      target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      style={{
        padding: "10px 16px",
        background: isDark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.95)",
        border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.08)",
        boxShadow: isDark ? "none" : "0 2px 12px rgba(0,0,0,0.08)",
        textDecoration: "none",
        backdropFilter: isDark ? "blur(12px)" : "none",
      }}
    >
      {/* Logo Google officiel */}
      <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      {/* Séparateur */}
      <div style={{ width: 1, height: 28, background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)", flexShrink: 0 }} />
      {/* Note */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <Stars n={5} color="#FBBC04" size="w-3.5 h-3.5" />
          <span className="text-sm font-bold tabular-nums" style={{ color: isDark ? "rgba(255,255,255,0.92)" : "#1a1a1a", fontFamily: "var(--font-body)", lineHeight: 1 }}>
            {GOOGLE_RATING.toFixed(1).replace(".", ",")}
          </span>
        </div>
        <span className="text-xs" style={{ color: isDark ? "rgba(255,255,255,0.45)" : "#666", fontFamily: "var(--font-body)", lineHeight: 1 }}>
          {GOOGLE_REVIEW_COUNT} avis Google
        </span>
      </div>
    </a>
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
          {NAV_LINKS.map((l, i) => (
            <React.Fragment key={l.href}>
              {i > 0 && <div style={{ height: "1px", background: "rgba(192,150,80,0.18)" }} />}
              <a
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--t0)", fontWeight: 400, letterSpacing: "0.02em" }}
              >
                {l.label}
              </a>
            </React.Fragment>
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
          position: "relative",
          width: w,
          height: h,
          borderRadius: `${w / 2}px ${w / 2}px 18px 18px`,
          overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(192,150,80,0.35), 0 32px 80px rgba(12,10,7,0.55)",
          flexShrink: 0,
        }}
      >
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
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    // iOS Safari n'autorise l'autoplay que si l'attribut muted est posé sur le DOM, pas juste la prop React
    for (const v of [desktopVideoRef.current, mobileVideoRef.current]) {
      if (!v) continue;
      v.muted = true;
      v.setAttribute("muted", "");
      v.play().catch(() => {});
    }
  }, []);

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
          ref={desktopVideoRef}
          autoPlay muted loop playsInline preload="auto"
          poster="/wedding-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          style={{ y: videoY, filter: "saturate(0.75) brightness(0.75)", scale: 1.08 }}
        >
          <source src="/wedding-bg.mp4" type='video/mp4; codecs="vp09.00.10.08"' />
          <source src="/wedding-bg-h264.mp4" type='video/mp4; codecs="avc1.640028"' />
        </motion.video>
        {/* Mobile : fixe, encodage H.264 léger pour la 4G */}
        <video
          ref={mobileVideoRef}
          autoPlay muted loop playsInline preload="auto"
          poster="/wedding-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          style={{ filter: "saturate(0.7) brightness(0.68)" }}
        >
          <source src="/wedding-bg-mobile.mp4" type='video/mp4; codecs="avc1.640028"' />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(8,5,3,0.52)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 60% 50%, rgba(192,150,80,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-28 md:pt-24 md:pb-16 md:min-h-screen md:flex md:items-center">
        <div className="w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── Colonne texte ── */}
          <div>
            {/* Badge Google */}
            <motion.div {...fadeUp(0)} className="mb-7">
              <GoogleBadge variant="dark" />
            </motion.div>

            {/* Chips credentials */}
            <motion.div {...fadeUp(0.05)} className="flex flex-wrap gap-2 mb-7">
              {[
                { label: "11 ans d'expérience" },
                { label: "500+ mariées" },
                { label: "100+ shootings" },
                { label: "Formation certifiée" },
              ].map((c) => (
                <span key={c.label} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(192,150,80,0.13)", border: "1px solid rgba(192,150,80,0.22)", color: "rgba(234,212,160,0.8)", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
                  {c.label}
                </span>
              ))}
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
   GALERIE MARQUEE — défilement inverse
═══════════════════════════════════════ */
function GalleryPhotoMarquee() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/gallery-images")
      .then((r) => r.json())
      .then((data) => setImages(data.images ?? []))
      .catch(() => setImages([]));
  }, []);

  if (images.length === 0) return null;

  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden py-4" style={{ background: "var(--s0)" }}>
      <div className="marquee-reverse">
        {doubled.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="mx-3 rounded-xl overflow-hidden shrink-0"
            style={{ width: 220, height: 140, boxShadow: "0 8px 24px rgba(12,10,7,0.12)" }}
          >
            <img src={src} alt="Tyma – mariée" className="w-full h-full object-cover" loading="lazy" />
          </div>
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
  useEffect(() => {
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

        {/* Widget Behold — feed Instagram */}
        {/* @ts-expect-error custom element */}
        <behold-widget feed-id="Pif3VuIMu4dr7mXS0XAA" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   REELS & SHORTS
═══════════════════════════════════════ */
type Reel = { id: string; label: string; thumb: string };

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
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
              <div className="type-label mt-0.5" style={{ color: "rgba(234,212,160,0.7)", fontSize: "0.52rem" }}>YouTube Short</div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function ReelsSection() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/youtube-shorts")
      .then((r) => r.json())
      .then((data) => { setReels(data.shorts || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

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

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl animate-pulse" style={{ aspectRatio: "9/16", background: "var(--s2)" }} />
            ))}
          </div>
        ) : reels.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {reels.map((reel, i) => (
              <ReelCard key={reel.id} reel={reel} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm" style={{ color: "var(--t2)" }}>Aucun Short disponible pour le moment.</p>
        )}

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
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Instagram */}
          <motion.div {...fadeUp(0)} className="rounded-2xl p-8 flex flex-col items-center text-center gap-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(210,200,184,0.12)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-9 h-9" style={{ color: "var(--gold-pale)" }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: "var(--s0)", fontFamily: "var(--font-display)" }}>Inspirations quotidiennes</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--s3)" }}>Avant/après, coulisses, conseils beauté — suivez l'univers Tyma.</div>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-gold mt-auto" style={{ background: "var(--s0)", color: "var(--t0)", fontSize: "0.8rem" }}>
              @tymabeauty →
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div {...fadeUp(0.1)} className="rounded-2xl p-8 flex flex-col items-center text-center gap-4" style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)", border: "1px solid rgba(37,211,102,0.25)" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9" style={{ color: "#25D366" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ color: "var(--s0)", fontFamily: "var(--font-display)" }}>Réservez maintenant</div>
              <div className="text-xs leading-relaxed" style={{ color: "var(--s3)" }}>Réponse rapide · Disponibilités · Devis personnalisé</div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold mt-auto" style={{ background: "#25D366", color: "#fff", fontSize: "0.8rem", border: "none" }}>
              Écrire sur WhatsApp →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FAQ
═══════════════════════════════════════ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [lang, setLang] = useState<"fr" | "dr">("fr");

  return (
    <section id="faq" className="py-28" style={{ background: "var(--s0)" }}>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <motion.p {...fadeUp(0)} className="type-label mb-3" style={{ color: "var(--gold)" }}>
            Questions fréquentes
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="type-section" style={{ color: "var(--t0)" }}>
            Vous avez une question ?<br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>On a la réponse</span>
          </motion.h2>
          <motion.div {...fadeUp(0.14)} className="inline-flex mt-6 rounded-full p-1" style={{ background: "var(--s2)", border: "1px solid var(--glass-border)" }}>
            <button
              onClick={() => setLang("fr")}
              className="px-4 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer"
              style={{
                background: lang === "fr" ? "var(--gold)" : "transparent",
                color: lang === "fr" ? "var(--t0)" : "var(--t2)",
                fontFamily: "var(--font-body)",
                fontWeight: lang === "fr" ? 600 : 400,
              }}
            >
              Français
            </button>
            <button
              onClick={() => setLang("dr")}
              className="px-4 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer"
              style={{
                background: lang === "dr" ? "var(--gold)" : "transparent",
                color: lang === "dr" ? "var(--t0)" : "var(--t2)",
                fontFamily: "var(--font-body)",
                fontWeight: lang === "dr" ? 600 : 400,
              }}
            >
              الدارجة
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={i} {...fadeUp(0.05 * i)}>
              <button
                className="w-full text-left flex items-start justify-between gap-4 p-5 rounded-2xl transition-all duration-200 cursor-pointer"
                style={{
                  background: open === i ? "var(--s1)" : "var(--s2)",
                  border: `1px solid ${open === i ? "rgba(192,150,80,0.35)" : "var(--glass-border)"}`,
                }}
                onClick={() => setOpen(open === i ? null : i)}
                dir={lang === "dr" ? "rtl" : "ltr"}
              >
                <span className="text-sm font-semibold leading-snug" style={{ color: "var(--t0)", fontFamily: "var(--font-body)" }}>
                  {lang === "fr" ? item.q : item.qd}
                </span>
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                  className="shrink-0 transition-transform duration-200"
                  style={{ width: 18, height: 18, color: "var(--gold)", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div
                  className="px-5 pb-5 pt-3 text-sm leading-relaxed rounded-b-2xl -mt-2"
                  style={{ background: "var(--s1)", color: "var(--t1)", fontFamily: "var(--font-body)", borderLeft: "1px solid rgba(192,150,80,0.35)", borderRight: "1px solid rgba(192,150,80,0.35)", borderBottom: "1px solid rgba(192,150,80,0.35)" }}
                  dir={lang === "dr" ? "rtl" : "ltr"}
                >
                  {lang === "fr" ? item.a : item.ad}
                </div>
              )}
            </motion.div>
          ))}
        </div>
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
          <motion.div {...fadeUp(0.14)} className="flex justify-center mt-6">
            <GoogleBadge variant="light" />
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
                      Tyma Beauty Makeup Artist · Casablanca, Maroc
                    </a>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                      {/* Google Maps */}
                      <a
                        href={GOOGLE_MAPS}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 cursor-pointer rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          flex: 1,
                          minHeight: "56px",
                          padding: "12px 18px",
                          background: "linear-gradient(135deg, #ffffff 0%, #f8f4ee 100%)",
                          border: "1px solid rgba(192,150,80,0.25)",
                          boxShadow: "0 4px 16px rgba(12,10,7,0.10), 0 1px 4px rgba(192,150,80,0.12)",
                          textDecoration: "none",
                        }}
                      >
                        {/* Logo Google Maps officiel */}
                        <svg viewBox="0 0 192 192" className="shrink-0" style={{ width: 28, height: 28 }} xmlns="http://www.w3.org/2000/svg">
                          <path fill="#4285F4" d="M96 20C63.1 20 36 47.1 36 80c0 44 60 92 60 92s60-48 60-92c0-32.9-27.1-60-60-60z"/>
                          <path fill="#EA4335" d="M96 20c-20 0-37.5 9.8-48.1 24.8L96 80l48.1-35.2C133.5 29.8 116 20 96 20z"/>
                          <path fill="#FBBC04" d="M47.9 44.8C40.3 55 36 67.5 36 80l60-0.3-48.1-34.9z"/>
                          <path fill="#34A853" d="M144.1 44.8L96 79.7 156 80c0-12.5-4.3-25-11.9-35.2z"/>
                          <circle fill="#ffffff" cx="96" cy="80" r="24"/>
                          <circle fill="#4285F4" cx="96" cy="80" r="16"/>
                        </svg>
                        <div style={{ lineHeight: 1.2 }}>
                          <div style={{ fontSize: "0.6rem", color: "#888", fontFamily: "var(--font-body)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Ouvrir dans</div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--t0)", fontFamily: "var(--font-body)" }}>Google Maps</div>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="ml-auto shrink-0" style={{ width: 16, height: 16, color: "#aaa" }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                      </a>

                      {/* Waze */}
                      <a
                        href="https://waze.com/ul?ll=33.5270151,-7.6495311&navigate=yes"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 cursor-pointer rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          flex: 1,
                          minHeight: "56px",
                          padding: "12px 18px",
                          background: "linear-gradient(135deg, #05C8F7 0%, #00AADB 100%)",
                          border: "1px solid rgba(5,200,247,0.3)",
                          boxShadow: "0 4px 16px rgba(5,200,247,0.25), 0 1px 4px rgba(0,0,0,0.08)",
                          textDecoration: "none",
                        }}
                      >
                        {/* Logo Waze officiel */}
                        <svg viewBox="0 0 56 56" className="shrink-0" style={{ width: 28, height: 28 }} xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="28" cy="30" rx="22" ry="20" fill="#ffffff"/>
                          <path fill="#ffffff" d="M28 8C16.95 8 8 16.95 8 28c0 5.5 2.1 10.5 5.5 14.2L11 48l6.2-2C19.8 47.3 23.8 48 28 48c11.05 0 20-8.95 20-20S39.05 8 28 8z"/>
                          <ellipse cx="22" cy="26" rx="3" ry="3.5" fill="#3D3D3D"/>
                          <ellipse cx="34" cy="26" rx="3" ry="3.5" fill="#3D3D3D"/>
                          <path d="M21 33c1.5 3 10.5 3 12 0" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round" fill="none"/>
                          <circle cx="38" cy="14" r="4" fill="#FF6B6B"/>
                          <circle cx="44" cy="20" r="3" fill="#FFD93D"/>
                        </svg>
                        <div style={{ lineHeight: 1.2 }}>
                          <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Naviguer avec</div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ffffff", fontFamily: "var(--font-body)" }}>Waze</div>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="ml-auto shrink-0" style={{ width: 16, height: 16, color: "rgba(255,255,255,0.7)" }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloc réservation — Liquid Glass dark premium */}
            <div className="relative rounded-3xl overflow-hidden flex flex-col" style={{
              background: "rgba(12,10,7,0.93)",
              border: "1px solid rgba(192,150,80,0.22)",
              boxShadow: "0 24px 64px rgba(12,10,7,0.45), inset 0 1px 0 rgba(192,150,80,0.18)",
            }}>
              {/* Halo décoratif */}
              <div className="absolute top-0 right-0 pointer-events-none" style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(192,150,80,0.15) 0%, transparent 70%)", transform: "translate(35%,-35%)" }} />

              {/* Header */}
              <div className="px-6 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(192,150,80,0.1)" }}>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "var(--gold)" }} />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "var(--gold)" }} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)", fontFamily: "var(--font-body)", letterSpacing: "0.14em" }}>
                    Sur rendez-vous
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: "rgba(253,252,249,0.4)", fontFamily: "var(--font-body)" }}>
                  7j/7 · selon disponibilités
                </p>
              </div>

              {/* CTA */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <p className="text-xs leading-relaxed" style={{ color: "rgba(253,252,249,0.45)", fontFamily: "var(--font-body)" }}>
                  Les dates mariage se réservent{" "}
                  <strong style={{ color: "rgba(234,212,160,0.85)" }}>3 à 6 mois à l'avance</strong>.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl cursor-pointer transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                  style={{
                    minHeight: "54px",
                    background: "linear-gradient(135deg, #1db954 0%, #25D366 100%)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
                    letterSpacing: "0.01em",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Réserver ma date
                </a>
                <p className="text-center text-xs" style={{ color: "rgba(253,252,249,0.22)", fontFamily: "var(--font-body)" }}>
                  Réponse sous 24h · Devis gratuit
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.18)} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--glass-border)", minHeight: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.2!2d-7.6495311!3d33.5270151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d934ceccb57%3A0x9ecfacc13b5519bf!2sTyma%20Beauty%20Makeup%20Artist%20Casablanca!5e0!3m2!1sfr!2sma!4v1"
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
        <GalleryPhotoMarquee />
        <Parcours />
        <Prestations />
        <GuideBeaute />
        <Galerie />
        <ReelsSection />
        <InstagramCTA />
        <FAQ />
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
