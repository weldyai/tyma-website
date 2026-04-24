# Corrections — Tyma Project

1. **Inline styles écrasent le CSS** : toujours grep `letterSpacing|fontSize|fontFamily` avant de modifier une classe CSS
2. **Embed Instagram ≠ fichier vidéo** : toujours demander le fichier .mp4 avant de commencer un background vidéo
3. **Imports orphelins** : après suppression d'un composant, immédiatement supprimer l'import et la classe CSS
4. **Math.random() en SSR** : remplacer par `i * 1.618 % 100` pour un pseudo-random déterministe
5. **Deux balises video desktop/mobile** : préférer une seule avec classes responsive
