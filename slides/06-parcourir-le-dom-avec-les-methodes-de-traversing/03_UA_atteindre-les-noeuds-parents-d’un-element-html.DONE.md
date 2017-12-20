<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Parcourir le DOM avec les méthodes de traversing.

### Atteindre les noeuds parents d’un élément HTML

<!-- 06/02 Document -->

----

### Ancêtre immédiats

La méthode `.parent()` retourne l'élément parent direct de l'élément sélectionné. Cette méthode ne traverse qu'un seul niveau dans l'arborescence DOM.

:blue_book: http://api.jquery.com/parent/

----

## Tous les ancêtres

La méthode `.parents()` retourne tous les éléments ancêtres de l'élément sélectionné.

:blue_book: http://api.jquery.com/parents/

----

## Tous les ancêtres juqu'à un certain point

Comme `.parents()`, la méthode `$.parentUntil()` renvoie une collection d'éléments ancêtres de l'élément sélectionné, jusqu'à un élément (ou sélecteur) passé à la fonction.

:blue_book: http://api.jquery.com/parentsuntil/

----

## Ancêtre le plus proche avec selecteur

Comme `.parentsUtil()`, la méthode `$.closest(selecteur)` cherche l'ancêtre le plus proche de l'élément sélectionné répondant au sélecteur, mais elle retourne uniquement celui-ci.

:blue_book: http://api.jquery.com/closest/

----

## Merci pour votre attention
