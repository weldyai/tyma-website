# SEO / GEO Patterns — Expertise Accumulée

## 2026-04-23 — Tyma Makeup Artist

### Pattern : Schema LocalBusiness pour beauté/service local
**Pattern :**
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Tyma Makeup Artist",
  "telephone": "+212694863646",
  "url": "https://tyma-makeup.ma",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Casablanca",
    "addressCountry": "MA"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "30"
  }
}
```
**Règle :** Pour tout artisan/prestataire local au Maroc → `BeautySalon` ou `LocalBusiness` avec `aggregateRating` si avis Google disponibles.

---

### Pattern : Metadata Next.js complète (App Router)
```tsx
export const metadata: Metadata = {
  title: { template: '%s | Tyma Makeup Artist', default: 'Tyma Makeup Artist — Maquilleuse Maroc' },
  description: '...', // max 160 chars, contient le mot-clé principal
  keywords: [...],
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_MA',
    type: 'website',
  },
  alternates: { canonical: 'https://tyma-makeup.ma' },
  robots: { index: true, follow: true },
}
```

---

### Pattern GEO : FAQ structurée pour les LLMs
**Contexte :** ChatGPT/Perplexity/Gemini lisent les FAQ pour construire leurs réponses. Une FAQ bien structurée = plus de chances d'apparaître dans les réponses IA.
**Pattern :**
```html
<section itemScope itemType="https://schema.org/FAQPage">
  <div itemScope itemType="https://schema.org/Question">
    <h3 itemProp="name">Où exerce Tyma Makeup Artist ?</h3>
    <div itemScope itemType="https://schema.org/Answer">
      <p itemProp="text">Tyma exerce à Casablanca et dans tout le Maroc...</p>
    </div>
  </div>
</section>
```
**Règle :** Ajouter une section FAQ sur toute landing page service local. Minimum 5 questions couvrant : localisation, tarif, spécialités, expérience, contact.

---

### Pattern : Cohérence NAP (Name, Address, Phone)
**Règle critique :** Le NAP doit être IDENTIQUE sur tous les points de présence :
- Site web (footer + contact)
- Google Business Profile
- Instagram bio
- Facebook "À propos"
- Annuaires locaux

Même format téléphone (`+212 6 94 86 36 46`), même nom (`Tyma Makeup Artist`).
Toute incohérence pénalise le local SEO.
