<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement.

### Les évènements clavier

<!-- 05/03 Document -->

----

## Les évènements clavier

Comme pour la gestion de la souris, jQuery propose une ensemble de fonctions pour la gestion des évènements claviers. 

Voyons dans les pages suivantes comment cela fonctionne.

-----

## Les évènements clavier

### Les fonctions

Les fonctions `$.keydown()` et `$.keyup()` sont invoqué respectivement lors de l'appui d'une touche du clavier et lors de son relachement.

La fonction `$.keypress()` réunit les deux évènements précédents : elle invoqué lors de l'appui d'une touche du clavier. Cependant cette dernière ne gère pas les évènements liés aux touches spéciales (Shift, Ctrl, Esc, ...) lorsqu'elles sont appuyées seules.

----

## Les évènements clavier

### Informations sur les touches utilisées

L'objet `event` passé au _handler_ nous permet d'avoir plus de détails sur la touche (ou la combinaison de touche) pressée :

* `event.which` indique le __code de la touche utilisée__
* `event.ctrlKey` : indique si la touche CTRL est utilisée
* `event.altKey` : indique si la touche ALT est utilisée
* `event.shiftKey` : indique si la touche SHIFT est utilisée
* `event.metaKey` : indique si la touche META est utilisée
 
----


## Les évènements clavier

### Exemple

<small>

<gx-label>HTML</gx-label>

```html
<form>
  <fieldset>
    <label for="target">Tapez quelque chose :</label>
    <input id="target" type="text">
  </fieldset>
</form>
```

<gx-label>Javascript</gx-label>

```javascript
$("#target").keypress(function(event) {
  if ( event.which == 13 ) { event.preventDefault(); }
  var msg = "Touche '" + event.key + "' détectée !";
  console.log(event);
});
```


:arrow_right: Ce code détecte les touches pressées dans le champ de texte du formulaire. Il empêche l'appui sur ENTRÉE (code 13) et affiche dans la console les informations sur l'évènement. 
Voir https://jsfiddle.net/glenux/hLw8hku4/1/ pour un exemple interactif.


</small>


----

## Merci pour votre attention
