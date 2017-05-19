/*jslint browser:true, devel:true, white:true */
/*global $ */
(function() {
	"use strict";

	function attacheAction() {
		$('nav ul li').click(function(ev) {
			// affiche ou cacher le sous-menu 
			var $li = $(this);	
			var $ulInterne = $li.find('ul');

			$('nav ul li ul').fadeOut();
			$ulInterne.fadeIn();

			console.log('toto');


			$('body')
				.addClass('dynamic')
				.one('click', function() {
					console.log('bodyclick');
					$ulInterne.fadeOut();
				});

			ev.stopPropagation();
			//console.log($ulInterne);
		});
	}

	$(document).ready(function() {
		attacheAction();
	});

}());
