// les deux lignes suivantes (qui sont des commentaires)
// indiquent à l'outil de validation (JSLINT)
// - d'autoriser les variables du navigateur
// - de ne pas nous vérifier l'indentation ni les espaces
// - d'autoriser les fonctions de développement (ex: console.log)

/*jslint browser:true, white:true, devel:true */
/*global $ */

$(document).ready(function () {
  "use strict";

  // je déclare les variables que je vais utiliser
	// ultérieurement
	var compteur = 1,
	    selecteur;

	// boucler tant que le compteur est
	// inférieur ou égal à 6
	while( compteur <= 6 ) {
		// j'affiche la valeur actuelle
		// du compteur
		console.log(compteur);

	  // je construit mon sélecteur
		selecteur = "#tache" + compteur;

		// les trucs qui seront répétés
		$(selecteur).css('color', 'red');

		compteur = compteur + 1;
	}

});
