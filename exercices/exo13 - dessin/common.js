
var selection;
// var destinationcouleur ?

//$("#palette .target").click( function() {
$("#palette .target").on("click", function() {
	// rappel : this c'est l'objet cliqué !
	selection = $(this);
	$("#palette .target").css(
		'border-color', 'black'
	);
	selection.css('border-color', 'white');
});


//$("#dessin .target").click( function() {
$("#dessin").on("click", ".target", function() {

	var copie = selection.clone();
	var cible = $(this);
	cible.replaceWith(copie);
});
