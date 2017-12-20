<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Parcourir le DOM avec les méthodes de traversing.

### Traiter et filtrer les éléments HTML d’une collection

<!-- 06/06 Document -->

----

### Traiter et filtrer les éléments HTML d’une collection

----

## Réduire une collection

### D'après un selecteur (ou une fonction)

La méthode `.filter(selecteur)` réduit l'ensemble des éléments sélectionnés à ceux qui passent le filtre

:blue_book: http://api.jquery.com/filter/

----

## Réduire une collection

### À l'inverse d'un selecteur (ou d'une fonction)

La méthode `.not(selecteur)` réduit l'ensemble des éléments sélectionnés à ceux qui ne passent PAS le filtre

:blue_book: http://api.jquery.com/not/

----

## Réduire une collection

### Selon la position des éléments

La méthode `.slice(debut[,fin])` réduit l'ensemble des éléments sélectionnés à ceux qui sont entre deux positions

:blue_book: http://api.jquery.com/slice/

----

## Parcourir une collection

La méthode `.each(collection,callback(index,value))` : applique une fonction sur chaque élément de la sélection

La fonction _callback_ sera de la forme suivante : `callback(index,value)`

:blue_book: http://api.jquery.com/each/

----

## Merci pour votre attention
