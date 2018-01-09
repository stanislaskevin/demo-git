<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Communiquer avec un serveur REST grâce à AJAX.

### Introduction à AJAX

<!-- 08/01 Document -->


----

## Introduction à AJAX

AJAX (ou Asynchronous JavaScript and XML) est une technologie qui permet de récupérer ou transmettre des données à un serveur web sans rafraichir notre navigateur.

AJAX se base sur l'objet XMLHttpRequest en Javascript, qui permet  : 

* de faire des requêtes HTTP de différentes natures 
* et d'obtenir des données au format XML, JSON, mais aussi HTML, ou encore texte simple.

----

## Fonctionnement 

L'apparition d'AJAX a entraîné un changement dans l'interaction entre le serveur web et le navigateur.

- Avant AJAX, le navigateur devait charger, pour chaque page, l'ensemble du HTML et de ses ressources (images, scripts, etc.).
- Avec AJAX : 
  1.  une page est envoyée à la première connexion avec fichiers CSS et JavaScript ;
  2. chaque action de l'utilisateur sur la page provoque des demande de au serveur ;
  3. le serveur ne renvoie que des données, mais pas de page complète à envoyer, ni recharger.


----

## Prérequis

### Un serveur HTTP

Pour travailler avec AJAX, il nest nécessaire de mettre en place un logiciel serveur capable de répondre aux requêtes HTTP.

Il est recommandé d'installer l'un des outils suivants :

<small>

| Système | Outils |
|---|----|
| Linux  | Apache2 ou Nginx (intégrés au système) |
| Microsoft Windows | WAMP ou XAMPP <br/>(packages tout-en-un qui intègrent Apache 2) |
| MacOS  |Apache2 (intégrés au système) <br/>ou MAMP (qui intègrent Apache 2) |

</small>

----


## Prérequis

### Un serveur HTTP (suite)

Une fois le serveur HTTP installé, vous devriez être capable d'obtenir une réponse en pointant votre navigateur sur :

- http://localhost:80 
- ou http://localhost:8000
- ou http://localhost:8080
 
... selon le port indiqué dans la configuration de votre serveur HTTP.


----

## Prérequis

### Un langage de programmation coté serveur

AJAX permet de charger des données depuis le serveur, mais __si l'on veut que les données puissent être dynamiques et réagir selon ce que fait l'utilisateur !__

__Cela signifie qu'il faut également installer un langage de programmation coté serveur__, comme Go, Ruby, Python, PHP, NodeJS, .NET, Java, C/CGI, Perl, etc.  

----

## Prérequis

### Un langage de programmation coté serveur (suite)

Votre programme coté serveur devra être capable : 

* de réagir en fontion de la requête (des paramètres, des cookies, etc.) 
* d'aller chercher les données qui lui sont utiles, depuis des fichiers ou une base de données, 
* de les traiter et les présenter dans un format utilisable par le navigateur : XML, JSON, HTML, texte.

La programmation côté serveur n'est pas abordée ici.

<!----

## Rappels sur JSON

JSon

-  JSon : JavaScript Object Notation
-  format d'échange humainement compréhensible
-  RFC 4627
-  souvent utilisé pour la sérialisation et la transmission d'objets
-  la fonction eval() de JavaScript permet ensuite d'évaluer la chaîne de caractères JSon

json_1.html
var r = eval("2+2");
console.log(r);
var json = '{civilite:"M",...,adresse:{rue:"Rue de Bruxelles",...}}';
var obj = eval("("+json+")");
console.log(obj.adresse.ville);


## Références

- "AJAX – Le guide complet" de Bruno CATTEAU et Nicolas FAUGOUT, ed. Micro Application
-  JQuery – Découverte du framework JavaScript, de Luc VAN LANCKER, ed. ENI éditions
-  JQuery – Le guide complet, de Guillaume ALLAIN et Timothy STUBBS, ed. Micro Application
--->

----

## Merci pour votre attention

Vous avez maintenant le nécessaire pour démarrer le travail avec AJAX !

Voyons maintenant comment cela se passe du coté de javascript avec jQuery.