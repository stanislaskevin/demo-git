var $pinterest = $('#pinterest');
var caddie = $("#caddie");
var caddie_offset = caddie.offset();

// on initialise le pavage
$pinterest.masonry({
  "columnWidth": 210,
  "gutter": 20,
  "itemSelector": 'p'
});

		
function dePinterestACaddie(p) {
	//p.hide("slow");
			
	// on détache le paragraphe de son 
	// conteneur (#pinterest)
	p.detach();
			
	// on enleve le style inline
	// qui avait été généré par masonry
	// et qui ne fonctionne pas dans #caddie
	p.removeAttr("style");
	
	// sauf qu'on effacé TOUT le style
	// et veut qu'il reste invisible
	// donc on le re-cache 
	p.css("display", "none");
	
	// on attache le paragraphe à son
	// conteneur (#caddie)
	p.appendTo(caddie);
	
	p.fadeIn();
}
	
$("p").click(function() {
	var p = $(this);
	var p_offset = p.offset();	
	var pinterest_offset = $pinterest.offset();
	
	p.animate(
		{
			"left": caddie_offset.left - pinterest_offset.left,
			"top": p_offset.top,
			"opacity": 0
		},
		function() {
			dePinterestACaddie(p)
		}
	);

});
