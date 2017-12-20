<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Communiquer avec un serveur REST grâce à AJAX.

### Récupérer des données depuis un serveur REST avec jQuery : $.get , $.getJSON et $.ajax

<!-- 08/03 Vidéo (screencast) -->

----

jQuery possède un support excellent pour AJAX
Il implémente des méthodes génériques Cross-Browser pour
une mise en place facile d’ un fonctionnement AJAX

- $.load(url [,datas] [,function])
- $.get(url, params, callback)
- $.post(url, params, callback)
- $.getJSON(url, params, callback)
- $.getScript(url, callback)

----

## Charger des données dans un conteneur HTML

La méthode `$.load(url [,datas] [,function])` charge une ressource dans l'élément HTML sélectionné.

Elle prend les paramètres suivants :

* url : url de la ressource
* data : pairs clé/valeur envoyées au serveur (si aucune donnée n'est indiquée la méthode GET est utilisée)
* function : fonction à exécuter en cas de réussite de la
requête



:blue_book: http://api.jquery.com/load/

----

## Charger des données dans un conteneur HTML 

### Exemple

```html
<div id='conteneur'></div> vide
```

```javascript
$("#conteneur").load("result.txt");
```

----

## Charger des données pour les utiliser en Javascript

La méthode `$.get(url [,datas] [,function] [,type])` effectue une requête AJAX avec une méthode HTTP GET

Ses paramètres sont : 

* url : ressource à charger
* datas : paires clé/valeur envoyées au serveur
* function : fonction à exécuter en cas de réussite de la requête
* type : type de la réponse fournie à la fonction callback pouvant être : xml, html, script, json, jsonp, text

:blue_book: http://api.jquery.com/jQuery.get/

----

### La méthode REST : get

La méthode  `$.getScript(url[,function])` charge une script via la méthode HTTP GET et l'exécute 

Ses paramètres sont :

* url : script à charger
* function : fonction à exécuter en cas de réussite de la requête

```
$(document).ready(function(){
  $.getScript("hello.js");
});
```

:blue_book: http://api.jquery.com/jQuery.getScript/

----

La méthode  `$.getJSON(url[,function])`charge un document JSON via la méthode HTTP GET

Ses paramètres sont :

* url : script à charger
* function : fonction à exécuter en cas de réussite de la requête

:blue_book: http://api.jquery.com/jQuery.getJSON/

----

## En video

https://www.lynda.com/fr/AJAX-tutoriels/alternatives-post-get/193220/331610-4.html

----

## Merci pour votre attention
