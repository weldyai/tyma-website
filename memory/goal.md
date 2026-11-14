# Goal actif

**Statut** : atteint (14/11/2026), non commité

## Objectif
Solder le reste à faire côté code Tyma après l'audit SEO/GEO.

## Critère de fin
1. Lien Facebook unique et cohérent (code `layout.tsx`/`social-config.ts` = CLAUDE.md = vérifié en ligne).
2. Avatars Unsplash des témoignages (`app/page.tsx:1204`, seule URL Unsplash restante) : remplacés par des initiales/monogrammes (aucune photo réelle fournie) — ou laissés si Brahim refuse.
3. Vérifs techniques vertes : `npx tsc --noEmit`, `npm run build`, `/llms.txt`, `/sitemap.xml`, `/formation-maquillage-casablanca` = 200 en prod.

## Périmètre
Autorisé : `app/page.tsx`, `app/layout.tsx`, `lib/social-config.ts`, `CLAUDE.md`, `memory/`. Interdit : commit/push, `wedding-bg.mp4`, palette, polices, Opus, prix, inventer avis/photos.

## Budget
5 itérations, checkpoint à la 3.

## Vérificateur
tsc + build + curl prod ; `code-review` sur le diff.

## Journal
1. Facebook vérifié via Chrome : `facebook.com/tymamakeupartist/` = page active (20 K followers, post il y a 3 jours, « Formatrice Global Beauty Academy ») ; `beautytyma` = contenu indisponible. Code déjà correct ; CLAUDE.md corrigé. Critère 1 atteint. Reste : avatars Unsplash (2), vérifs tsc/build/prod (3).

2. Avatars témoignages : `img` Unsplash retirés, monogramme initiale (or/`--s1`) dans `app/page.tsx` ; 0 occurrence `unsplash` dans `app/`. tsc OK, build OK, prod : llms.txt / sitemap.xml / formation = 200.

## Résultat
Critère atteint. Non commité (attente accord). Reste hors code : GBP, vraies photos portrait/galerie si besoin, suivi GSC ~5/12.
