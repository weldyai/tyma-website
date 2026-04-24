---
name: update-photos
description: Remplacer les photos Unsplash par de vraies photos de Tyma dans PortraitGlow et la galerie
---

# Update Photos

## Step 1 : Identifier les photos Unsplash
- grep `unsplash` dans `app/page.tsx` — lister toutes les URLs Unsplash
- noter les lignes exactes

## Step 2 : Portrait
- Localiser `PortraitGlow` (~ligne 375)
- Remplacer l'URL Unsplash par `/public/portrait-tyma.jpg`

## Step 3 : Galerie
- Localiser la section galerie
- Remplacer chaque URL Unsplash par le fichier local correspondant dans `/public/gallery/`

## Step 4 : Vérification
- `npx tsc --noEmit`
- Ouvrir http://localhost:3000 et vérifier visuellement
