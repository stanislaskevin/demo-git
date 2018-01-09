<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Parcourir le DOM avec les méthodes de traversing.

### Traiter et filtrer les éléments HTML d’une collection

<!-- 06/06 Document -->

----

### Traiter et filtrer les éléments HTML d’une collection

Nous utilisons depuis le début du cours la fonction `$(...)` pour faire une requête jQuery qui trouve et retourner une collection d'un ou plusieurs éléments sur lesquels agir ensuite.

Lorsqu'on manipule ces éléments, il est fréquent d'avoir besoin : 

* de filtrer et réduire cette liste en fonction de nouveaux critères ;
* d'appliquer une fonction à chaque élément choisi.

Voyons ensemble comment faire ces différentes opérations.

----

## Réduire une collection à un sous-ensemble

### En gardant seulement les éléments sélectionnés

La méthode `.filter(selecteur)` réduit l'ensemble des éléments sélectionnés à ceux qui passent le filtre.

Le `selecteur` peut être : 

* soit une chaine de caractère qui décrit un selecteur CSS
* soit une fonction qui s'appliquera 
* soit un ensemble d'éléments HTML ou jQuery 

:blue_book: Lire http://api.jquery.com/filter/ pour la documentation complète de la méthode.

----

## Réduire une collection à un sous-ensemble

### En excluant tout les éléments sélectionnés

La méthode `.not(selecteur)` réduit l'ensemble des éléments sélectionnés à ceux qui ne passent PAS le filtre.

La méthode `.not(...)` produit donc l'inverse de la méthode `.filter(...)` .

:blue_book: Lire http://api.jquery.com/not/ pour la documentation complète de la méthode.

----

## Réduire une collection à un sous-ensemble

### Selon la position des éléments

La méthode `.slice(debut,fin)` réduit l'ensemble des éléments sélectionnés à ceux qui sont entre deux positions :

* Lorsque que le paramètre _fin_ n'est pas indiqué, les éléments suivants de la collection sont tous supprimés ;
* Lorsque la valeur de _debut_ ou de _fin_ est négative, la position de _debut_ ou de _fin_ est comptée à l'envers, à partir du dernier élément de la collection.

:blue_book: Lire http://api.jquery.com/slice/ pour la documentation complète de la méthode.

----

## Parcourir une collection

La méthode `.each(callback)` : applique une fonction sur chaque élément de la sélection.

La fonction _callback_ est de la forme : `callback(index,value)` et lorsqu'elle est appelée, la variable `this` est fixée à la valeur de l'élément concerné dans la collection.

:blue_book: Lire http://api.jquery.com/each/ pour la documentation complète de la méthode.

----

## Parcourir une collection

### Exemple

```
$( "li" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});
```

Le code ci-dessus parcourt la liste des éléments `li` trouvés par la fonction `$(...)` et,  pour chacun, affiche son index et le texte que cet élément `li` contient.

----

## Transformer une collection

La méthode `.map(callback)` permet de transformer une collection en appliquant à chaque valeur la fonction _callback_ :

* la valeur de retour de la fonction _callback_ remplace la valeur initiale de chaque élément dans le résultat ;
* si la valeur de retour vaut `null`, alors l'élément concerné est retiré du résultat (et cela équivaut à un filtrage).


:blue_book: Lire http://api.jquery.com/map/ pour la documentation complète de la méthode.

----

## Transformer une collection

### Exemple

```
$( ":checked" ).map(function() {
	return this.id;
})
```

Ce code liste les éléments cochés puis, pour chacun d'entre eux, remplace l'élément par son identifiant (attribut id). La collection finale contient donc seulement des identifiants.

:arrow_right: Voir https://jsfiddle.net/tpuLbubr/ pour un exemple interactif.

<!-- 
## Transformer une collection

http://api.jquery.com/jquery.each/

http://api.jquery.com/jquery.map/
-->

----

## Merci pour votre attention
