 
●
 scrollTop(), scrollLeft() : modifie le décalage
entre un bord du document et l'élément sélectionné

----

jQuery – les caractères spéciaux
●
 jQuery utilise un certain nombre de caractères
comme éléments de syntaxe
●
 Si ces caractères sont utilisés dans des
expressions littérales, il faut les échapper avec
deux caractères backslash - \\
●
 Liste des caractères spéciaux
●
 # ; & , . + * ~ ' : ! ^ $ [ ] ( ) = > | /

----

Deboguer JavaScript
●
 Tous les navigateurs actuels fournissent nativement
ou par plugin des outils de debug
●
 suivi des requêtes, avec temps de réponse
●
 console de log JavaScript
–
 avec
●
 affichage du DOM, des CSS, etc.
●
 Ces outils ne sont pas activés par défaut
●
 il faut d'abord charger l'éventuel plugin
●
 puis activer l'outil de debug


----

Deboguer JavaScript
●
 Deboguer avec IE
●
 IE est livré avec des outils de debug
●
 activation par le menu Outils de développement
–
 touche F12
 
 ----
 
 ## Rappels sru le DOM
●
 Document Object Model
●
 représentation objet sous forme d'arbre
●
 Recommandation du W3C
●
 décrit une interface (API) indépendante de tout langage
permettant de parcourir et mettre à jour la structure du
document
●
 DOM navigateur
●
 historiquement permet de manipuler les éléments
"importants" d'une page HTML
–
 formulaires, images, etc
–
 mais pas les div, h, ...

----

DOM
●
 Le DOM de niveau 2 permet de parcourir tout les
éléments du document HTML
●
 entre autre par getElementById sur l'objet document
●
 l'objet document possède aussi
–
 createElement, createTextNode, createAttribute, ...
●
 méthodes pour manipuler un nœud
–
 appendChild, insertBefore, replaceChild,
cloneNode, ...
●
 méthodes pour naviguer dans le DOM
–
 parentNode, childNodes, firstChild, lastChild, ...

----

DOM
●
 Attention au différences entre navigateurs
●
 certains navigateurs ajoutent des nœuds de type texte
●
 Un nœud est de type Element, et possède les
propriétés
–
 nodeType : type de nœud (entier)
–
 nodeName : nom du nœud
–
 nodeValue : valeur du nœud (ou null)
–
 attributes : tableau des attributs (ou null)
●
 JQuery facilitera le recherche dans le DOM



 
 http://try.jquery.com/levels/1/challenges/1
