// déclaration de 3 variables
var A, B, C;

// on leur donne des valeurs
A = 1;
B = 2;
C = 3;

// on fait des calculs dessus
console.log(C % B);




------------------

```
// déclaration des variables
var annee, age;

// initialisation (préventive)
annee = 0;
age = 0;

// on affiche la demande
console.log("Année SVP");
// on attend une entrée
annee = parseInt(prompt("Année SVP"), 10);
// on affiche juste pour vérifier que la conversion est ok (à supprimer)
console.log(annee); 

// on calcule l'age
age = 2014 - annee;

if (age >= 18) {
    console.log("Tu passes");
} else {
    console.log("Tu ne passes pas");
}
```s

-----------------------

// OPERATEURS DE COMPARAISONS
// console.log(1 > 2); // => false
// console.log(1 < 2); // => true

// console.log(1 == 2); // => false
// console.log(2 == 2); // => true
// console.log(1 != 2) ; // => true

// console.log(1 <= 2) ; // => true
// console.log( 1 >= 2) ; // => false


------------------


// console.log( true );
// console.log( false );

// console.log( ! false ); // => true
// console.log( ! true ); // => false

// console.log( true && true ) // = true ET true => true
// console.log( true && false ) // => false
// console.log( false && true ) // => false
// console.log( false && false ) // => false

// console.log( true || true ) // = true
// console.log( true || false ) // => true
// console.log( false || true ) // => true
// console.log( false || false ) // => false


---------------------------------
// VIDEUR, VERSION NAIVE

// déclaraction
var annee, age, accompagnants;

// initialisation
annee = parseInt(prompt("Quelle année ?"), 10);
accompagnants = parseInt(prompt("Combien d'accompagnants ?"), 10);

// calcul de l'age
age = 2014 - annee;

if (age >= 18) {
    if (accompagnants >= 1) {
        console.log("Bienvenue !");
    } else {
        console.log("Tu ne rentres pas !");
    }
} else {
    console.log("Tu ne rentres pas !");
}


----------------------------
// déclaraction
var annee, age, accompagnants, ok_pour_rentrer;

// initialisation
ok_pour_rentrer = false;
annee = parseInt(prompt("Quelle année ?"), 10);
accompagnants = parseInt(prompt("Combien d'accompagnants ?"), 10);

// calcul de l'age
age = 2014 - annee;


// on prépare les conditions 
// age > 18 ?
ok_pour_rentrer = (age >= 18);
// bien accompagné ?
ok_pour_rentrer = ok_pour_rentrer && (accompagnants > 0);
// alcoolisé ?
ok_pour_rentrer = ok_pour_rentrer && (!alcoolisé);


if (ok_pour_rentrer) {
    console.log("Bienvenue !");
} else {
    console.log("Tu ne rentres pas !");
}



---------------------------

// déclaration des variables
var sexe, resultat;

// initialisation des variables
resultat = "A";
sexe = prompt("Sexe ?");

// ... suspens...
switch (sexe) {
    case "Garçon":
    case "Male":
    case "G":
    case "M":
        resultat = "G";
        break;

    case "Fille":
    case "Female":
    case "F":
        resultat = "F";
        break;

    default:
        resultat = "A";
}

alert(resultat);


s


http://learn.jquery.com/about-jquery/how-jquery-works/


http://jqexercise.droppages.com/
!!!
http://www.w3schools.com/jquery/jquery_examples.asp

http://www.impressivewebs.com/jquery-tutorial-for-beginners/
http://jqfundamentals.com/


http://fr.openclassrooms.com/informatique/cours/jquery-ecrivez-moins-pour-faire-plus/tp-condense


http://fr.openclassrooms.com/informatique/cours/jquery-ecrivez-moins-pour-faire-plus/tp-sommaire-automatique

http://coursdewebdesign.com/javascript/exercices/

https://plugins.jquery.com/
http://www.unheap.com/


http://www.noupe.com/jquery/50-amazing-jquery-examples-part1.html

Intégration de unslider :
http://unslider.com/

Valider un formulaire :
http://formvalidator.net/index.html

http://masonry.desandro.com/#jquery

http://fancyapps.com/fancybox/


http://designspartan.com/ressources/50-super-plugins-jquery-recents-pour-rendre-votre-site-ergonomique-et-attrayant/


http://alvarotrigo.com/fullPage/#firstPage


http://joelb.me/scrollpath/

http://srobbin.com/jquery-plugins/pageslide/

http://git.aaronlumsden.com/progression/#demo

http://www.oesmith.co.uk/morris.js/

https://github.com/heelhook/chardin.js

Plugins
	Google Map
		https://github.com/Tilotiti/jQuery-Google-Map
		http://tilotiti.github.io/jQuery-Google-Map/
		http://gmap3.net/

http://www.ractivejs.org/
http://jschr.github.io/textillate/

http://markitup.jaysalvat.com/home/

http://brianreavis.github.io/selectize.js/


Autres cours :
	http://formation.applh.com/
