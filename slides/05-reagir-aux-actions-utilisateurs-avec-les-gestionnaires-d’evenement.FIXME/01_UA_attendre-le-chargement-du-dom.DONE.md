<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Réagir aux actions utilisateurs avec les gestionnaires d’évènement.

### Chargement de la page et du DOM

<!-- 05/01 Document -->

----

## Attendre le chargement des éléments

Pour gérer des évènements liés à des éléments HTML de la page, il est nécessaire __d'attendre que l'ensemble des éléments HTML concernés sur la page soient bien chargés et existent dans le DOM__ avant de pouvoir leur attacher des actions.

Là encore jQuery propose une solution simple et unifiée.

----

## Attendre le chargement du DOM 

### Écriture explicite

La fonction `$(document).ready()` permet d'attacher une fonction au chargement de la page. Celle-ci sera executée uniquement quand votre page sera pleinement chargée.

<gx-label>Javascript</gx-label>

```javascript
$(document).ready(function () {
// ...
});
```

jQuery vous permet même d'avoir plusieurs`$(document).ready()` dans votre code javascript. Ils seront chargés les uns après les autres, dans l'ordre où ils ont été attachés.

----

## Attendre le chargement du DOM 

### Écriture simplifiée (implicite)

La fonction `$(document).ready()` possède également une forme raccourcie. 

Pour cela il suffit simplement de passer une fonction en paramètre du `$()` de jQuery !

<gx-label>Javascript</gx-label>

```javascript
$(function () {
// ...
});
```

----

## Merci pour votre attention
