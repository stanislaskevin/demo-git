<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement.

### Déclancher programmatiquement des évènements

<!-- 05/06 Document -->

----

## Déclancher programmatiquement des évènements

### Déclancheur

La fonction `$.trigger()` permet d'actionner un évènement sur l'élément HTML choisi.

La forme  `$.trigger(eventType, params)` permet de passer un objet JSON qui sera reçu par l'élément HTML concerné par l'évènement.



----

## Déclancher programmatiquement des évènements

### Déclancheur : exemple

<small>

```
<button id="direct">Clic direct</button>
<button id="indirect">Clic indirect</button>
<p id="log">0 clics</p>
```

```
$(function() {
  var count = 0;
  $('#direct').click(function () {
    count += 1;
    $('#log').text(count + ' clics');
  });
  $('#indirect').click(function () {
    $('#direct').trigger('click');
  });
});
```


:information_source: Dans ce code, le clic sur le bouton _#direct_ incrémente le compteur, tandis qu'un clic sur _#indirect_ simule un clic sur _#direct_... qui incrémente aussi le compteur.

:arrow_right: Voir https://jsfiddle.net/glenux/wfb66v8b/1/ pour un exemple interactif.
</small>

----

## Évenements sur-mesure

Avec jQuery, __on peut également définir des évènements sur mesure, qui fonctionneront alors comme les évènements habituels__ avec `$.trigger()`, `$.on()` et `$.off()`.

On prendra l'habitude de préfixer nos éléments sur-mesure par une chaine de caractères suivie de `:` (ex: `lights:on`, `lights:off`, `lights:toggle`, etc.)

----

## Évenements sur-mesure

### Exemple

<small>

```
<button id="direct">Incrément</button>
<p id="log">0 clics</p>
```

```
var count = 0;
$('body').on('counter:increment', function () { 
  count += 1; 
  $('#log').text(count + ' clics'); 
});

$('#direct').click(function () { 
  $('body').trigger('counter:increment'); 
});
```

:information_source: Ce code attache au bouton le déclenchement de `counter:increment`, un évènement sur-mesure dont le travail est d'incrémenter un  compteur.

:arrow_right: Voir https://jsfiddle.net/glenux/wfb66v8b/3/ pour un exemple interactif plus complet.

</small>

----

## Merci pour votre attention
