
$("#bouton-affiche").click( function() {
	$("#contenu-texte").show();
});

$("#bouton-cache").click( function() {
	$("#contenu-texte").hide();
});

$("#bouton-detruit").click( function() {
	$("#contenu-texte").remove();
});

$("#bouton-construit").click( function() {
	// construire (en mémoire) du HTML
	var futurElement = $("<p id='contenu-texte'>Tu quoque fili ?</p>");
	
	// comment attacher dans l'arbre ? 
	// - selectionner un element (on prend le voisin)
	var boutonAffiche = $("#bouton-affiche");
	
	// - faire l'opération d'attacher à partir de lui
	futurElement.insertBefore(boutonAffiche);
});
