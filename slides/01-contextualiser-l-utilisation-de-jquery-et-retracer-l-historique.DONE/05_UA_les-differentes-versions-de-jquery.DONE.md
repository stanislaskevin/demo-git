<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Contextualiser l'utilisation de jQuery et retracer l'historique

### Les différentes versions de jQuery

<!-- 01/05 Document -->

----

## Les différentes versions de jQuery

__jQuery existe depuis 2006 et le projet n'a jamais cessé d'évoluer depuis lors__. De nombreuses versions de la bibliothèque ont vu le jour et de nombreux projets sont basés sur les différentes versions de la bibliothèque.

En plus des versions de la bibliothèque, celle-ci est disponible en __de nombreuses _variantes_ pour une même version__.

Il est donc important de comprendre les avantages et inconvénients des différentes versions disponibles pour __faire le meilleur choix technique pour vos projets web__.

----

## Historique (rapide) des versions de jQuery

Les versions suivantes ont marqué un tournant important dans l'histoire de jQuery :

* __jQuery 1.12__ : dernière version totalement compatible avec les anciens navigateurs (IE6-8)
* __jQuery 1.19__ : suppression des fonctions obsolètes dans l'API
* __jQuery 2.0__ :  arrêt du support des anciens navigateurs (IE6-8). Compatibilité uniquement avec _current_  et _current-1_ (c'est à dire la version actuelle et la version précédente des navigateurs à la date de la sortie)
* __jQuery 3.0__ : support de la [gestion sémantique des versions](http://semver.org/lang/fr/), évolution de l'API et suppression des fonctions obsolètes de l'API

----

## Quelle version utiliser ?

### Pour un nouveau projet

Pour un projet à destination des navigateurs webs actuels, il est recommandé __d'utiliser la toute dernière version de jQuery, dans la série 3.x__ .


----

## Quelle version utiliser ? (suite)

### Pour un projet qui dépend d'une ancienne version

Si vous reprenez un projet qui utilise une ancienne version de jQuery, il faut tenir compte : 

* des évolutions de l'API (après les versions 1.19 et 3.x)
* de l'incompatibilité avec les anciens navigateurs pour les versions supérieures à 1.12.

Le code du projet cessera donc de fonctionner si vous remplacez jQuery par une version trop récente, ou si vous utilisez une fonction de l'API moderne sur une ancienne version.

__Dans ces deux cas, jQuery propose un outil ([jQuery Migrate](https://github.com/jquery/jquery-migrate)) et un [guide de migration](https://jquery.com/upgrade-guide/) pour vous aider__.

----

## Les différentes variantes de jQuery

Sur la page de téléchargement de jQuery, on voit que __chaque version est disponible dans plusieurs variantes__. Voici à quoi elles correspondent :

### uncompressed

__Version originale, écrite par les développeurs__ de jQuery. Elle permet de relire le code si vous souhaitez contribuer au projet jQuery ou comprendre un bug qui s'y trouverait (cas très rare).

### minified

__Version "compressée"__ par un algorithme qui supprime les espaces et les commentaires puis remplace les variables internes par des noms plus courts. Cela rend le code très difficilement lisible.

----

## Les différentes variantes de jQuery (suite)

### slim

Version "réduite" de jQuery, qui __inclut seulement le minimum__ (sélecteurs, manipulation du HTML et CSS, etc.). Elle n'est n'apporte donc pas les fonctionalités liées à AJAX, aux effets visuels et aux animations.


### slim minified

Version qui __cumule la compression de _minified_ et la réduction de _slim___.

----

## Merci pour votre attention 
