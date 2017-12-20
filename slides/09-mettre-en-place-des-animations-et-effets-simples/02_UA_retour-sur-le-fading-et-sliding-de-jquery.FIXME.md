<!-- footer: Copyright 2017 Â© Glenn ROLLAND â€“ Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Mettre en place des animations et effets simples.

### Retour sur le fading et sliding de jQuery

<!-- 09/06 Document -->

----

## Retour sur le fading et sliding de jQuery

jQuery offre la possibilité d'automatiser certains effets et
animations (à utiliser à bon escient et avec modération)

La plupart des fonctions sur les effets utilise des paramètres
optionnels

- speed: 'slow', 'normal' ou 'fast' – ou un nombre en millisecondes
- easing : effet prédéfini personnalisé par plugin
- function : une fonction callback qui sera invoquée à la fin de l'effet

L'ensemble des effets peut être désactivé par l'instruction
jQuery.fx.off = true

----



Dans cette partie, nous verrons les méthodes .hide(), .show() et .toggle().

Elles permettenet de faire apparaître ou disparaître des éléments avec une animation.

Ces méthodes peuvent prendre comme paramètres :

une vitesse
un callback


----

## Cacher des éléments

La méthode .hide() permet de cacher les éléments.

$(selecteur).hide(vitesse,callback);


API : http://api.jquery.com/hide/


----

## Afficher des éléments

La méthode `.show()` permet d'afficher les éléments.

$(selecteur).show(vitesse,callback);

```
$('button').click(function(){
  $('.bg-info').show();
});
```



----

## Glissements

* slideDown() : fait apparaître, par glissement vers le bas, un élément
* slideUp() : fait disparaître, par glissement vers le haut, un élément

----

# Effets de fondu

* fadeIn() : fait apparaître un élément avec effet de fondu
* fadeOut() : fait disparaitre un élément avec effet de fondu
* fadeTo() : modifie l'opacité de l'élément sélectionné

----

## Différer un effet

la méthode delay() permet de différer un effet 

$("div.effet").slideUp(300).delay(2000).fadeIn(600);

----

<!--

## Passer d'un effet à l'autre

 toggle() : bascule un élément d'invisible à visible, et
inversement

toggle(function1,fucntion2) : bascule d'une
fonction à l'autre à chaque clic sur l'élément

slideToggle() : bascule de slideUp vers slideDown et inversement

fadeToggle() : bascule de visible à invisible par effet
de fondu, et inversement

----
-->

## Merci pour votre attention
