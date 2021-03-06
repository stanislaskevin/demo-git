<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Communiquer avec un serveur REST grâce à AJAX

### Envoyer des données vers un serveur REST avec jQuery

<!-- 08/04 Vidéo (screencast) -->

----


## Envoyer des données vers un serveur REST avec jQuery

Nous avons vu les différentes méthodes pour récupérer du contenu depuis un serveur REST.

Cependant, si l'on veut que le serveur réagisse ou enregistre les informations de l'utilisateur, il nous faut également des fonctions pour lui envoyer des données.

Voyons les méthodes pour ce faire.

----

## La méthode POST

La méthode `$.post(url,data, function, type)` effectue une requête AJAX avec une méthode HTTP POST :

* _url_: ressource à charger
* _data_ : paires clé/valeur envoyées au serveur
* _function_ : fonction à exécuter en cas de réussite de la requête
* _type_ : type de la réponse fournie à la fonction callback pouvant être : xml, html, script, json, jsonp, text

----

## En vidéo

Voyons, en vidéo, comment mettre cela en pratique :

<https://www.lynda.com/fr/AJAX-tutoriels/ajax-mode-abrege/193220/331616-4.html>


<!--

----

----

## La méthode AJAX

* Les méthodes précédentes sont des raccourcis de
l'utilisation de la méthode $.ajax()
* La méthode ajax() permet de maîtriser complètement le fonctionnement de l'objet XMLHttpRequest
* Les paramètres de la fonction sont fournis sous la forme d'un objet JSON

:blue_book: http://api.jquery.com/jQuery.ajax/

----

- AJAX 

La méthode `$.ajax()` permet de s'adapter à tous les cas de figure
- authentification, cross domaine, ajout dans le header de
la requête, ...
- bien étudier la documentation

```javascript
$(document).ready(function(){
  $.ajax({
    url: 'teste.html',
    success: function(data){
      $('#conteneur').html(data);
    },
    error: function(xhr,status,error){
      console.log(status);
      console.log(error);
    },
  });
});
```

----

###  Événements associés à la requête AJAX

* `$.ajaxSend(function)` assigne une fonction callback qui sera exécutée avant l'envoi de la requête
* `$.ajaxStart(function)` assigne une fonction callback qui sera exécutée lors du début de la requête
* `$.ajaxStop(function)` assigne une fonction callback qui sera exécutée à la fin de toutes les requêtes
* `$.ajaxSuccess(function)` assigne une fonction callback qui sera exécutée en cas de succès de la requête
* `$.ajaxComplete(function)` assigne une fonction callback qui sera exécutée à la fin complète de la requête
* `$.ajaxError(function)` assigne une fonction callback qui sera exécutée en cas de d'erreur sur la requête

----

## Fonctions utilitaires (helpers)

serialize() : encode un formulaire en String pouvant être soumis au serveur

serializeArray() : encode un formulaire en un tableau JSon de clé/valeurs
-->

----

## Merci pour votre attention
