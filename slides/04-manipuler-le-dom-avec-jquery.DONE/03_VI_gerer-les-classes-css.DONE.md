<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Gérer les classes CSS

<!-- -addclass-removeclass-toggleclass-hasclass -->

<!-- 04/03 Vidéo (screencast) -->

----

## Attributs de classes CSS

Les attributs de classe CSS peuvent être manipulés avec la fonction `attr()`, vue au chapitre précédent. Cependant utiliser cette fonction peut s'avérer fastidieux lorsque l'on souhaite manipuler une classe CSS (parmi plusieurs) sur un même élément HTML. 

C'est pourquoi __jQuery fournit des fonctions qui facilitent le travail pour les opérations courantes sur les classes CSS__ :

- ajouter une classe CSS
- enlever une classe CSS 
- tester la présence d'une classe CSS 
- activer/désactiver une classe CSS selon qu'elle est présente ou non

----

<!--

## Attributs de classes CSS

### Ajout de classes CSS

- `addClass(className)` : ajout d'une ou plusieurs classes (si plusieurs classes sont ajoutée, elles sont séparées par un espace)

- `addClass(function (index, classes) { ... })`une fonction peut être utilisée pour retourner une ou plusieurs classes, cette fonction reçoit l'indice de l'élément et le nom des classes de cet élément


### Suppresson de classes CSS

- `removeClassclasses()` suppression d'une ou plusieurs mêmes paramètres possibles que `addClass`

----

## Attributs de classes CSS

### Vérifier la présence d'une classe CSS

- `hasClass(className)` : vérifie la présence d'une classe CSS et renvoie `true` ou `false`

- `toggleClass(className)` : ajoute ou supprime une classe : ajoute la classe si elle n'est pas présente, supprime la classe si elle est présente. Si plusieurs classes sont spécifiées, elles sont séparées par des virgules.

----

-->

## Attributs de classes CSS

Voyons en vidéo comment tout cela fonctionne :

https://www.lynda.com/fr/jQuery-tutoriels/addClass-removeClass-toggleClass/193138/343013-4.html

----

## Merci pour votre attention

