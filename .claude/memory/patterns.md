# Patterns — Tyma Project

## Parallax vidéo hero
```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
// motion.video avec y={videoY}
```

## Couleurs adaptatives header
```tsx
color: scrolled ? "var(--t0)" : "var(--s0)"
background: scrolled ? "rgba(glassbg)" : "rgba(hero-sombre)"
```

## Portrait arch premium
```tsx
borderRadius: `${w/2}px ${w/2}px 18px 18px`
```

## Design system
```css
:root {
  --gold: #C09650;
  --s0: #FDFCF9;
  --t0: #0C0A07;
  --glass-bg: rgba(253,252,249,0.88);
  --glass-border: rgba(192,150,80,0.22);
}
```
