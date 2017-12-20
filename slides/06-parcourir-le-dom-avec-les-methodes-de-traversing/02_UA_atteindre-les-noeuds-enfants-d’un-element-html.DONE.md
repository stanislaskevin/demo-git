<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Parcourir le DOM avec les méthodes de traversing.

### Atteindre les noeuds enfants d’un élément HTML

<!-- 06/01 Document -->

----

## Atteindre les noeuds enfants d’un élément HTML

Dans ce chapitre, nous allons voir les différentes façon de trouver, filtrer et manipuler les enfants d'un élément HTML donné :

* trouver les enfants immédiats – et les filtrer
* trouver des descendants –  et les filtrer


----

## Atteindre les noeuds enfants d’un élément HTML

### Enfants immédiats

La méthode `.children()` retourne tous les enfants directs de l'élément sélectionné. Cette méthode ne traverse qu'un seul niveau dans l'arbre DOM.

```javascript
// cible l'élément enfant direct du bloc div
$('div').children(); 
```

----

## Atteindre les noeuds enfants d’un élément HTML

### Enfants immédiats filtrés

La méthode peut aussi être utilisée sous la forme `.children(selector)`, auquel cas elle ne retournera que les enfants qui correspondent au sélecteur.

```javascript
// cible seulement l'ensemble des paragraphes enfants 
// du bloc div
$('div').children('p'); 
```

:blue_book: Voir API : http://api.jquery.com/children/

----

## Atteindre les noeuds enfants d’un élément HTML

### Recherche de descendants (avec filtre)

La méthode `.find()` retourne tous les enfants de l'élément sélectionné.

Sous sa forme `.find(selecteur)`, elle retourne les descendants de l'élément sélectionné répondant au sélecteur

```javascript
// trouve tous les descendants cible du bloc div
$('div').find(); 
```

<!-- FIXME: ajouter exemple -->

----
## Atteindre les noeuds enfants d’un élément HTML

### Recherche de descendants (parmis une liste)

Sous sa forme `.find(elements)` elle retourne les descendants de l'élément sélectionné parmi la liste de ceux fournis en paramètre

```javascript
// cible seulement l'ensemble des paragraphes 
// descendants du bloc div
$('div').find('p'); 
```

<small>:blue_book: http://api.jquery.com/find/</small>

----

## Merci pour votre attention

<!--

https://openclassrooms.com/courses/un-site-web-dynamique-avec-jquery/parcourir-les-elements-du-dom

http://cours.vincent-vanneste.fr/jquery/co/Parcours.html

-->

