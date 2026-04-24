---
name: setup-cms
description: Guide de configuration Sanity CMS + API YouTube pour le projet Tyma
---

# Setup CMS — Guide étape par étape

## 1. Créer le projet Sanity (5 min)
1. Aller sur https://sanity.io → Sign up (gratuit)
2. New Project → nom : "Tyma Makeup Artist"
3. Copier le **Project ID** affiché
4. Mettre à jour `.env.local` : `NEXT_PUBLIC_SANITY_PROJECT_ID=ton_id`

## 2. Token API Sanity (pour revalidation)
1. Dans Sanity : Settings → API → Tokens → Add API Token
2. Label : "Tyma Revalidation" → Permissions : Editor
3. Copier le token → `.env.local` : `SANITY_API_TOKEN=ton_token`

## 3. Configurer le CORS Sanity
1. Settings → API → CORS Origins → Add Origin
2. Ajouter `http://localhost:3000` (dev) et ton domaine production

## 4. Premier lancement du Studio
```bash
npm run dev
# Aller sur http://localhost:3000/studio
```
→ Connexion avec le compte Sanity créé à l'étape 1

## 5. YouTube API (optionnel mais recommandé)
1. https://console.cloud.google.com → Créer un projet
2. APIs & Services → Enable APIs → YouTube Data API v3
3. Credentials → Create Credentials → API Key
4. Copier → `.env.local` : `YOUTUBE_API_KEY=ta_cle`
5. Trouver ton Channel ID : youtube.com → Profil → Voir ma chaîne → URL → copier l'ID
6. `.env.local` : `YOUTUBE_CHANNEL_ID=ton_channel_id`
7. Tester : http://localhost:3000/api/social/youtube

## 6. Webhook Sanity → revalidation automatique
1. Sanity → Settings → Webhooks → Create Webhook
2. URL : `https://ton-domaine.com/api/revalidate?secret=tyma-secret-2026`
3. Trigger on : Create, Update, Delete
4. Filtre : tout laisser vide (tous les documents)

## 7. Ajouter le vrai TikTok et YouTube de Tyma
Mettre à jour `lib/social-config.ts` :
- `tiktok.url` → URL TikTok réelle de Tyma
- `youtube.url` → URL YouTube réelle de Tyma
