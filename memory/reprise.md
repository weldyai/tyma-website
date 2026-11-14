# Reprise — Tyma (SEO/GEO)
Source détaillée : mémoire globale `tyma_seo_geo.md` (~/.claude/projects/-Users-brahimamdouy-code/memory/).

## État (au 14/11)
GA4 ✅, GSC validée ✅ et MCP `mcp-search-console` opérationnel (propriété `https://www.tymamakeupartist.com/`, siteOwner, login `beautytyma@gmail.com`).
Indexation vérifiée ✅ : accueil, /maquillage-mariage-casablanca, /maquillage-mariage-rabat, /wedding-makeup-marrakech, /tarifs = « Submitted and indexed », rich results OK.
`llms.txt` commit + poussé sur main (`c3629e2`, 14/11) ; vérifier qu'il répond sur `/llms.txt` après déploiement Vercel.
Absent des réponses IA (GEO) = écart n°1.

## Bloquants
Aucun.

## Audit SEO/GEO (14/11) ✅
Rapport : `memory/audit-seo-geo.md` (22 constats). Top : GBP/citations externes (GEO), sitemap non soumis dans GSC, fourchettes de prix, page formation, `lang="en"` Marrakech, schema avis auto-déclarés. Aucune correction appliquée : en attente du choix de Brahim.

## Goal en cours (14/11) : appliquer l'audit
Voir `memory/goal.md` (journal) et `memory/audit-geo-navigateur.md`. Fait : layout/sitemap/social (agent A), page `/formation-maquillage-casablanca` + lien footer (C, rattachée à Global Beauty Academy), `llms.txt` enrichi (44 avis). Pages villes faites, 44 avis partout, tsc+build OK, revue QA faite. Reste : validation Brahim puis commit/push. NON commit, NON push (attente accord Brahim). `npm install` refait (node_modules présent).

## Déploiement (14/11)
Commit `69aadc4` poussé ; 1er build Vercel en erreur (téléchargement Google Fonts, transitoire), `vercel redeploy` OK : prod à jour (formation 200, sitemap, llms.txt, 44 avis). Sitemap soumis dans GSC le 14/11 (6 pages découvertes).

## Test IA (14/11) ✅
Google Mode IA, ChatGPT, Gemini : Tyma citée à Casablanca et sur sa marque ; absente à Rabat et Marrakech. Détail : `memory/audit-geo-navigateur.md`.

## Prochaine action / reste à faire (au 14/11/2026)
1. Surveiller dans GSC (dans 2-3 sem., ~5/12) : CTR/position de « makeup artist casablanca », indexation de `/formation-maquillage-casablanca`.
2. Hors code (Brahim) : GBP (URL site, catégories, collecte d'avis, liens croisés avec Global Beauty Academy), re-tester Rabat/Marrakech dans ~1 mois, vraies photos à la place d'Unsplash (skill `update-photos`).
3. À trancher : Facebook (code `tymamakeupartist` vs CLAUDE.md `beautytyma`), alias « Tyma Beauty » (gardé), « propriétaire de Global Beauty Academy » (source : bio Instagram + fiche Google), CMS Sanity vs TinaCMS.
4. Non commités : `CLAUDE.md` (modifs avant session + 44 avis), `memory/`, `.claude/`. Décision : PAS de prix publics (`/tarifs` reste sur devis).
5. Pistes non faites : `next/image`, contenu éditorial/blog mariage, mesure Core Web Vitals (quota PageSpeed), vidéos hero ~14-15 Mo.

## Mémoire du projet (ne pas dupliquer)
- Corrections et patterns : `.claude/memory/corrections.md`, `.claude/memory/patterns.md`.
- Base d'expertise : design, Next.js, SEO/GEO et préférences sont désormais des liens vers la base globale `~/.claude/knowledge/expertise/` ; `tinacms-patterns.md` reste local. Alimentée par `/learn`. 10 agents locaux (`.claude/agents/`) à conserver : ils portent des données Tyma (NAP, schema).

## Points à trancher
- CMS : l'expertise note « Sanity rejeté, TinaCMS retenu » mais `package.json` contient encore `sanity` / `next-sanity` et `.env` les clés Sanity : migration non terminée ou abandonnée ?
- Exemples périmés dans `seo-patterns.md` (URL `tyma-makeup.ma`, note 4,7/30) : la réalité est tymamakeupartist.com, 4,8/41.

## Entretien (26/10)
`node_modules` et `.next` supprimés (1,1 Go → 75 Mo) : `npm install` pour reprendre.
`architecte.md` passé de opus à sonnet (règle : Opus seulement avec l'accord de Brahim).
