<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler les sélecteurs

### Exercice : une liste de tâches (statique mais filtrable)

<!-- 02/04 EXERCICE -->

----

### Objectif

Durant cet exercice, vous allez mettre en pratique vos derniers acquis et  travailler sur la mise en place et l'utilisation de jQuery dans un cas réel. 

En d'autres termes, il s'agit de :

1. créer une page HTML/CSS simple
2. intégrer jQuery dans la page HTML
3. faire réagir la page au clic de l'utilisateur 
4. changer le style CSS des éléments concernés grâce à jQuery

----

## Contexte

__L'objectif est de fabriquer une _to-do list___ (en français: _une liste de tâche_).

Dans cette exercice, la liste sera statique, c'est à dire qu'elle sera pré-remplie et nous ne pourrons pas ajouter ou retirer de taches.

Ce qui va nous intéresser c'est la possibilité de __filtrer les tâches, et n'afficher que celles qui ont un certain état__, parmi les suivants : 

* tâches à faire 
* tâches terminées 
* toutes les tâches

----

### Consigne

Vous allez créer une page HTML/CSS qui ressemblera à ceci : 

![](images/enonce_structure_html.png?b)

----

### Consigne (suite)

Les textes "en cours", "terminées" et "toutes" seront des boutons. Ils possèderont un attribut `onClick` qui appellera pour chacun une fonction javascript différente.

__À vous d'implémenter ces trois fonctions javascript__ dont le rôle est respectivement :

* d'afficher __seulement les tâches "en cours"__
* d'afficher __seulement les tâches "terminées"__
* d'afficher __toutes les tâches__

----

## Contraintes

L'objet n'est pas de respecter le design, mais __d'avoir une structure de balises qui permette de manipuler tout ça.__

__Voici le code imposé pour les tâches__ (ici les deux premieres tâches de la liste) :

<gx-label>HTML</gx-label>

```
<p class="task">
  <input type="checkbox" id="task-1" />
  <label for="task-1">Acheter du savon</label>
</p>
<p class="task">
  <input type="checkbox" id="task-2" checked />
  <label for="task-1">Acheter des lentilles</label>
</p>
<!-- [...] -->
```


----

<!----

## Déroulement

---->

## Merci pour votre attention

### Bon courage à tous ! 

_N’hésitez pas à nous solliciter pour tout complément d’info, conseil ou précision… le plus tôt sera toujours le mieux !_

### Post-scriptum

Pour faire un CSS identique à l'énoncé, lisez  comment [personnaliser l’aspect de boutons radio et checkbox en CSS](https://www.creativejuiz.fr/blog/tutoriels/personnaliser-aspect-boutons-radio-checkbox-css), __mais ce n'est pas le sujet de l'exercice__ :innocent: .