---
name: agency
description: Active le mode agence complet — dispatch via chef-projet vers les agents spécialisés
---

# Mode Agence — Tyma

Invoquer le chef-projet pour dispatcher la demande suivante vers les agents adéquats
avec le bon modèle (haiku pour tâches simples, sonnet pour créatif/code, opus pour architecture).

Le chef-projet doit :
1. Analyser la demande
2. Produire un plan de dispatch avec les agents + modèles assignés
3. Exécuter les tâches dans le bon ordre (parallèle si possible)
4. Synthétiser le résultat
5. Mettre à jour `.claude/memory/expertise/` si un nouveau pattern a émergé

Demande : $ARGUMENTS
