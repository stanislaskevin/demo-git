## AJAX

### Définition

**Asynchronous JavaScript And XML**

  * ni une technologie
  * ni un langage
  * plutôt un concept

  
  

**... mais XML tend à être replacé par JSON**

### Historique

AJAX existait avant ajax...

  * `<script src='script.js'>`
  * ... 
  * jusqu'à `XMLHttpRequest`   
(issu à l'origine d'un ActiveX pour MSIE)

### Site traditionnel

  1. Requête unique sur un serveur
  2. Chargement du résultat et des fichiers liés   
(img, css, scripts, frames)

  3. Changement de page (retour à [1])

### Site avec AJAX

  1. Requête unique sur un serveur
  2. Chargement du résultat et des fichiers liés   
(img, css, scripts, frames)

  3. Interraction avec la page (et modification de la page)
  4. Nouvelles requêtes sur un ou des serveurs
  5. Modification de la page en fonction des données reçues   
(retour probable à [2])

  6. Changement de page (retour à [1])

## Requêtes AJAX

### Rappels sur HTTP

  * HEAD
  * GET
  * POST
  * PUT
  * DELETE
  * ...

### Types de réponses

  * Texte simple
  * HTML
  * XML
  * JSON

### Réponse texte

  * simple...
  * pas adapté pour des données formatées

### Réponse HTML

    
    
    <ul>
                	<li><span title="a4242">Gordon</span></li>
                	<li><span title="j3781">Barney</span></li>
                	<li><span title="j7638">Eli</span></li>
                	<li><span title="o7836">Chell</span></li>
                	<li><span title="e5831">Odessa</span></li>
                </ul>
                

### Réponse XML

    
    
    	
    	
    	
    	
    	
    
                

### Réponse JSON

    
    
    [
    	{ "name":"Gordon", "id":"a4242" },
    	{ "name":"Barney", "id":"j3781" },
    	{ "name":"Eli", "id":"j7638" },
    	{ "name":"Chell", "id":"o7836" },
    	{ "name":"Odessa", "id":"e5831" }
    ]
                

### Rappels sur l'asynchronisme

## Utiliser AJAX

### XMLHTTPRequest

    
    
    var xhr = new XMLHttpRequest();
                

### Dans la vraie vie

    
    
    var xhr = null;
    	
    if (window.XMLHttpRequest || window.ActiveXObject) {
    	if (window.ActiveXObject) {
    		try {
    			xhr = new ActiveXObject("Msxml2.XMLHTTP");
    		} catch(e) {
    			xhr = new ActiveXObject("Microsoft.XMLHTTP");
    		}
    	} else {
    		xhr = new XMLHttpRequest(); 
    	}
    } else {
    	alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
    	return;
    }
                

### Requetes

`xhr.open(sMethod, sUrl, bAsync)`

### Headers

`xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");`

### Requete GET

    
    
    xhr.open("GET", "handlingData.php?variable1=truc&variable2;=bidule", true);
    xhr.send(null);
                

### Requete POST

    
    
    xhr.open("POST", "handlingData.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("variable1=truc&variable2;=bidule");
                

### Protection des données

`encodeURIComponent("contenu avec des espaces");`

### Récupération des données

`xhr.responseText` ou `xhr.responseXML`

    
    
    xhr.onreadystatechange = function() {
    		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
    				alert(xhr.responseText); // Données textuelles récupérées
    		}
    };
                

### Restrictions

> Permission denied to call method XMLHttpRequest.open

Solutions

  * Cross-origin resource sharing
  * Proxy (mod_proxy dans apache, script de redirection)

## Utiliser AJAX et JQuery

## Fin

### Références

  * [ Wikipedia : Hypertext Transfer Protocol ](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
  * [ Wikipedia : Cross-origin resource sharing ](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
  * [ Wikipedia : Same origin policy ](http://en.wikipedia.org/wiki/Same_origin_policy)
  * [ How to bypass cross-domain restrictions when developing AJAX applications ](http://www.ghidinelli.com/2008/12/27/how-to-bypass-cross-domain-restrictions-when-developing-ajax-applications)

### Des questions ?

### Merci !

