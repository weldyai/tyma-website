# TinaCMS — Expertise Agence Tyma

## Pourquoi TinaCMS sur ce projet
- Sanity rejeté : pas visuel, pas intuitif pour Tyma (non-dev)
- TinaCMS = édition click-to-edit directement sur le site live
- Contenu en JSON dans le repo Git, pas de DB externe
- Gratuit pour 1 user (Tina Cloud free tier)
- Images via Cloudinary (intégré nativement)

## Installation

```bash
npm install tinacms
npx @tinacms/cli@latest init
```

Génère : `tina/config.ts`, `tina/__generated__/`, modifie `app/layout.tsx`

## Structure fichiers

```
tina/
  config.ts          # collections + media config
  __generated__/     # types auto-générés (ne pas éditer)
content/
  gallery/           # JSON par item galerie
  testimonials/      # JSON par témoignage
  services/          # JSON par prestation
  config/
    site.json        # WhatsApp, réseaux sociaux
```

## config.ts minimal pour Tyma

```ts
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH ?? "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      mediaRoot: "public/uploads",
      publicFolder: "public",
    },
    // OU Cloudinary :
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
  },
  build: { outputFolder: "admin", publicFolder: "public" },
  schema: {
    collections: [
      // Galerie
      {
        name: "gallery",
        label: "Galerie",
        path: "content/gallery",
        format: "json",
        fields: [
          { type: "string", name: "label", label: "Titre", required: true },
          { type: "string", name: "sub", label: "Sous-titre" },
          { type: "image", name: "image", label: "Photo" },
          { type: "boolean", name: "tall", label: "Format portrait (tall)" },
          { type: "number", name: "order", label: "Ordre d'affichage" },
        ],
      },
      // Témoignages
      {
        name: "testimonial",
        label: "Témoignages",
        path: "content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "name", label: "Prénom", required: true },
          { type: "string", name: "role", label: "Type (ex: Mariée 2025)" },
          { type: "string", name: "body", label: "Témoignage", ui: { component: "textarea" } },
          { type: "number", name: "stars", label: "Note /5" },
        ],
      },
      // Services
      {
        name: "service",
        label: "Prestations",
        path: "content/services",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "price", label: "Prix (ex: À partir de 800 DH)" },
          { type: "number", name: "order", label: "Ordre" },
        ],
      },
      // Config site
      {
        name: "siteConfig",
        label: "Config Site",
        path: "content/config",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        match: { include: "site" },
        fields: [
          { type: "string", name: "whatsapp", label: "Numéro WhatsApp" },
          { type: "string", name: "instagram", label: "URL Instagram" },
          { type: "string", name: "facebook", label: "URL Facebook" },
          { type: "string", name: "tiktok", label: "URL TikTok" },
          { type: "string", name: "youtube", label: "URL YouTube" },
        ],
      },
    ],
  },
});
```

## Lire le contenu Tina dans page.tsx (Server Component)

```ts
import { client } from "@/tina/__generated__/client";

// Galerie
const galleryRes = await client.queries.galleryConnection();
const items = galleryRes.data.galleryConnection.edges?.map(e => e?.node) ?? [];

// Témoignages
const testiRes = await client.queries.testimonialConnection();
const testimonials = testiRes.data.testimonialConnection.edges?.map(e => e?.node) ?? [];
```

## Édition visuelle (page.tsx client wrapper)

```tsx
// app/page.tsx reste "use client" si on veut l'édition visuelle inline
// Sinon : lire les JSON directement avec fs (plus simple, pas d'édition visuelle in-page)
import { readFileSync } from "fs";
import { join } from "path";
import glob from "fast-glob";

export async function getGallery() {
  const files = await glob("content/gallery/*.json");
  return files.map(f => JSON.parse(readFileSync(f, "utf-8")))
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
```

## Route admin

- Local : `http://localhost:3000/admin` (via `next dev`)
- Production : `https://tyma.ma/admin` (protégé par Tina Cloud auth)
- Build : `tinacms build` génère les assets admin dans `public/admin/`

## Variables d'environnement

```
TINA_PUBLIC_CLIENT_ID=xxx   # depuis app.tina.io → projet → Overview
TINA_TOKEN=xxx              # depuis app.tina.io → projet → Tokens
```

## Pièges à éviter

- Ne pas committer `tina/__generated__/` dans `.gitignore` — ces fichiers sont nécessaires au build
- `content/` doit être commité (c'est la "DB")
- En local sans Tina Cloud : `npx tinacms dev` pour l'admin (pas `next dev` seul)
- Images Cloudinary : installer `next-tinacms-cloudinary` + env `CLOUDINARY_*`

## Workflow Tyma (non-dev)

1. Aller sur `tyma.ma/admin`
2. Se connecter (email Tina Cloud)
3. Cliquer "Galerie" → "Ajouter" → uploader photo → sauvegarder
4. Le commit Git se fait automatiquement via Tina Cloud
5. Vercel détecte le commit → redéploie (2-3 min)

## Migration depuis Sanity

Fichiers à supprimer :
- `app/studio/` (tout le dossier)
- `schemas/` (tout le dossier)
- `lib/sanity/`
- `sanity.config.ts`
- `app/api/revalidate/route.ts`
- Imports sanity dans `page.tsx`

Packages à désinstaller :
```bash
npm uninstall @sanity/client @sanity/image-url next-sanity sanity
```
