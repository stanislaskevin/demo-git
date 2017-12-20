<!-- footer: Copyright 2017 Â© Glenn ROLLAND â€“ Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Manipuler la structure du DOM

<!-- 04/08 QCM -->

----


## Pour ajouter l'élément A dans l'élément B, j'utilise :

<small>

_Cochez LA ou LES bonnes réponses, puis cliquez sur VALIDER pour continuer_

### `$(B).append(A)`

> BONNE RÉPONSE

### `$(A).append(B)`

> ERREUR : Malheureusement c'est une mauvaise réponse. La fonction`.append()` du contenu à l'élément sélectionné par $(), ici B à l'intérieur de A.

### `$(A).appendTo(B)`

> BONNE RÉPONSE

</small>


----

## Pour récupérer la hauteur de A, avec son padding mais sans bordure, j'utilise :

<small>

### `$(A).innerHeight()`

> BONNE RÉPONSE

### `$(A).outerHeight()`

> ERREUR : outHeight() inclut le border... et même la marge, le paramètre est fixé à true.

### `$(A).height()`

> ERREUR : height() n'inclut que la taille du contenu, sans le padding !

</small>

----

## Merci pour votre attention

