<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Créer un plugin jQuery.

### Créer le squelette de son plugin

<!-- 10/01 Document -->

----

## Créer le squelette de son plugin

Dans cette partie nous allons créer notre propre plugin jQuery.

Pour cela il y a seulement deux étapes : 

1. déclarer le plugin dans l'objet `$.fn` ;
2. puis l'appeler.

Voyons cela plus en détails dans les prochaines pages.

----

## L'objet jQuery.fn

__L'objet `$.fn` (ou `jQuery.fn`) est celui qui sert de modèle à tous les objets créés par jQuery avec la fonction `$(..)`.__

C'est cet objet qui contient toutes les fonctions que vous pouvez appeler sur une collection et qui vous permet d'écrire `$(selector).show()`, `$(selector).css(...)`, etc.

Pour intégrer de nouvelles fonctionnalités à jQuery, il suffit donc d'ajouter de nouvelles fonctions dans cet objet.

----

## Déclarer un plugin

### Ajouter _une_ fonction dans $.fn

Pour ajouter une fonction dans l'objet `jQuery.fn`, il suffit de l'ajouter de lui ajouter une nouvelle propriété javascript :

<gx-label>Javascript</gx-label>

```javascript
$.fn.nomDuPlugin = function(parametres, ...) {
  // Ici votre code
};
```

----

## Déclarer un plugin

### Ajouter _plusieurs_ fonctions dans $.fn

Lorsque votre plugin doit ajouter plusieurs fonctions aux objets jQuery, il est plus commode d'utiliser la fonction `$.fn.extend(ref)`. 

Cette méthode ajoute d'un seul coup toutes les propriétés de l'objet `ref` comme méthodes dans l'objet `$.fn` :

<gx-label>Javascript</gx-label>

```javascript
$.fn.extend({
  actionUnDuPlugin: function(parametres, ...) {
  // Ici le code de votre première fonction
},
  actionDeuxDuPlugin: function(parametres, ...) {
  // Ici le code de votre seconde fonction
});
```

----

## Utiliser son plugin

Dès lors que vous avez ajouté des fonctions à `$.fn` et que votre plugin est chargé dans votre page web, elles sont utilisables. Il reste à utiliser ces fonctions dans le reste de votre code javascript :

<gx-label>Javascript</gx-label>

```javascript
$('#elem').nomDuPlugin(58);
$('#elem').actionUnDuPlugin(42);
$('#elem').actionDeuxDuPlugin(42);
```

Bien entendu, ces méthodes prendront soit aucun, soit un, soit plusieurs paramètres... en fonction de ce que vous avez écrit comme code dans leur déclaration.

----

## Bonnes pratiques

### Nommage du plugin

Il est d'usage que chaque plugin jQuery soit écrit sous la forme d'un fichier nommé `jquery.XXX.js` où `XXX` représente le nom du plugin, suivi de son numéro de version et d'une éventuelle information sur sa minification, par exemple : `jquery.superplugin-1.5.1.js`,  `jquery.plugingenial-3.5.0.min.js` 

:blue_book: Voir <https://plugins.jquery.com/docs/names/> pour de plus amples informations sur le nommage des plugins.

----

## Bonnes pratiques

### Structure du plugin

Il est recommandé, lorsque vous écrivez un plugin :
* d'englober votre code dans une fermeture (_closure_ en anglais) pour éviter les débordement dans `window` 
* et de forcer l'interprétation de votre code javascript en _mode strict_.

<gx-label>Javascript</gx-label>

```javascript
(function($) {
  "use strict";
  
  $.fn.nomDuPlugin = function(parametre, …) {
  // Ici votre code
  };
})(jQuery);
```

----

## Merci pour votre attention
