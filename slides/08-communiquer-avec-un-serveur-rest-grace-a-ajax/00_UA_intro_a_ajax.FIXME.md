 
●
●
●
●
jQuery facilite l'écriture du code AJAX
AJAX nécessite aussi de la programmation côté serveur
●
 ce qui signifie :
–
 un langage : PHP, ASP, .NET, Java, ...
–
 un serveur : Apache, IIS, Tomcat, Jboss, ...
–
 une base de données : MySql, Oracle, SQLServer, Derby, ...
La programmation côté serveur n'est pas abordée ici
Il est intéressant, si ce n'est essentiel, de mettre en place
des outils de suivi des requêtes AJAX dans le navigateur

----

## Rappels sur JSON

JSon
●
 JSon : JavaScript Object Notation
●
 format d'échange humainement compréhensible
●
 RFC 4627
●
 souvent utilisé pour la sérialisation et la transmission
d'objets
●
 la fonction eval() de JavaScript permet ensuite
d'évaluer la chaîne de caractères JSon
json_1.html
var r = eval("2+2");
console.log(r);
var json = '{civilite:"M",...,adresse:{rue:"Rue de Bruxelles",...}}';
var obj = eval("("+json+")");
console.log(obj.adresse.ville);


----

## Références

- "AJAX – Le guide complet" de Bruno CATTEAU et Nicolas FAUGOUT, ed. Micro Application
●
 JQuery – Découverte du framework JavaScript
●
 auteur : Luc VAN LANCKER
●
 éditeur : ENI éditions
●
 JQuery – Le guide complet
●
 auteurs : Guillaume ALLAIN et Timothy STUBBS
●
 éditeur : Micro Application
