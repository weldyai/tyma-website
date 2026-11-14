# Goal actif

**Statut** : atteint (14/11/2026)

## Objectif
Auditer le SEO + GEO de https://www.tymamakeupartist.com/ et lister les améliorations/corrections priorisées (impact/effort).

## Critère de fin
Fichier `memory/audit-seo-geo.md` produit, avec tableau priorisé (impact/effort) couvrant :
on-page, technique, schema JSON-LD, local SEO/NAP, GEO (llms.txt, présence réponses IA), GSC (CTR, positions, cannibalisation, indexation). Chaque constat cite sa preuve (fichier:ligne, URL ou donnée GSC).

## Périmètre
- Autorisé : lecture du code (hors `node_modules/`, `.next/`), fetch des pages publiques, MCP GSC (lecture), écriture de `memory/audit-seo-geo.md` et `memory/goal.md`.
- Interdit : modifier le code du site, commit, push, soumission sitemap/indexation GSC, crédits payants, Opus.

## Budget
5 itérations max, checkpoint à l'itération 3.

## Vérificateur
`code-review` pour les constats côté code ; recoupement des chiffres GSC par seconde requête MCP.

## Journal
1. Collecte code + pages live + GSC 90 j + recherche web ; rapport écrit `memory/audit-seo-geo.md` (22 constats priorisés). Vérif : recoupement GSC par page (clics 94 = 94 ✓, impressions 5 916 vs 5 763, écart 2,6 % expliqué) ; références de lignes code relues (layout.tsx:139, 178, 225-250). Écart restant : CWV non mesurés (quota PageSpeed), test GEO manuel ChatGPT/Perplexity/Gemini.

## Résultat
Critère atteint : rapport priorisé impact/effort couvrant on-page, technique, schema, local/NAP, GEO, GSC. Aucune modification du site. Prochaine action : Brahim choisit les corrections à appliquer.
