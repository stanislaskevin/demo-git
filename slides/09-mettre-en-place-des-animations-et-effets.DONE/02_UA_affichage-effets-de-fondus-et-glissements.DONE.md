<!-- footer: Copyright 2017 © Glenn ROLLAND --“ Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Mettre en place des animations et effets simples

### Affichage, effets de fondus et glissements

<!-- 09/06 Document -->

----

### Affichage, effets de fondus et glissements

jQuery offre la possibilité d'automatiser certains effets et animations (à utiliser à bon escient et avec modération).

Dans cette partie, nous verrons les méthodes suivantes :

* .hide()  .show() et .toggle() pour contrôler l'affichage

Elles permettent de faire apparaître ou disparaître des éléments avec une animation.

----

## Points communs entre les fonctions d'animation

La plupart des méthodes d'animation en jQuery peuvent prendre comme paramètres optionnels :

* une vitesse d'animation ;
* un _easing_, c'est à dire un effet de transition ;
* un fonction callback, qui sera appelée en fin d'animation.

----

## Points communs entre les fonctions d'animation

### Vitesse d'animation

- speed: `'slow'` (600ms), `'normal'` (400ms) ou `'fast'` (200ms) ;
- un nombre, exprimé en millisecondes ;

### Easing

Le _easing_ décrit l'accélération ou la décélération de l'animation pendant la durée de son exécution. 

jquery fournit par défaut deux méthodes :

- `'swing'` 
- et `'linear'` qui avance a une vitesse constante

:arrow_right: D'autres effets de transition peuvent être ajoutés avec des plugins (jQuery Easings, jquery UI, etc.)

----

## Afficher et cacher des éléments

### Cacher des éléments

La méthode `.hide(vitesse, callback)` permet de cacher les éléments :

* sans paramètres, la fonction est équivalente à faire un `.css('display', 'none')` immédiat sur l'élément visé ;
* avec des paramètres la fonction devient une animation qui contrôle simultanément la hauteur, la largeur et l'opacité de l'élément visé pour les réduire à zéro.

<gx-label>Javascript</gx-label>

```javascript
$('#bouton-masquer').click(function(){
  $('.bg-info').hide();
});
```

:blue_book : Lire http://api.jquery.com/hide/ pour la documentation complète de la fonction.

----

## Afficher et cacher des éléments

### Afficher des éléments

La méthode `.show(vitesse,callback)` permet d'afficher les éléments.

Elle fonction à l'inverse de la méthode `.hide(...)` : 
* sans paramètres elle fait un `.css('display', 'block')`
* avec des paramètres la fonction devient une animation qui contrôle simultanément la hauteur, la largeur et l'opacité de l'élément visé pour leur donner la taille convenue par le CSS.

<gx-label>Javascript</gx-label>

```javascript
$('#bouton-afficher').click(function(){
  $('.bg-info').show();
});
```

----

## Afficher et cacher des éléments

### Basculer de l'un à l'autre

La méthode `.toggle(fonction1, fonction2)` permet une bascule à chaque fois qu'elle est appelée :

* sans aucun paramètre elle passe les éléments visés d'invisible à visible (`.show()`), et inversement (`.hide()`) ;
* avec les deux fonctions en paramètre, elle bascule de la première fonction à la seconde et inversement.

<gx-label>Javascript</gx-label>

```javascript
$('#bouton-unique').click(function(){
  $('.bg-info').toggle();
});
```



----

## Glissements

* `.slideDown()` : fait apparaître, par glissement vers le bas, un élément ;
* `.slideUp()` : fait disparaître, par glissement vers le haut, un élément ;
* `.slideToggle()` : bascule de `.slideUp()` vers `.slideDown()` et inversement.

----

# Effets de fondu

* `.fadeIn()` : fait apparaître un élément avec effet de fondu ;
* `.fadeOut()` : fait disparaitre un élément avec effet de fondu ;
* `.fadeTo()` : modifie l'opacité de l'élément sélectionné ;
* `.fadeToggle()` : bascule de visible à invisible par effet de fondu, et inversement.

----

## Différer un effet

la méthode `delay()` permet de différer un effet, c'est à dire attendre une certaine durée avant que l'effet ne soit lancé :

<gx-label>Javascript</gx-label>

```javascript
$("div.effet").slideUp(300).delay(2000).fadeIn(600);
```


----

## Merci pour votre attention
