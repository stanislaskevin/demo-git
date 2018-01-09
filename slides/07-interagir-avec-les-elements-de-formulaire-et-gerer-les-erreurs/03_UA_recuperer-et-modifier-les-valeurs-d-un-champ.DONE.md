<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Interagir avec les éléments de formulaire et gérer les erreurs

### Récupérer et modifier les valeurs d’un champ

<!-- 07/02 Document -->

----

## Récupérer et modifier les valeurs d’un champ

Nous avons vu, en amont dans le cours, la lecture et la modification des attributs et des propriétés en jQuery.

Même si la manipulation des valeurs du champ est possible avec les techniques déjà vues, il existe une fonction spécifique qui facilite ce travail.

Voyons cela en détail.

----

## Obtenir la valeur d'un champ

La méthode `.val()` est utilisée pour obtenir la valeurs des éléments de formulaire tels que `<input>`, `<select>` et `<textarea>`. Lorsqu'il est appelé sur une collection vide, il renvoie `undefined`.

<gx-label>Javascript</gx-label>

```javascript
// la valeur d'un champ de texte
var x = $("input.something").val(); 

// la valeur d'une checkbox
var y = $("select#foo option:checked").val(); 
```

----

## Modifier la valeur d'un champ

La méthod `.val(value)` peut également être utilisée avec un paramètre. Auquel cas elle modifie la valeur du champ concerné :

* si le paramètre est un _string_, alors le texte est mis comme valeur du champ ;
* si le paramètre est une fonction, sa forme est `callback( index, value )` où _index_ est l'indice de l'élément dans la collection est _value_ est sa valeur de départ. La nouvelle valeur prends la valeur de retour de la fonction.

<gx-label>Javascript</gx-label>

```javascript
$( "button" ).click(function() {
  var text = $( this ).text();
  $( "input" ).val( text );
});
```

----

## Merci pour votre attention
