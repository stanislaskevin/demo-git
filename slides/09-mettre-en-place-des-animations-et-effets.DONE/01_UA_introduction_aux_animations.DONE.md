 <!-- footer: Copyright 2017 Â© Glenn ROLLAND â€“ Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Mettre en place des animations et effets simples

### Introduction aux animations et effets

<!-- 09/06 Document -->

----

## Introduction aux animations et effets

jQuery offre la possibilité d'automatiser certains effets et
animations (à utiliser à bon escient et avec modération)

La plupart des fonctions sur les effets utilise des paramètres
optionnels

- _speed_ : `'slow'`, `'normal'` ou `'fast'` – ou  bien un nombre en millisecondes
- _easing_ : effet prédéfini personnalisé par plugin
- _function_ : une fonction callback qui sera invoquée à la fin de l'effet

----

## Quand et comment désactiver les animations ?

L'ensemble des effets et animations peut être désactivé par la propriété `jQuery.fx.off` de jQuery. 

Lorsque cette propriété vaut `true`, les méthodes d'animation mettent immédiatement les éléments dans leur état final, plutôt que d'afficher un effet. Lorsqu'elle vaut `false` les animations sont actives.

Cela peut être souhaitable pour plusieurs raisons:

* quand jQuery est utilisé sur un périphérique à faible ressources 
* lorsque les utilisateurs rencontrent des problèmes d'accessibilité avec les animations


:blue_book: https://api.jquery.com/jquery.fx.off/

----

## Merci pour votre attention
