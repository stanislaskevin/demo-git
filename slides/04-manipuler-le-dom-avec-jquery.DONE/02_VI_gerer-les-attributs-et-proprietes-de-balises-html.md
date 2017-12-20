<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Gérer les attributs et propriétés des balises HTML
<!-- 04/02 Vidéo (screencast) -->

----

## Gérer les attributs et propriétés des balises HTML

Nous avons vu comment manipuler le contenu des balises, voyons maintenant  comment gérer les informations sur celles-ci.

Nous allons voir qu'avec jQuery il existe __différentes façons de gérer ces informations__ selon qu'il s'agit

- d'attributs de balises HTML (méthode génériques)
- d'attributs de données (prefixe `data-`)
- d'attributs de classes CSS 
- de propriétés


<!-- 

----

## Attributs de balises génériques

La méthode `attr()` permet de lire et modifier le contenu des attributs des éléments HTML. 
 
### Lire un attribut

- `attr(attrName)` : lit le contenu de l'attribut _attrName_

### Modifier un attribut

- `attr(attrName, attrValue)` de changer (ou ajouter) la valeur d'un attribut

----

## Attributs de balises génériques

### Modifier un attribut (suite)

- `attr(attrObject)` : change la valeur de plusieurs attributs en passant objet JSON (clef : le nom de l'attribut à changer, valeur&nbsp;: la nouvelle valeur) 

- `attr(attrName, function(index, value) { ... })` :  changer l'attribut à l'aide d'une fonction. Les paramètres reçus sont l'indice de l'élément et la valeur actuelle de l'attribut

:warning: __Note :__ en fonction des versions de jQuery , attr() peut renvoyer une valeur de type`String` ou un type `Boolean` (ex:  sur une propriété `checked` d'un `<input type="checkbox" .../>` par exemple)

----

## Attributs de balises génériques

### Supprimer un attribut

- `removeAttr()` : supprime un attribut

### Cas spécial des `<input ... >`

jQuery propose une fonction spéciale : `val()` pour modifier la valeur (attribut `value`) d'un élément.

- `val()` retourne la valeur (attribut value) d'un élément
- `val(newValue)` : permet aussi de définir _newValue_ comme nouvelle valeur
- `val(function (index, value) { ... })` : permet de modifier la valeur selon une fonction qui prend en paramètre l'indice de l'élément dans une collection et sa valeur

----

### Propriétés de balises

-->

----

## Gérer les attributs et propriétés des balises HTML

Je vous propose de regarder la vidéo suivante qui vous explique leur fonctionnement en détail :

https://www.lynda.com/fr/jQuery-tutoriels/Attributs-proprietes/193138/343014-4.html

----

## Merci pour votre attention

Nous verrons dans le chapitre suivant comment gérer le cas spécifique des attributs pour les classes CSS.
