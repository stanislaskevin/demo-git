<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css?t=2" />

# Parcourir le DOM avec les méthodes de _traversing_

### Filtrer les éléments HTML d'une collection selon leur position

<!-- 06/04 Document -->

----

### Filtrer les éléments HTML selon leur position

Nous utilisons depuis le début du cours la fonction `$(...)` pour faire une requête jQuery qui trouve et retourne une collection d'éléments sur lesquels agir ensuite.

Il arrive souvent que l'on ait besoin que d'un seul élément dans la liste des résultats . Voyons ici comment filtrer et réduire cette collection pour obtenir seulement : 

* soit le n-ième élément ;
* soit le premier élément ;
* soit le dernier élément.

----


## Obtenir le n-ième élément parmi les résultats

La méthode `.eq()` retourne un élément jQuery avec un numéro d'index spécifique parmi les résultats de la requête jQuery précédente.

:information_source: Les numéros d'index commencent à 0 : ainsi le premier élément aura le numéro d'index 0 et non 1.

:blue_book: Lire http://api.jquery.com/eq/ pour la documentation complète de la méthode.

----

## Obtenir le n-ième élément parmi les résultats

### Exemple

<gx-label>HTML</gx-label>

```html
<ul>
  <li>Alice</li>
  <li>Bob</li>
  <li>Charlie</li>
</ul>
```

<gx-label>Javascript</gx-label>

```javascript
$("li").eq(1).css('background-color', 'red');
```
Ce code sélectionne le second `<li>...</li>` de la liste et change le CSS _inline_ pour mettre sa couleur de fond en rouge.

:arrow_right: Voir https://jsfiddle.net/glenux/b8nf9j9o/2/ pour un exemple interactif.

----


## Obtenir le premier élément

La méthode `.first()` retourne le premier élément de la collection retournée par jQuery.

Le comportement de  `$elem.first()` est exactement le même que `$elem.eq(0)`.

:blue_book: Lire http://api.jquery.com/first/ pour la documentation complète de la méthode.

<!--
Dans le code de jquery, voici comment elle est implémentée : 

```javascript
first: function() { return this.eq(0); }
```
-->

----

## Obtenir le premier élément

### Exemple

<gx-label>HTML</gx-label>

```html
<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
</ul>
```

<gx-label>Javascript</gx-label>

```javascript
$("li").first().css('background-color', 'red');
```

Ce code sélectionne le premier `<li>...</li>` de la liste et change le CSS _inline_ pour mettre sa couleur de fond en rouge.

:arrow_right: Voir https://jsfiddle.net/glenux/b8nf9j9o/3/ pour un exemple interactif

----

## Obtenir le dernier élément

La méthode `.last()` retourne le dernier élément de la collection retournée par jQuery.

Le comportement de `$elem.last()` est équivalent à celui de `$elem.eq($elem.length-1)`.

:blue_book: Lire http://api.jquery.com/last/ pour la documentation complète de la méthode.

----

## Obtenir le dernier élément (exemple)

### Exemple

<gx-label>HTML</gx-label>

```html
<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
  <li>list item 4</li>
  <li>list item 5</li>
</ul>
```

<gx-label>Javascript</gx-label>

```javascript
$("li").first().css('background-color', 'red');
```

:arrow_right: Voir https://jsfiddle.net/glenux/ap50nL6g/1/ pour un exemple interactif.

----

## Merci pour votre attention
