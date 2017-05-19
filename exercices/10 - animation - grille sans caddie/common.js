var $pinterest = $('#pinterest');

// on initialise le pavage
$pinterest.masonry({
  "columnWidth": 210,
  "gutter": 20,
  "itemSelector": 'p'
});

$("p").click(function() {
	var p = $(this);
	var p_offset = p.offset();
	
	var caddie = $("#caddie");
	var caddie_offset = caddie.offset();
	
	var pinterest_offset = $pinterest.offset();
	
	
	p.animate(
		{
			"left": caddie_offset.left - pinterest_offset.left,
			"top": p_offset.top
		},
		
		function() {
			p.hide("slow");
			
			// on détache le paragraphe de son 
			// conteneur (#pinterest)
			p.detach();
			
			// on enleve le style inline
			// qui avait été généré par masonry
			// et qui ne fonctionne pas dans #caddie
			p.removeAttr("style");
			 
			// on attache le paragraphe à son
			// conteneur (#caddie)
			p.appendTo(caddie);
			
			p.show("slow");
		}
	);

});
