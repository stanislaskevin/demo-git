<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Interagir avec les éléments de formulaire et gérer les erreurs.

### Les évènements de formulaire

<!-- 07/01 Document -->

----

##  Les événements du formulaire

Comme le reste de la page, les éléments du formulaires sont soumis aux évènements du clavier et de la souris.

Cependant, ils fournissent également tout un lot d'évènement spécifiques : 

* quand le formulaire est envoyé ;
* quand l'utilisateur passe d'un champ à l'autre ;
* quand le contenu d'un champ est modifié.

Voyons cela en détail.

----

## Gestion de l'envoi de formulaire

L'envoi de formulaire correspond à l'évènement `'submit'`.

On peut attacher une fonction pour gérer cet évènement avec `.on('submit', callback)` ou directement avec la méthode `.submit(callback)` .

----

## Gestion de l'envoi de formulaire

### Exemple

<gx-label>HTML</gx-label>

```javascript
<form id="target" action="destination.html">
  <input type="text" value="Hello there">
  <input type="submit" value="Go">
</form>
```

<gx-label>Javascript</gx-label>

```javascript
$( "#target" ).submit(function(event) {
  alert("Le gestionnaire  .submit() a été appelé !");
  event.preventDefault();
});
```

Ce code attache une fonction qui alerte l'utilisateur lorsqu'il essaye d'envoyer du formulaire.

L'utilisation de `event.preventDefault()` empêche l'envoi réel du formulaire au serveur et le rafraîchissement de la page.

----

## Forcer l'envoi de formulaire

Comme pour la méthode `.click()` qui peut être utilisée pour fabriquer des clics artificiels, on peut également forcer l'envoi du formulaire.

Pour cela il suffit d'appeler la méthode `.submit()` sans paramètres et sur l'élément formulaire concerné.

<gx-label>Javascript</gx-label>

```javascript
$( "#something" ).click(function() {
  $( "#that-form" ).submit();
});
```

----

## Prise et perte de focus 

__Dans le formulaire, chaque champ est capable d'informer la page sur son état de focus__, c'est à dire quand la zone de saisie est modifiable : 

- `.focus()` ou `.on('focus', ...)` pour la prise de focus
- `.blur()` ou `.on('blur', ...)` lors de la perte de focus

Il existe également deux évènements `'focusin'` et `'focusout'` qui se produisent respectivement quand un élément ou un de ses fils gagne le focus, et quand quand un élément ou un de ses fils perd le focus.

:blue_book: Lire https://api.jquery.com/focus/ et  https://api.jquery.com/blur/ pour la documentation complète des méthodes.

----

## Sélection et modification

Les champs de saisie sont également capable d'envoyer les évènement suivants :

- `.select()` ou `.on('select', ...)` : lors de la sélection d'un texte
- `.change()` ou `.on('change', ...)` quand le contenu est changé

:blue_book: Lire  https://api.jquery.com/select/ et  https://api.jquery.com/change/ pour la documentation complète des méthodes.

----

## Merci pour votre attention
