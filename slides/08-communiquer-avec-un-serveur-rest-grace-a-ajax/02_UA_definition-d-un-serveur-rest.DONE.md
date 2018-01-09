<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Communiquer avec un serveur REST grâce à AJAX.

### Définition d’un serveur REST

<!-- 08/01 Document -->

----

### Définition d’un serveur REST

__REST signifie Representational State Transfer.__ C'est un type d'architecture logicielle pour les systèmes distribués. 

REST est actuellement considéré comme l'un des modèles de conception d'API web prédominants.

----

## Objectifs de REST

D'après Wikipedia, une architeture REST doit respecter :

- __Distinction des responsabilité__ entre le client (affichage) et le serveur (traitements des données)
- __Un serveur sans état__ et des requêtes qui contiennent toute l'information nécessaire
- __La possibilité de mise en cache__ coté client ou coté serveur marquée dans les en-têtes HTTP
- __Une interface uniforme__ qui identifie les ressources et structure les données et leurs interactions
- __Un architecture en couches__, où chaque composant voit seulement ceux avec lesquels il interagit directement

:blue_book: Voir l'article [REST sur Wikipedia](https://fr.wikipedia.org/wiki/Representational_state_transfer) pour la définition détaillée.

----

## Avantages de REST

- une application plus simple à entretenir
- une indépendance entre le client et le serveur
- possibilité de ne pas avoir à maintenir une connexion permanente entre le client et le serveur (le serveur peut ainsi répondre à d'autres requêtes venant d'autres clients sans saturer l'ensemble de ses ports de communication)
- la possiblité de répartir les requêtes sur plusieurs serveurs

----

## Structure d'une API REST

### Collection (liste d'éléments)

Forme de l'URL : http://api.exemple.com/ressources/

Méthode HTTP : 

* GET : Liste les URIs et peut-être d'autres détails des membres de la collection.
* PUT : Remplace la collection entière par une autre collection.
* POST : Crée une nouvelle entrée dans la collection. L'URI de la nouvelle entrée est assignée automatiquement et est retournée par cette opération7.
* DELETE : Supprime l'entière collection

----

## Structure d'une API REST

### Élement

Forme de l'URL : http://api.exemple.com/ressources/item17

Méthode HTTP : 

* GET : Récupérer une représentation du membre adressé de la collection, exprimé dans un type de média Internet approprié.
* PUT :  Remplace le membre adressé de la collection, ou s'il n'existe pas, le crée.
* POST : Généralement non utilisée. Elle Traite le membre adressé en tant que collection à part entière et crée une nouvelle entrée en son sein
* DELETE :  Supprime le membre adressé de la collection.


----

## Merci pour votre attention
