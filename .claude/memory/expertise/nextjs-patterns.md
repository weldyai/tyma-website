# Next.js / Frontend Patterns — Expertise Accumulée

## 2026-04-23 — Tyma Makeup Artist

### Pattern : Math.random() interdit en module scope (SSR)
**Erreur :** `Math.random()` en dehors d'un useEffect → erreur d'hydratation SSR (valeur serveur ≠ client).
**Règle :** Remplacer par `(i * 1.618033988) % 100` ou `((i * 2654435761) % 2**32) / 2**32` → déterministe, pas d'hydration mismatch.

---

### Pattern : Framer Motion imports actifs dans ce projet
**Pattern :**
```tsx
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
```
**Règle :** Ne jamais importer `useInView` sans l'utiliser — import orphelin détecté trop tard.

---

### Pattern : Deux balises video desktop/mobile → une seule
**Erreur :** Créer `<video className="hidden md:block">` + `<video className="block md:hidden">` → deux vidéos en mémoire.
**Règle :** Une seule balise `<motion.video>` avec classes CSS responsive pour les filtres/tailles. Économise la mémoire et simplifie le code.

---

### Pattern : useRef pour le parallax scroll
```tsx
const sectionRef = useRef<HTMLElement>(null)
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end start"]
})
const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
```
**Règle :** Toujours `target: ref` et non la fenêtre globale pour un parallax de section.

---

### Pattern : next/image obligatoire
**Règle :** Jamais de `<img>` brut → toujours `next/image` avec `width`, `height`, `alt`.
- Images above-the-fold → `priority` prop
- Images below-the-fold → `loading="lazy"` (défaut)

---

### Pattern : Server Components par défaut
**Règle :** `'use client'` uniquement si le composant utilise : `useState`, `useEffect`, `useRef`, événements browser, ou hooks Framer Motion.
Tout le reste → Server Component.

---

### Erreur évitée : CSS orphelin après suppression
**Erreur :** Supprimer un composant HTML sans supprimer sa classe CSS → CSS mort dans globals.css.
**Règle :** À chaque suppression, immédiatement grep la classe dans globals.css et la supprimer.
