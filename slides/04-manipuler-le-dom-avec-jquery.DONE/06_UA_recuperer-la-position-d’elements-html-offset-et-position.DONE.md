<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Positionnement d’éléments HTML

<!-- 04/06 Document -->

----

## Positionnement d’éléments HTML

Un autre des avantages de jQuery est la capacité de gérer la position des éléments sur la page, ce qui n'est pas toujours facile en CSS.

Pour cela il met à disposition les fonctions suivantes :

* `.position()`
* `.offset()`

Voyons comment elles fonctionnent.

----


## Positionnement d’éléments HTML

### Position relative... au parent

La fonction `.position()` : retourne sous forme d'objet la __position par rapport à l'élément parent__. 

La réponse a la structure suivante : 

```javascript
{ 
  top: 20 ,  // pixels à partir du bord haut
  left: 50   // pixels à partir du bord gauche
}
```

----

## Positionnement d’éléments HTML

### Position relative... au document

La fonction `.offset()` : retourne sous forme d'objet la position __relative au document__ (donc absolue). 

La réponse possède également une structure `{top: ..., left: ...}`

Il est également possible de fournir un paramètre à `.offset` :

* soit une paire de coordonnées, pour lui indiquer la nouvelle position de l'élément HTML.
* soit une fonction qui retourne une paire de coordonnées

----

## Positionnement d’éléments HTML

### En résumé

![35% center](./images/positionnement.png?t=2)

<small>

:arrow_right: Voir https://jsfiddle.net/glenux/42yfb08d/3/ pour un exemple interactif

</small>

----

## Merci pour votre attention
