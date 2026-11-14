# Audit SEO + GEO — tymamakeupartist.com (14/11/2026)

Sources : code (`app/`, `lib/`), pages live (curl), GSC 90 j (16/08–14/11), recherche web. Audit seul : rien modifié.
Non mesuré : Core Web Vitals (API PageSpeed en quota dépassé) ; présence dans ChatGPT/Perplexity/Gemini (pas d'accès, test manuel à faire).

## Chiffres GSC (90 j)
- Total : 94 clics, 5 763 impressions, CTR 1,63 %, position moy. 6,7. Impressions ×2 sur la période (~40/j → ~85/j).
- Par page : accueil 61 clics / 4 947 imp. ; Rabat 16 / 416 ; tarifs 9 / 228 ; Casablanca 5 / 163 ; Marrakech 3 / 162. (Somme des clics = 94 ✓ ; somme des impressions 5 916 vs 5 763 : écart 2,6 % dû à l'agrégation GSC.)
- Marché : Maroc mobile 61 clics ; France mobile 13 clics (CTR 5,4 %, diaspora) = cible réelle.

## Indexation
- 5/5 pages « Submitted and indexed », rich results OK (breadcrumbs, review snippets).
- ⚠ `get_sitemaps` : **aucun sitemap enregistré dans GSC** pour la propriété, alors que `/sitemap.xml` répond 200 en prod.

## Plan priorisé

| # | Sujet | Constat (preuve) | Action | Impact | Effort |
|---|---|---|---|---|---|
| 1 | GEO — présence web externe | Recherche « Tyma Makeup Artist Casablanca avis » : seul résultat = fiche Airbnb ; le site, Instagram, Maps, avis absents | Fiche Google Business Profile complète + citations (Airbnb, Fresha, annuaires mariage Maroc, Instagram bio → site), même NAP partout | Très fort | Moyen |
| 2 | GSC — sitemap | `get_sitemaps` = vide | Soumettre `https://www.tymamakeupartist.com/sitemap.xml` (action GSC : sur ton accord) | Moyen | Très faible |
| 3 | CTR requête reine | « makeup artist casablanca » : 242 imp., pos 3,4, CTR 2,1 % (attendu ~8-10 %) | Mesurer l'effet du fix title/description du commit b5a77c9 dans 2-3 semaines ; sinon tester variantes | Fort | Faible |
| 4 | ~~Requêtes « prix »~~ ÉCARTÉ (14/11 : Brahim refuse les prix publics) | « makeup artist casablanca prix » : 32 imp., pos 3,1, 0 clic ; `/tarifs` = « sur devis » sans fourchette | Ajouter fourchettes « à partir de » ou FAQ prix sur accueil + `/tarifs` (avec accord de Tyma sur les montants) | Fort | Faible |
| 5 | Page Formation manquante | ~60 imp. cumulées « formation makeup artist (casablanca) », pos 4-7, 0 clic ; aucune page dédiée, « 100+ maquilleuses formées » | Créer `/formation-maquillage-casablanca` (+ schema Course) | Fort | Moyen |
| 6 | Cannibalisation | « make up artist rabat prix » : tarifs 8,2 / Rabat 11 / accueil 17. « makeup artist casablanca » : accueil pos 3,4 vs page Casablanca pos 30 (la page dédiée ne ressort pas) | Différencier : accueil = marque/générique, pages villes = mariage + ville ; maillage depuis accueil/tarifs vers la bonne page | Moyen | Faible |
| 7 | Page Rabat/Marrakech faibles | « makeup artist rabat » pos 10,8 ; Marrakech pos 11-21 | Enrichir (quartiers, lieux, FAQ locale, témoignages de la ville, photos réelles) | Moyen | Moyen |
| 8 | Marrakech EN mais `lang="fr"` | `<html lang="fr">` global (layout.tsx:184) ; contenu EN, pas de hreflang | `lang="en"` sur le contenu de la page (wrapper) + hreflang fr/en si version FR liée | Moyen | Faible |
| 9 | Schema — avis auto-déclarés | `aggregateRating` + 3 `Review` dans le LocalBusiness du site (layout.tsx ~225-250) : non éligibles aux étoiles pour un avis du propre site, risque action manuelle | Garder la note en texte ; retirer `Review` du schema ou ne les marquer que s'ils sont affichés et vérifiables ; sourcer la note vers Google Maps | Moyen (risque) | Faible |
| 10 | Schema — NAP/adresse | `address` sans `streetAddress` (Maarif seulement) ; `geo.position` meta (33.5731) ≠ `GeoCoordinates` (33.5270) ; pas d'`image`/`logo` ; `priceRange: "$$"` pour MAD | Décider : adresse publique ou service area business (alors `areaServed` seul, sans adresse) ; aligner les coordonnées ; ajouter `image`, `logo`, `priceRange` en MAD | Moyen | Faible |
| 11 | Schema pages villes | `Service` avec `provider` sans `@id` : non relié à l'entité `#business` | `provider: {"@id": ".../#business"}` ; ajouter `FAQPage` locale | Faible-moyen | Faible |
| 12 | Cohérence marque | `alternateName: "Tyma Beauty"` (layout.tsx:139) alors que la règle projet = jamais « Tyma Beauty » ; handles Instagram/TikTok/YouTube = « tymabeauty » | Trancher : si les réseaux sont « Tyma Beauty », garder alias sciemment ; sinon retirer | Faible | Très faible |
| 13 | Cohérence liens sociaux | Facebook : code = `tymamakeupartist` (web. et www. selon le fichier) ; CLAUDE.md = `beautytyma` | Vérifier la vraie page, aligner `layout.tsx:178`, `:265`, `lib/social-config.ts:33` et CLAUDE.md | Faible | Très faible |
| 14 | Claims | « makeup artist n°1 à Casablanca » dans title/description/OG (layout.tsx:29, 84) ; « 10+ ans » partout vs « 11+ » (CLAUDE.md) | Retirer « n°1 » (non vérifiable, risque réputation/Google) ; harmoniser 10+/11+ ; centraliser note/avis/années dans une constante | Faible-moyen | Faible |
| 15 | llms.txt | En ligne ✅ (200) ; manque contact, adresse/zone, prestations détaillées, tarifs, FAQ, `llms-full.txt` | Étoffer (téléphone, WhatsApp, villes, prestations, politique de prix) | Moyen (GEO) | Faible |
| 16 | Contenu GEO | Réponses courtes et citables présentes (FAQPage OK sur accueil) ; peu de faits sourcés (pas de pages auteur/à propos détaillée, pas de contenu édito mariage marocain) | Ajouter blog/guides : « prix maquillage mariée Maroc », « essai maquillage », « keswa/takchita look », avec auteur + dates | Fort (moyen terme) | Élevé |
| 17 | Sitemap | `lastModified: new Date()` → lastmod = date du build sur toutes les URLs (live : 2026-11-14T21:09) ; pas de `/studio` (OK) | Mettre des dates réelles par page | Faible | Très faible |
| 18 | `keywords` meta | 27 mots-clés dans layout.tsx:33-60, ignorés par Google, bruit | Supprimer (nettoyage) | Très faible | Très faible |
| 19 | Images | Portrait/galerie encore Unsplash (CLAUDE.md « À faire », preloads Unsplash live) ; `<img>` natifs au lieu de `next/image` (page.tsx:665, 961, 1203) ; hero ≈ 0,9–1,1 Mo ; alt générique répété « Maquillage mariée par Tyma… » sur photos stock | Remplacer par vraies photos (skill `update-photos`), `next/image`, alts descriptifs uniques | Fort (E-E-A-T + perf) | Moyen |
| 20 | Perf probable | `wedding-bg.mp4` 13,9 Mo, `wedding-bg-h264.mp4` 15,5 Mo, mobile 5,1 Mo ; accueil 133 Ko HTML ; CWV non mesurés | Mesurer (PageSpeed/CrUX), vérifier chargement vidéo différé/mobile poster ; ne pas toucher `wedding-bg.mp4` (règle projet) | Moyen | À mesurer |
| 21 | Bruit d'impressions | Requêtes hors offre : massage, hair salon, hydrafacial, cils, microneedling (dizaines d'imp. pos 1-9) | Aucune page ; surveiller que la page n'induise pas ces services (listes de services/mots) | Faible | Faible |
| 22 | Technique OK | Redirects 308 (apex, http, trailing slash), 404 propre, robots OK, canonicals par page OK, 1 H1/page, GA4 + Pixel en place | RAS | — | — |

## Quick wins (ordre conseillé)
1. #2 soumettre le sitemap · 2. #12/#13/#14 cohérence marque/claims · 3. #8 lang EN Marrakech · 4. #9 schema avis · 5. #17/#18 nettoyage · 6. #4 fourchettes de prix (si Tyma valide) · 7. #1 GBP + citations (hors code, le plus rentable pour le GEO).

## Limites
- CWV non mesurés (quota API). Test GEO réel (ChatGPT/Perplexity/Gemini) à faire à la main sur 5-10 requêtes types.
- Données GSC : fenêtre 90 j seulement, volumes faibles (clics/jour 0-3) : les CTR par requête sont peu significatifs en dessous de ~50 impressions.
