 
<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement

### Introduction aux évènements

<!-- 05/01 Document -->

----

### Introduction aux évènements

La bibliothèque jQuery fournit également des fonctions pour faciliter la gestion des évènements HTML, avec plusieurs avantages :

- la syntaxe est simplifiée : `onclick` devient `click`, `onmouseover` devient `mouseover`, etc.
- il est facile de mettre le même gestionnaire d'événement sur tout un ensemble d'éléments
- facilité de mettre en place du code non intrusif
- les différences entre navigateurs sont gommées
- faciliter de passer des données aux événements (au format JSON)

----

## Les gestionnaires d'évènements

### Les noms de fonctions

Les fonction jQuery de gestion des évènements ont la structure suivante :

```
$.eventName(params)
```

Où _eventName_ est nom de l'événement : `$.click()`, `$.submit()`, etc.

----

## Les gestionnaires d'évènements

### Les paramètres

Ces différentes fonctions de gestion d'évènement peuvent prendre différente choses en paramètre :

* `eventName(handler)` : soit une simple fonction
* `eventName([eventData],handler)` : soit un couple données + fonction

----

## Les gestionnaires d'évènements

### Les paramètres (suite)

Dans les deux cas :

* _handler_ sera invoquée lors du déclenchement de l'évènement . Cette fonction peut retourner `false`pour arrêter la remontée de l'évènement
* _eventData_ est une donnée sous forme JSON qui peut être passé au gestionnaire d'événements

----

## Les _handlers_ et l'objet évènement

Les fonction _handlers_ enregistrées dans les gestionnaires d'évènement recoivent un objet de type jQuery.Event en paramètre lors de leur invocation.

Cet objet restructure et normalise les différentes implémentation des objets événement des navigateurs :

- target, relatedTarget, pageX, pageY, wich, metaKey 
- d'autres propriétés sont copiées, qui peuvent être undefined selon l'événement
- altKey, bubbles, button, cancelable, charCode, clientX, clientY, screenX, ...

---

## Merci pour votre attention
