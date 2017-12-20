<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement.

### Événements du navigateur

<!-- 05/04 Document -->

----

## Événements du navigateur

En plus de fournir de quoi manipuler les éléments de la page, jQuery propose également des fonctions pour réagir aux différents évènements du navigateur.

Les cas les plus fréquents à gérer sont :

* les erreurs de chargement ou d'exécution
* les redimensionnements
* le défilement vertical

Voyons ensemble comment gérer tout cela.

----


## Événements du navigateur

### Erreurs sur la page

Il arrive qu'une erreur javascript se produise, ou qu'un élément HTML de la page ne soit pas correctement chargé.

Pour ces cas d'erreurs, la fonction `$.error()`de jquery permet de gérer l'évènement.

----

## Événements du navigateur

### Erreurs sur la page : exemple

<small>

<gx-label>HTML</gx-label>

```html
<img alt="Book" id="book">
```

<gx-label>Javascript</gx-label>

```
$( "#book" )
  .error(function() {
    alert( "Handler for .error() called." )
  })
  .attr( "src", "missing.png" );
```

:information_source:  Le code ci-dessus attache un gestionnaire d'évènements sur la balise `<img>` et change le chemin de l'image vers un fichier `missing.png` inexistant. Le navigateur n'arrivant pas à charger l'image, cela déclenche un erreur et le handler de _error_ est appelé.

</small>

-----

## Événements du navigateur

### Redimensionnement de la fenêtre

La fonction `$.resize()` permet de gérer l'évènement lié au redimensionnement de la fenêtre.

```javascript
$(window).resize(function() {
  $("body").text($(window).width());
});
```

:information_source: Le code ci-dessous attache un gestionnaire d'évènements à la fenêtre. Lorsque la dimension de celle-ci change, sa nouvelle largeur est affiche dans le `<body>`


-----

## Événements du navigateur

### Défilement vertical

La fonction `$.scroll()` permet de réagir lorsque l'utilisateur fait défiler (_scroll_) le contenu de la page ou d'un élément HTML (avec le style `overflow: scroll`) à l'aide de l'ascenceur latéral ou de la molette de la souris.

On pourra ensuite récupérer la position verticale du défilement à l'aide de la fonction `$.scrollTop` de jQuery (qui permet également de fixer une position).

-----

## Événements du navigateur

### Défilement vertical : exemple

<small>

<gx-label>HTML</gx-label>

```
<div id="target">Lorem ipsum ... (mettre beaucoup de texte)
</div>
```

<gx-label>CSS</gx-label>

```css
#target { overflow: scroll;  idth: 200px; height: 100px; }
```

<gx-label>Javascript</gx-label>

```javascript
$( "#target" ).scroll(function() {
  console.log("La page a défilé de " + 
              $("#target").scrollTop() + "pixels");
});
```


:information_source: Dans ce code, on force l'élément `#target` a déborder en HTML et CSS, tandis qu'en Javascript on attache une fonction qui réagit au défilement et affiche la position de l'ascenceur dans la console.

:arrow_right: Voir  https://jsfiddle.net/glenux/ybexomau/ pour l'exemple interactif.

</small>


----

## Merci pour votre attention