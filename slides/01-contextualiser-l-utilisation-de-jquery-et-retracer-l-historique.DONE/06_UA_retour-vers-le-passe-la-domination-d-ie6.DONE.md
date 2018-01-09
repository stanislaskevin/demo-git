<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Contextualiser l'utilisation de jQuery et retracer l'historique

### Retour vers le passé, la domination d'IE6

<!-- 01/06 Document -->

----

## Retour vers le passé, la domination d'IE6

Le web d'aujourd'hui est le résultat d'un __lent processus de construction d'un ensemble de technologies et de standards__ dans le cadre d'une concurrence acharnée, pendant 20 ans, entre les gros acteurs des technologies numériques pour la domination d'un nouveau de moyen de communication : le web.

En quoi cela concerne-t-il les développeurs ? jQuery est __né précisément au moment le plus rude de cette concurrence__ pour uniformiser et faciliter le développement lorsque chacun proposait des solutions incompatibles.

Voici une restrospective pour bien comprendre l'intérêt de jQuery à l'époque.

----

## Histoire du web : _les précurseurs_

* __1992__ : NCSA Mosaic vend le premier navigateur multi-plateforme. C'est le premier leader sur le marché des navigateurs.

* __1994-1996__ : Netscape Navigator est créé. Une partie de NCSA rejoint ce  nouveau numéro un d'internet. Netscape arrive rapidement en bourse et voit sa valeur multipliée par 2 en quelques jours. À ce moment, Netscape Navigator 2 et 3 occupent entre 60 et 80% de part de marché.

* __1995__ : Microsoft se lance sur le marché. Internet Explorer (IE) 1 sort et c'est le début de la guerre des navigateurs.

----

## Histoire du web : _première guerre des navigateurs_

Entre Microsoft et Netscape tentent chacun de se démarquer par des innovations et l'inclusion de nouveaux modules (mail, ftp, chat...). __Cependant Microsoft joue de pratiques anticoncurrentielle et présinstalle Internet explorer dans ses systèmes d'exploitation__. 

Chaque poste vendu avec Microsoft Windows dispose alors navigateur. Netscape voit ses parts s'effondrer. Aucun des autres concurrents (Opéra, etc.) ne réussit vraiment à décoller.

Début 2000, le marché est à peu près celui ci :

* Internet Explorer (IE) : 75% 
* Netscape : 15%
* Autre : 10%

----

## Histoire du web : _stagnation_

<small>

Microsoft est vainqueur et impose son rythmer au web... cela sera une stagnation faute de concurrence. IE est utilisé par pratiquement 90% des utilisateurs. Netscape se désagrège et donne naissance à Mozilla.

</small>

* **2001-2006 : IE5 puis IE6 dominent. Les sites sont développés selon les standards de Microsoft.** Et aucune nouvelle version d'IE ne sort.
* __2003__ : Apple dévoile son propre navigateur, Safari, avec un moteur rapide et leger : Webkit.
* __2005__ : Mozilla sort Firefox, qui est un succès immédiat.
* __2008__ : Google lance Chrome, son navigateur à l'interface simpliste mais ultra rapide.

----

## Histoire du web : _seconde guerre des navigateurs_

__Les nouveaux navigateurs innovent__ et proposent des nouvelles balises et propriétés CSS dans pour ce qui deviendra le standard HTML5. 

Pendant ce temps __IE6, sorti en 2001, est le fléau des programmeurs web__, des designers, et des équipes de support de service web car il ne supporte pas la plupart de CSS2, ni CSS3.

Le navigateur est bourré de bizarreries (non respect des standards) qui le rendent incapable d’interpréter les pages de la même manière que les autres. Les développeurs doivent donc toujours prévoir des exceptions pour s’adresser aux utilisateurs d’IE6. 

----

## Histoire du web : jQuery le sauveur !

C'est dans ce contexte (en 2006) qu'apparaît jQuery qui propose alors : 

* des solutions de __détection et de compatibilité__ entre navigateurs
* des __fonctions unifiées__ pour faire la même action simplement
* des __fonctionnalités modernes__ (animations, effets, etc.) même sans CSS2, ni CSS3

----

## Processus de développement en 2009

Pour les développeurs de l'époque le travail était le suivant :

1. Développer pour les navigateurs les plus modernes (Firefox, Chrome, Safari)
2. Valider le HTML et le CSS
3. Tester dans les autres navigateurs modernes
4. Tester in IE6 (et pleurer). Ajouter une feuille de style spécifique pour IE6 en utilisant des commentaires conditionnels. Utiliser des [hacks](https://browserhacks.com) pour régler les problèmes connus.
5. Répéter l'opération avec IE7.
6. Si des styles additionnels sont requis et sont incompatibles avec IE6 et IE7,  abandonner ou utiliser jQuery pour faire les effets avec du javascript.

----

## Merci pour votre attention 
