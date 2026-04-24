# Design Patterns — Expertise Accumulée

## 2026-04-23 — Tyma Makeup Artist

### Pattern : Typographie luxury sans-serif
**Pattern :** Raleway weight 200 pour les headings display — jamais 400+
**Contexte :** Weight 200 = signature des marques luxury (Bottega, maisons de couture). Weight 400 fait immédiatement "site générique".
**Règle :** Sur tout projet premium beauté/mode/luxury → Raleway/Cormorant/Playfair weight 200-300 uniquement.

---

### Pattern : Portrait arch premium
**Pattern :** `borderRadius: ${w/2}px ${w/2}px 18px 18px` (arrondi haut, carré bas)
**Contexte :** Format photo le plus utilisé en fashion/beauty 2024-2025. Évoque à la fois le féminin (courbe) et le professionnel (carré).
**Règle :** Pour les portraits de personnes sur landing premium → format arch. Pas de cercle (trop LinkedIn), pas de carré strict (trop générique).

---

### Pattern : Hero vidéo + overlay + parallax
**Pattern :** `motion.video` avec `y: useTransform(scrollYProgress, [0,1], ["0%","25%"])` + overlay `rgba(8,5,3,0.72)` + grain doré radial
**Contexte :** Effet cinématographique sans JS custom. L'overlay sombre force la lisibilité du texte clair. Le parallax donne de la profondeur.
**Règle :** Pour tout hero vidéo sur fond sombre : overlay > 0.65 opacité obligatoire sur mobile, `saturate(0.5)` pour neutraliser les couleurs criardes de la vidéo.

---

### Pattern : Header adaptatif (transparent → glass)
**Pattern :** `color: scrolled ? "var(--t0)" : "var(--s0)"` + backdrop-blur en scrollant
**Contexte :** Le header transparent sur hero sombre est standard luxury. La transition glass en scrollant garde la lisibilité sans casser l'ambiance.
**Règle :** Ne jamais mettre de background opaque sur le header au-dessus d'un hero vidéo sombre. Toujours adaptatif.

---

### Pattern : Palette or/ivoire/brun (beauté premium)
**Pattern :** `--gold: #C09650`, `--s0: #FDFCF9`, `--t0: #0C0A07`
**Contexte :** La palette rose est surexploitée en beauté. L'or/ivoire/brun est plus rare, plus intemporel, plus luxury.
**Règle :** Sur un projet beauté premium → éviter le rose sauf si demande explicite. Or + ivoire = choix premium par défaut.

---

### Erreur évitée : Inline styles qui écrasent le CSS
**Erreur :** Modifier une classe CSS sans vérifier les inline styles → la typo ne change pas.
**Règle :** Avant tout edit typo, toujours : `grep -n "letterSpacing\|fontSize\|fontFamily" app/page.tsx`
