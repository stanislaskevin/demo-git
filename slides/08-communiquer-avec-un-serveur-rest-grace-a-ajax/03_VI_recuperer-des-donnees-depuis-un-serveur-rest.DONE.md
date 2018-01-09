<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Communiquer avec un serveur REST grâce à AJAX

### Récupérer des données depuis un serveur REST avec jQuery

<!-- 08/03 Vidéo (screencast) -->

----

### Récupérer des données depuis un serveur REST avec jQuery

jQuery possède un support excellent pour AJAX : il implémente des méthodes génériques compatibles avec tous les navigateurs pour une mise en place facile d'AJAX dans vos projets :

- pour charger des données, des contenus HTML ou des scripts
- pour envoyer des données

Voyons ensemble comment cela fonctionne.

----

## Charger des données dans un conteneur HTML

La méthode `$.load(url, data, function)` charge une ressource dans l'élément HTML sélectionné.

Elle prend les paramètres suivants :

* _url_ : url de la ressource ;
* _data_ : pairs clé/valeur envoyées au serveur (si aucune donnée n'est indiquée la méthode GET est utilisée) ;
* _function_ : fonction à exécuter en cas de réussite de la requête.

:blue_book: Lire http://api.jquery.com/load/ pour la documentation complète de la méthode.


----

## Charger des données dans un conteneur HTML 

### Exemple

<gx-label>HTML</gx-label>

```html
<div id='conteneur'></div>
```

<gx-label>Javascript</gx-label>

```javascript
$("#conteneur").load("result.txt");
```

Ce code va charger le contenu du fichier `result.txt` à l'intérieur du `<div>` et remplacer son contenu (ici vide à l'origine).

----

## Charger des données pour les utiliser en Javascript

La méthode `$.get(url,data, function, type)` effectue une requête AJAX avec une méthode HTTP GET

Ses paramètres sont : 

* _url_ : ressource à charger ; 
* _data_ : paires clé/valeur envoyées au serveur ;
* _function_ : fonction à exécuter en cas de réussite de la requête ;
* _type_ : type de la réponse fournie à la fonction callback pouvant être : xml, html, script, json, jsonp, text.

:blue_book: Lire http://api.jquery.com/jQuery.get/ pour la documentation complète de la méthode.

----

### La méthode REST : get

La méthode  `$.getScript(url[,function])` charge une script via la méthode HTTP GET et l'exécute 

Ses paramètres sont :

* _url_ : script à charger ;
* _function_ : fonction à exécuter en cas de réussite de la requête.

```
$(document).ready(function(){
  $.getScript("hello.js");
});
```

:blue_book: Lire http://api.jquery.com/jQuery.getScript/ pour la documentation complète de la méthode.

----

### La méthode REST : getJSON

La méthode  `$.getJSON(url[,function])`charge un document JSON via la méthode HTTP GET

Ses paramètres sont :

* url : script à charger
* function : fonction à exécuter en cas de réussite de la requête

:blue_book: Lire http://api.jquery.com/jQuery.getJSON/ pour la documentation complète de la méthode.

----

## En vidéo

Voyons comment tout cela fonctionne, en vidéo :

<https://www.lynda.com/fr/AJAX-tutoriels/alternatives-post-get/193220/331610-4.html>

----

## Merci pour votre attention
