---
name: review
description: Audit complet du site Tyma — typo, inline styles, imports orphelins, TypeScript
---

# Review Tyma

1. `npx tsc --noEmit` — vérifier les erreurs TypeScript
2. grep `letterSpacing|fontSize|fontFamily` dans `app/page.tsx` — lister les inline styles typo
3. grep les imports dans `app/page.tsx` — détecter les imports inutilisés
4. Vérifier que tous les liens réels sont en place (WA, Maps, Instagram, Facebook)
5. Retourner un rapport en bullet points : OK / À corriger
