<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Mettre en place des animations et effets simples

### Animer des propriétés CSS avec _animate_

<!-- 09/07 Vidéo (screencast) -->

----

### Animer des propriétés CSS avec _animate_

Nous avons vu comment réaliser des effets d'animations simples et pré-définis avec jQuery. Mais jQuery permet également de réaliser des effets d'animation sur-mesure sur la base des propriétés CSS.

Voyons comment faire cela.

----

## Créer une animation
 
La méthode `.animate({styles},speed, easing, callback)` permet de créer une animation sur les objets visés. 

Voici ses paramètres :
 
-  `styles` est objet JSON qui indique les propriétés CSS à animer ;
-  `speed`, optionnel, indique la vitesse de l’animation ;
- `easing`, optionnel, indique la forme de l'animation ;
- `callback`, optionnels, est la fonction à appeler en fin d'animation.

<gx-label>Javascript</gx-label>

```javascript
$("button").click(function(){
    $("#text").animate({
	  fontSize: '24px', 
	  left: 300, 
	  width: '200px', 
	  opacity: 0.5
	  }, 1000);
});
```

:arrow_right: Voir <https://jsfiddle.net/bhvvejt6/3/> pour un exemple interactif

-----

### Chaîner deux animations

Il est possible, avec la méthode `.animate()`, de chaîner séquentiellement les animations, c'est-à-dire de lancer une animation puis une autre, etc.

<gx-label>Javascript</gx-label>

```javascript
$('#play').click(function(){
    $('.pod').animate({
        left: '250px',
        width: '+=150px'
    }, 500)
    .animate({
        opacity: '0.25'
    }, 1000);
});
```
:arrow_right: Voir <https://jsfiddle.net/pt93fwwd/1/> pour un exemple interactif 


----

## En détails

Voyons ce que cela donne, en vidéo :

<https://www.lynda.com/fr/jQuery-tutoriels/Mise-place-animations/193138/343047-4.html>

<!--
"https://www.lynda.com/fr/jQuery-tutoriels/divers-modes-animation/193138/343046-4.html

https://www.lynda.com/fr/jQuery-tutoriels/Mise-place-animations/193138/343047-4.html

https://www.lynda.com/fr/jQuery-tutoriels/callbacks-apres-animation/193138/343050-4.html"
--->

----

## Merci pour votre attention
