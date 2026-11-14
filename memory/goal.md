# Goal actif

**Statut** : atteint (14/11/2026), non commité

## Objectif
Appliquer les corrections de `memory/audit-seo-geo.md` + recherche GEO via Chrome.

## Critère de fin
1. Recherche GEO (Google, IA, Maps, annuaires) consignée dans `memory/audit-geo-navigateur.md`.
2. Tous les points corrigeables de l'audit appliqués (hors : prix, vraies photos, GBP/citations = actions humaines listées).
3. `npx tsc --noEmit` + `npm run build` verts ; revue indépendante OK.

## Périmètre
Autorisé : `app/`, `lib/`, `components/` (liens), `public/llms.txt`, `memory/`. Interdit : commit/push, `wedding-bg.mp4`, palette, polices, Opus, inventer des chiffres/prix/avis, actions GSC d'écriture.

## Budget
5 itérations, checkpoint à la 3 (Brahim a demandé zéro question : checkpoint = rapport, pas d'arrêt).

## Vérificateur
tsc + build + sous-agent `qa-engineer`/`code-review`.

## Journal
(vide)
1. (14/11) Recherche Chrome faite → `memory/audit-geo-navigateur.md`. Agent A (layout/sitemap/social) terminé ; agents B (pages villes) et C (page formation + footer) en cours. tsc KO provisoire sur pages Casablanca/Rabat (agent B en cours). À faire ensuite : 41→44 avis partout, page formation → s'appuyer sur Global Beauty Academy, llms.txt, tsc + build, revue QA.
2. Corrections appliquées (agents A/B/C Sonnet), 41→44 avis partout (app, lib, llms.txt, CLAUDE.md), tsc OK, build OK. Revue QA : lang footer Marrakech corrigé, phrase « frais selon distance » retirée de la FAQ Rabat. Restent à valider par Brahim : lien Facebook (code = tymamakeupartist, CLAUDE.md = beautytyma), « propriétaire de Global Beauty Academy » (source : bio Instagram + fiche Google), alias « Tyma Beauty » conservé.

## Résultat
Critère atteint. Non fait (action humaine ou donnée manquante) : vraies photos (Unsplash), citations externes, soumission sitemap GSC, test ChatGPT/Gemini.
