
var contenu = $("#contenu-texte");
var bouton = $("#bouton-agrandir");

$("#bouton-agrandir").click(function() {
	contenu.toggleClass('big');
	
	// on teste si la balise choisie
	// possède actuellement la classe
	// css "big"
	if (contenu.hasClass('big')) {
		// si c'est le cas
		bouton.attr("value", "Réduire");
	} else {
		// si c'est PAS le cas
		bouton.attr("value", "Agrandir");
	}
});
