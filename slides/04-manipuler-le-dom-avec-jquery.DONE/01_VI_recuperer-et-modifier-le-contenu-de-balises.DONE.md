<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->
	
<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Récupérer et modifier le contenu de balises HTML

<!-- 04/01 Vidéo (screencast) -->

----


## Récupérer et modifier le contenu HTML des balises 

La méthode `.html()` permet de lire et modifier le contenu HTML d'un élément. Cette méthode utilise la propriété `.innerHTML` des navigateurs 


### Lire le contenu HTML

- `.html()` : lit le contenu texte d'un élément et de ses descendants

----

## Récupérer et modifier le contenu HTML des balises 

### Écrire le contenu HTML

- `.html(htmlString)` : met à jour le contenu d'un élément 
- `.html(function(index,html))` : met à jour le contenu d'un élément par une fonction recevant l'indice de l'élément dans la collection et sa valeur actuelle

----

## Récupérer et modifier le contenu textuel des balises

La méthode `.text()` permet de lire et modifier le contenu d'un élément sous forme textuelle. Si des balises sont incluses dans les mises à jour, les caractères `<` et `>` seront transformés en entité `&lt;` et `&gt;`

### Lire le contenu textuel

- `.text()` : lit le contenu texte d'un élément et de ses descendants

----

## Récupérer et modifier le contenu textuel des balises

### Écrire le contenu textuel

- `.text(textString)` : met à jour le contenu d'un élément
- `.text(function(index,text))` : met à jour le contenu d'un élément avec une fonction recevant l'indice de l'élément dans la collection et sa valeur actuelle

----

## Récupérer et modifier le contenu de balises HTML

Voyons, en vidéo, ce que cela donne dans de vrais exemples de code :

### Manipuler le HTML

<https://www.lynda.com/fr/jQuery-tutoriels/text-val/193138/343004-4.html>

### Manipuler le texte

<https://www.lynda.com/fr/jQuery-tutoriels/html/193138/343007-4.html>

----

## Merci pour votre attention

