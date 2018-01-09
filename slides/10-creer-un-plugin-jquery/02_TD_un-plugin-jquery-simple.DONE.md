<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Créer un plugin jQuery.

### Un plugin jQuery simple

<!-- 10/02 TD -->


----

## Exemple de plugin avec paramètres

Dans cet exemple nous allons créer un plugin permettant d'ajouter les propriétés CSS color et background-color avec des valeurs par défaut à un élément.

### Déclaration du plugin

<gx-label>Javascript</gx-label>

```javascript
(function($) {
  $.fn.myPlugin = function( options ) {
    // Déclarations de valeurs par défaut
    var settings = $.extend({
      color           : '#09f',
      backgroundColor : "#f90"
    }, options );

    // Application des valeurs 'par défaut si non renseignées'
    return this.css({
      color           : settings.color,
      backgroundColor : settings.backgroundColor
    });

  };
})(jQuery);
```

----

## Exemple de plugin avec paramètres

### Utilisation du plugin

```
$('.box').myPlugin({color: 'orange'});
```

----

## Merci pour votre attention

----

## Merci pour votre attention
