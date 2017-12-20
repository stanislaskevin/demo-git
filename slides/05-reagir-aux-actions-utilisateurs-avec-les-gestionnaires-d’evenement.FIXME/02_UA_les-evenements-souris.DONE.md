<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement.

### Les évènements souris

<!-- 05/02 Document -->

----

## Les événements souris

Parmi les gestionnaires d'évènement de jQuery une grande partie sont liés à l'interactivité. On retrouve ainsi tout le nécessaire pour réagir :

- au déplacement du curseur,
- à l'entrée, à la sortie, et au survol des différents éléments de le page
- au clic, au double-clic, et aux différents états des boutons de la souris

----

## Appui sur les boutons de la souris

### Clic et double-clic

Les fonctions `$.click()`et `$.dblclick()` permettent, respectivement, d'attacher un _handler_ au clic ou au double-clic sur un élément de la page.

__Ces deux événements ne doivent pas être utilisés ensemble sur le même élément__ : jQuery ne peut pas distinguer un double-clic commencé d'un simple clic terminé.

----

## Appui sur les boutons de la souris

### Clic et double-clic (exemples)

<gx-label>Javascript</gx-label>

```javascript
$('.produit').click(function() {
  $(this).hide();
});
```

:arrow_right: Ce code appelle la fonction `$.hide()`, pour masquer l'élément avec la classe `produit` visé par le clic

<gx-label>Javascript</gx-label>

```javascript
$("p").dblclick(function () {
  $(this).hide();
});
```


:arrow_right: Ce codes appelle la fonction `$.hide()`, pour masquer l'élément `<p>` visé par le double-clic

----

## Appui sur les boutons de la souris

### Pression et relâchement sur les boutons

Les fonctions `$.mousedown()`, `$.mouseup()` permettent la gestion de l'appui sur chacun des boutons de la souris. Ces fonctions permettent, respectivement, de savoir lorsqu'un bouton de souris est pressé ou relaché.

On retrouvera l'information sur le bouton de souris concerné dans le paramètre `event.which` du _handler_.

----

## Appui sur les boutons de la souris

### Pression et relâchement sur les boutons (exemple)

<small>

<gx-label>Javascript</gx-label>

```javascript
$('body').mousedown(function(event) {
    switch (event.which) {
        case 1:
            console.log("Pression du bouton gauche");
            break;
        case 2:
            console.log("Pression du bouton central");
            break;
        case 3:
            console.log("Pression du bouton droit");
            break;
        default:
            console.log("Votre souris est bizarre...");
    }
});
```

:arrow_right: Ce code détecte tous clics sur la page et affiche dans la console quel est le bouton de la souris concerné.

</small>

----

## Gestion mouvements de la souris

### Entrée et sortie des éléments

Les fonctions `$.mouseenter()`, `$.mouseleave()` permettent respectivement de réagir à l'entrée, puis la sortie d'un élément HTML.

On peut également utiliser la fonction`$.hover()` avec deux _handlers_ si l'élément HTML est concerné par les deux évènements.

----

## Gestion mouvements de la souris

### Survol d'éléments HTML : exemple n°1

<small>

<gx-label>HTML</gx-label>

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Chips</li>
  <li>Socks</li>
</ul>
```

<gx-label>Javascript</gx-label>

```javascript
$( "li" ).hover(function() {
  $(this).append( $("<span> ***</span>") );
});
$("li").mouseleave(function() {
  $(this).find("span:last").remove();
});
```

:arrow_right: Ce code ajoute une balise `<span>` quand la souris entre sur un élément `<li>` et le retire quand elle sort

</small>

----


## Gestion mouvements de la souris

### Survol d'éléments HTML : exemple n°2

<small>

<gx-label>HTML</gx-label>

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Chips</li>
  <li>Socks</li>
</ul>
```

<gx-label>Javascript</gx-label>

```javascript
$( "li" ).hover(function() {
    $ this).append($( "<span> ***</span>"));
}, function() {
    $(this).find("span:last").remove();
});
```

:arrow_right: Ce code ajoute une balise `<span>` quand la souris entre sur un élément `<li>` et le retire quand elle sort... mais en utilisant `$.hover()`

</small>

----

## Gestion mouvements de la souris

### Déplacement de la souris

La fonction `$.mousemove` permet de réagir à chaque déplacement de la souris.

On pourra récupérer la position du curseur avec les paramètre `event` du _handler_. Les propriétés `event.pageX` et `event.pageX` désignent alors la position relative du curseur dans la fenêtre du navigateur.

### Exemple

Vous pouvez voir sur https://jsfiddle.net/glenux/2bsm9cdh/ un exemple interactif de l'utilisation de cette fonction


----

## Merci pour votre attention
