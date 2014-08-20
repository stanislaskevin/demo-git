
var target = $("#target");

// $("#change").click(function() {
target.on("click", function() {
	var hauteur = target.height();
	var largeur = target.width();
	
	target.height( hauteur * 2);
	target.width( largeur * 2);
});

