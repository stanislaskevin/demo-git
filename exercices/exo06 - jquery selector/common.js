


$(document).ready(function () {

	// on change la couleur d'un élément
	$("p").css('color', 'red');

	// - on attrape l'élément p avec classe "red"
	// - on récupère son contenu texte avec sa 
	//   propriété text()
	// - on affiche le tout
	
	alert( 
		$("p.red").text() 
	);
	
});