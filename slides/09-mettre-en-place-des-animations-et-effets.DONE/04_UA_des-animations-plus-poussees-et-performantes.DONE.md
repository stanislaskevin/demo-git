<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Mettre en place des animations et effets

### Des animations plus poussées et performantes 

<!-- 09/08 Document -->

----

## Des animations plus poussées et performantes 

L'animation, lorsqu'elle bien faite, peut améliorer les interfaces des sites Web et l'expérience utilisateur, cependant les outils proposés sur ce sujet par jQuery sont souvent limités tant dans leurs fonctionnalités que dans leur performances.

Dans ce tutoriel, nous allons nous intéresser à VelocityJS, un moteur d'animation JavaScript avec de nombreuses qualités :

- __Meilleures performances__ : VelocityJS est aussi rapide que CSS et offre de meilleures performances que les fonctions jQuery, en particulier sur les appareils mobiles ;
- __Plus élégant__ : VelocityJS offre de meilleurs outils que jQuery pour chaîner des animations de manière consécutive... et faire cela uniquement avec CSS est impensable ;
- __Simple à prendre en main__ : VelocityJS fournit une syntaxe similaire à jQuery, qui permet de passer d'une bibliothèque à l'autre presque sans effort.

Voyons comment réaliser des animations avec VelocityJS !

----

## Pour démarrer

FIXME: inclure Velocity dans l'en-tete

----

## De jQuery à VelocityJS

__Le plus souvent, il suffit de remplacer la méthode `.animate(...)` de jQuery par `.velocity(...)`.__

Imaginons que l'on souhaite déplacer un élément `<div>` de 500 pixels vers à droite, nous écririons :

### Avec jQuery

<gx-label>Javascript</gx-label>

```javascript
$("div").animate({left: "500px"}, {
    duration: 3000, 
    easing: "linear"
});
```

### Avec VelocityJS

<gx-label>Javascript</gx-label>

```javascript
$("div").velocity({left: "500px"}, {
    duration: 3000, 
    easing: "linear"
});  
```

:information_source: notez la différence de performances : avec les animations jQuery sont parfois saccadées tandis qu'avec VelocityJS elles sont fluides de bout en bout.

----

## Syntaxe de velocityJS

Comme `animate(...)`, la méthode `velocity(...)` accepte un grand nombre de propriétés CSS pour animer l'élément. 

<gx-label>Javascript</gx-label>

```javascript
$("div").velocity({
  borderRadius: "25px",
  width: "45px",
  paddingLeft: "0",
  paddingRight: "0",
  backgroundColor: "#8CC152",
  color: "#fff",
  borderColor: "#8CC152",
  boxShadowX: "0",
  boxShadowY: "0"
}, {
    duration: 350,
    easing: "easeInQuad"
});
```

:information_source: VelocityJS inclut par défaut la gestion des couleurs et des _easing_ sophistiqués, alors que des plugins seraient nécessaires pour faire la même chose dans jQuery.

----

## Raccourcis pour les animations

jQuery fournit quelques méthodes pour effectuer des animations fréquentes, telles que `.slideUp()` et `.fadeOut()`, qui font disparaître progressivement les éléments. VelocityJS le permet aussi, mais sous forme de raccourcis pour la méthode `.velocity(...)` :

### Pour un glissement

<gx-label>Javascript</gx-label>

```javascript
$("div").velocity("slideUp", {
    duration: 350
});
```

### Pour un fondu

<gx-label>Javascript</gx-label>

```javascript
$("div").velocity("fadeOut", {
    duration: 350
});
```

----

## Défilement vertical

VelocityJS fournit également un raccourci appelé `'scroll'` défile jusqu'à un élément visé dans la page :

<gx-label>Javascript</gx-label>

```javascript
var $up = $("#go-up"),  // le bouton
    $target  = $("body"); // l'élément visé
 
$up.on("click", function() {
  $target.velocity("scroll", { 
    duration: 2000,
    easing: "easeInBack"
  });
});
```

----

## Inversion de l'animation

VelocityJS inclut un autre raccourci pratique, `'reverse'` : ce raccourci nous permet de revenir à l'état initial de l'élément une fois l'animation terminée. 

<gx-label>Javascript</gx-label>

```javascript
$(".icon").velocity({
  translateY: "10px"
}, {
  loop: true
}).velocity("reverse");
```

:information_source: Ce code déplace l’icône de 10 pixels puis la remet en position d'origine. L'option `loop` permet de jouer l'animation indéfiniment.


## Plugin: UI Pack

De nombreux autres effets d'animation sont également disponibles dans _UI Pack_, un plugin pour VelocityJS. Il fournit en plus : 

* l'effet `stagger` qui permet d'appliquer un effet à un collection d'éléments séquentiellement au lieu de simultanément ;
* l'option `drag` qui décale légèrement dans le temps l'animation du dernier élément d'une collection.

:arrow_right: Voir <https://codepen.io/glenux/pen/NXXXYK> pour un exemple interactif.


## Animations séquentielles

Pour faire une animation séquentielle, on peut chaîner les appels de `.velocity(...)` comme dans jQuery. Cependant cela ne permet d'animer qu'un seul élément à la fois.

Pour animer plusieurs éléments les uns après les autres, il faudrait lancer l'animation de l'élément suivant dans le callback de l'élément qui vient de finir son animation. 

C'est assez peu pratique à manipuler, comme on peut le voir sur un exemple simple :

```javascript
$("#offcanvas").velocity({ translateX: 0 }, 
  { duration: 300 }, 
  function() {
    $(".widgets").velocity({ translateX: 0, opacity: 0 }, 
      { duration: 300 }, 
      function() {
        $("#close").velocity(
          { translateY: 0, rotateZ: 0 }, 
          { duration: 150 }
        );
}) }) }) });
```

----

## Animations séquentielles (suite)

Pour palier à ce défaut, le plugin _UI Pack_ fournit la méthode `.RunSequence()` qui gère l'affichage d'une séquence animée, même sur des éléments différents.

Avec `.RunSequence()`, l'exemple précédent s'écrit alors :

```javascript
var animationSequence = [
    { e: $("#offcanvas"), p: { translateX: 0 } , o: duration: 300 },
    { e: $(".widget"), p: { translateX: 0, opacity: 0 } , o: duration: 300 },
    { e: $("#close"), p: { translateY: 0, rotateZ: 0 } , o: duration: 150 }
];
$.Velocity.RunSequence(animationSequence);
```

----

## Merci pour votre attention

<!--

https://www.grafikart.fr/tutoriels/jquery/velocityjs-animation-jquery-506

-->