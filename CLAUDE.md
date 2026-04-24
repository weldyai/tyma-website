# Tyma Makeup Artist — Site Web

## Context
Landing page premium pour Tyma, maquilleuse professionnelle au Maroc.
Stack : Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion.

## Identity
- Nom du projet : **Tyma Makeup Artist** (jamais "Tyma Beauty")
- Dossier : `/Users/brahimamdouy/code/website/tyma`
- URL locale : http://localhost:3000

## Stack
- Framework : Next.js 15, App Router, TypeScript
- Style : Tailwind CSS + variables CSS dans `app/globals.css`
- Animations : Framer Motion (`motion`, `useScroll`, `useSpring`, `useTransform`)
- Fonts : Raleway (display) + DM Sans (body) via `next/font`

## Fichiers principaux
- `app/layout.tsx` — fonts, metadata, JSON-LD schema
- `app/globals.css` — design system complet (variables, animations, typo)
- `app/page.tsx` — landing complète (~1083 lignes)

## Design system
- Palette : `--gold: #C09650`, `--s0: #FDFCF9`, `--t0: #0C0A07`
- Typo display : Raleway weight 200, clamp(3.5rem, 7vw, 9rem)
- Typo body : DM Sans weight 400
- Un seul CTA visible : bouton WhatsApp flottant

## Rules
- Ne jamais revenir au serif
- Raleway weight 200 pour les headings — jamais weight 400+
- Pas d'uppercase sur la nav
- Ne pas ajouter de CTA redondants — le WA flottant suffit
- Toujours modifier inline styles ET classes CSS en même temps
- `npx tsc --noEmit` après chaque groupe d'edits
- Ne jamais toucher à un fichier hors scope de la tâche

## Contacts réels
- WhatsApp/Tél : +212 6 94 86 36 46
- Instagram : https://www.instagram.com/tymabeauty/
- Facebook : https://web.facebook.com/beautytyma/
- Google Maps : https://maps.app.goo.gl/zGSM3uYb2D1Eqwiq8
- Note Google : 4,7/5 · 30 avis

## Chiffres clés
- 11+ ans d'expérience
- 500+ mariées
- 100+ shooting photos
- 100+ maquilleuses formées

## À faire
- Remplacer la photo Unsplash du portrait (PortraitGlow, ligne ~375)
- Remplacer les photos Unsplash de la galerie
