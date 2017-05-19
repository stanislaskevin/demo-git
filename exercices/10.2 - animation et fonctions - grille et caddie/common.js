/**
 * Déclaration de tous les objets communs 
 * aux différentes fonctions
 */


var $pinterest = $('#pinterest'),
	$caddie = $("#caddie");
	
function dePinterestACadie($p) {
	// on détache le paragraphe de #pinterest
	$p.detach();
			
	// on enleve le style généré par masonry
	// qui ne fonctionne pas dans #caddie
	$p.removeAttr("style");
	$p.css("display", "none");

	// on attache le paragraphe à #caddie
	$p.appendTo(caddie);
			
	$p.fadeIn("slow");

}

$("p").click(function() {
	var $p = $(this);
	var p_offset = $p.offset();
	var caddie_offset = $caddie.offset();
	var pinterest_offset = $pinterest.offset();
	
	$p.animate(
		{
			"left": caddie_offset.left - pinterest_offset.left,
			"top": p_offset.top,
			"opacity": 0
		},
		function() {
			dePinterestACadie($p);
		}
	);
});


// on initialise le pavage lorsque la page est prete
$(document).ready(function() {
	$pinterest.masonry({
	"columnWidth": 210,
	"gutter": 20,
	"itemSelector": 'p'
	});
});