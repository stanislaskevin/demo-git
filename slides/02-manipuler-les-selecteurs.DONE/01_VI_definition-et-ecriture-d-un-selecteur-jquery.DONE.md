<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler les sélecteurs

### Définition et écriture d'un sélecteur jQuery

<!-- 02/01 Vidéo (screencast) -->

----

## Définition et écriture d'un sélecteur jQuery

Comprendre la notion de sélecteur est essentiel pour utiliser les fonctions jQuery, car tout jQuery repose sur une seule fonction `jQuery()`, qui s'écrit également `$()` .

__Cette fonction sert à trois choses :__

- trouver un ensemble d'éléments
- executer une fonction lorsque le DOM sera chargé
- transformer un objet DOM en objet jQuery

----

## Définition et écriture d'un sélecteur jQuery

Comprendre la notion de sélecteur est essentiel pour utiliser les fonctionalités de jQuery, car la majeure partie de jQuery fonctionne sur le schéma suivant :

1. demander un certain type d'objets sur la page (on parlera de _requête_),
2. trouver un ensemble d'éléments sur la page (on parlera de _collection_ d'objet en résultat),
3. appliquer une ou plusieurs fonctions aux éléments trouvés.

Les sélecteurs en jQuery ressemblent énormément aux sélecteurs CSS. Voyons ensemble leur syntaxe.

----

## Définition et écriture d'un sélecteur jQuery

### Par types de balise

```javascript
$("tagname")
```

... où _tagname_ est le nom de la balise de l'élément visé (ex: `h1`, `h2`, `ul`, `li`...)

### Par classes CSS

```javascript
$(".classname")
```

... où _classname_ est le nom de la classe CSS de l'élément visé.

----

## Définition et écriture d'un sélecteur jQuery

### Par identifiants CSS

```javascript
$("#identifier")
```

où _identifer_ correspond à l'`id` de l'élément visé

### Par attributs

```javascript
$("[attr='val']")
```

où _attr_ est l'attribut et _val_ la valeur de l'élément visé

----
## Définition et écriture d'un sélecteur jQuery

### Pseudo-classes

```javascript
$(":something")
```

Comme CSS, jQuery accepte aussi des pseudo-classes, pour 

* la position : `:first` , `:last` , `:even` , `:odd` , `:eq(index)` ...
* les champs de formulaires  `:text` , `:password` , `:radio` , `:checkbox` ...
* la valeur des attributs `:enabled` , `:disabled` , `:selected` , `:checked` ...

:warning: __Note :__ les pseudo-classes des sélecteurs jQuery peuvent parfois différer de ceux de CSS.

----

## Illustration en vidéo

Maintenant que vous avez quelques notions, voyons comment utiliser cette syntaxe dans des cas réels, en vidéo :

:arrow_forward: <https://www.lynda.com/fr/jQuery-tutoriels/Principe-utilisation-jQuery/193138/342964-4.html>


<!--

https://www.lynda.com/fr/jQuery-tutoriels/selecteurs-peuvent-etre-affines/193138/342971-4.html

https://www.lynda.com/fr/jQuery-tutoriels/selecteurs-jQuery/193138/342974-4.html

https://www.lynda.com/fr/jQuery-tutoriels/contextes-selection-jQuery/193138/342979-4.html

-->

----

## Merci pour votre attention 
