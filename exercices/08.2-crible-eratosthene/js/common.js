/*jslint browser:true, white:true */
/*global $ */

(function () {
	"use strict";

	var $crible;

	function masqueMultiple() {
		var $reference = $(this),
			reference = Number($(this).text());
		$reference.toggleClass('active');

		var gardeSeulementLesMultiples = function (){ 
			var $actuel = $(this),
				actuel = Number($actuel.text());

			if (reference === 1) { return false; }
			if (actuel === reference) { return false; }
			if (actuel % reference === 0) { return true; }
			return false;
		};

		if ($reference.hasClass('active')) {
			$('#crible .number')
				.filter(gardeSeulementLesMultiples)
				.hide() //.fadeOut('slow');
		} else {
			$('#crible .number')
				.filter(gardeSeulementLesMultiples)
				.show() //.fadeIn('slow');
		}
	}

	function initialise() {
		var i;
		$crible = $('#crible');
		for (i=1; i<=1000; i+=1) {
			$('<div></div>')
				.addClass('number')
				.text(i)
				.appendTo($crible);
		}

	}

	function attache() {
		$('#crible .number').click(masqueMultiple);
	}

	$(document).ready(function () {
		initialise();
		attache();
	});
}());
