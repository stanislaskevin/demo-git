<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler les sélecteurs

### Variables et sélecteurs

<!-- 02/03 Document -->

----

## Variables et sélecteurs

Nous l'avons vu aux chapitre précédents. jQuery fonctionne selon la logique suivante : 

1. d'abord __rechercher des éléments dans le DOM__, à l'aide d'un *sélecteur*
2. ensuite __appliquer des fonctions aux éléments__ trouvés

Voici quelques conseils pour améliorer votre recherche d'éléments DOM, soit en terme de performances, soit en termes de facilité de développement.

----

## Résultat d'un sélecteur dans une variable

Chaque fois que l'on écrit `$(...)` pour chercher un élément, jQuery fait des appels à la méthode `getElementsByTagName()`de javascript, qui __parcourt l'intégralité du document HTML pour trouver vos sélecteurs... ce qui est très pénalisant en terme de performances__.

Pour éviter cela, il est conseillé de d'économiser vos appels à `$(...)` et __stocker leur résultats dans des variables.__ 

<small> 

:arrow_right: Il est d'usage – mais pas obligatoire – de préfixer le nom de ces variables par le caractère `$` qui nous rappelle que leurs contenus sont des objets jQuery.

</small>

----

## Résultat d'un sélecteur dans une variable (suite)

Ce code :

<gx-label>Javascript</gx-label>

```javascript
$('.foo .bar').addClass('hidden');
// [...]  
$('.foo .bar').append('<em>some html content</em>');
```

Sera écrit de préférence de la façon suivante 

<gx-label>Javascript</gx-label>

```javascript
var $fooBar = $('.foo .bar');

$fooBar.addClass('hidden');
// [...]  
$fooBar.append('<em>some html content</em>');
```

----

## Variables et sélecteurs sur-mesure 

A l'inverse, quand les éléments à sélectionner par la méthode `$(...)` dépendent de données externes – comme des champs de formulaires, des paramètres de fonction, etc. –  il sera nécessaire d'appeler `$(...)` à chaque fois que la variable concernée change. 

Dans ce cas, __on construira la chaîne de caractères qui correspond au sélecteur final__, en utilisant cette variable.

### Exemple

```javascript
var identifiant_de_l_article = 
    '#article-' + numero_de_l_article;
```

----

## Variables et sélecteurs sur-mesure (suite)

### Exemple

<gx-label>HTML</gx-label>

```html
<!-- ... -->
<form>
<input type="text" id="article_id" />
<input type="button" 
  onClick="showSelectedArticleOnly(this.article_id);" />
</form>
<!-- ... -->
```

<gx-label>Javascript</gx-label>

```javascript
function showSelectedArticleOnly(articleIndex) {
  $('article').hide();
  $("#article-" + articleIndex).show();
};
```

<small>

:arrow_right: Ce code qui masque tous les `article` d'une page sauf celui qui possède un id avec le même numéro que celui entré par l'utilisateur :

</small>

----

## Si vous voulez approfondir ce chapitre

Ces quelques articles peuvent vous intéresser :

* [oncletom.io : jQuery : optimiser l'utilisation des sélecteurs CSS](https://oncletom.io/2007/jquery-optimisation-selecteurs-css/)
* [dotclear : Bonnes pratiques de jQuery](https://fr.dotclear.org/documentation/brainstorming/bonnes-pratiques-jquery)

----

<!--
https://forum.jquery.com/topic/syntax-for-variable-as-selector
https://stackoverflow.com/questions/5891840/how-to-use-javascript-variables-in-jquery-selectors

https://www.grafikart.fr/forum/topics/17113
https://oncletom.io/2007/jquery-optimisation-selecteurs-css/
https://fr.dotclear.org/documentation/brainstorming/bonnes-pratiques-jquery
-->

## Merci pour votre attention

