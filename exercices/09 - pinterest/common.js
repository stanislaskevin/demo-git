

var $pinterest = $('#pinterest');

// initialize
$pinterest.masonry({
  "columnWidth": 210,
  "gutter": 20,
  "itemSelector": 'p'
});

$("p").click(function() {
	$(this).remove();
	
	$pinterest.masonry();
});