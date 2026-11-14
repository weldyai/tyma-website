# Recherche GEO via Chrome (14/11/2026)

Google (hl=fr, gl=ma), navigateur de Brahim connecté.

## Constats
- « makeup artist casablanca » : pack local Google = **Tyma Makeup Artist Casablanca**, 2e position, **4,8 (44 avis)**, « Plus de 10 ans en activité », tél. 06 94 86 36 46, fiche « Vous gérez cette fiche d'établissement » → la fiche GBP existe et est revendiquée. Le site affiche encore **41 avis** (à passer à 44). L'audit initial (« pas de GBP ») était faux : la recherche web outillée ne la voyait pas.
- Instagram @tymabeauty : **97,1 k abonnés**, bio « Owner of GLOBALBEAUTY ACADEMY », même numéro.
- « formation maquillage casablanca » : le pack local montre **Global Beauty Academy — Makeup & Hairstyle** (« Vous gérez cette fiche »), centre de formation, 5,0 (21 avis), Bd Abou Bakr Al Kadiri, panorama offices immeuble 3 office 6, même tél. → la formation est portée par une entité séparée ; concurrents : CIEC INFA (depuis 1993), Sassane Academy. La page formation du site doit s'appuyer sur Global Beauty Academy, pas l'ignorer.
- « maquilleuse mariage rabat » : pack local = Wujouh (5,0/46), Make Up By Kamilia (4,6/29, 20+ ans), Mamlal Oudadess ; web = Bride House. Tyma absente du pack Rabat (pas d'adresse à Rabat).
- Perplexity (non connecté) : requête « meilleure maquilleuse de mariée à Casablanca » → « Inscrivez-vous et répétez votre demande » : pas de réponse sans compte. ChatGPT/Gemini non testés (connexion requise, hors périmètre sans identifiants).

## Actions humaines restantes (non faisables par code)
1. Rattacher Global Beauty Academy et le site (liens croisés site ↔ fiche ↔ Instagram).
2. Avis : continuer la collecte (écart concurrents Casablanca 70 avis).
3. Fiche GBP : vérifier que l'URL du site pointe sur `https://www.tymamakeupartist.com/` et que catégories/services (mariée, soirée, shooting) sont renseignés.
4. Soumettre le sitemap dans GSC (action GSC non faite, sur accord).
5. Test manuel ChatGPT/Gemini/Perplexity connectés sur 5-10 requêtes types.

## Test réel sur les IA (14/11/2026, ~22h, via Chrome connecté)
| IA | Requête | Résultat |
|---|---|---|
| Google Mode IA | « meilleures maquilleuses de mariée à Casablanca » | ✅ Tyma citée 1re, source tymamakeupartist.com (10+ ans, 4,8/5, essai, 12-16 h) |
| Google Mode IA | « Qui est Tyma Makeup Artist ? » | ✅ réponse exacte (500+ mariées, Rabat/Marrakech/Fès, Global Beauty Academy, salon bd Abou Bakr Al Kadiri) |
| Google Mode IA | « maquilleuse mariage Rabat » | ❌ absente (Mema Beauty, Wujouh, Mamlal Oudadess) |
| Google Mode IA | « bridal makeup artist Marrakech destination wedding » | ❌ absente (Amandine, Soukaina Farah…) |
| ChatGPT (recherche web) | « meilleures maquilleuses de mariée à Casablanca » | ✅ 4e sur 6 (4,8/5 · 44 avis, lien « Site officiel ») ; classée sous des fiches à 5,0 |
| Gemini | idem | ✅ citée avec détails issus du site (essai ~2 h, déplacement) et avis Google |
| Perplexity | idem | non testé (compte requis) |

Lecture : Casablanca et marque OK. Faiblesse = Rabat et Marrakech (villes hors base, peu d'avis locaux). Le classement dans ChatGPT suit la note/nombre d'avis Google : leviers = avis, liens croisés GBP/site/Instagram. Note : 3 conversations de test restent dans l'historique ChatGPT et Gemini de Brahim.
