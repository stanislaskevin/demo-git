/*jslint browser:true, white:true */
/*global $ */

(function () {
	"use strict";

	var $crible;

	function getHiddenBy($elem) {
		var hiddenBy = $elem.data('hidden-by');
		if (!hiddenBy) { hiddenBy = "[]"; }
		return JSON.parse(hiddenBy);
	}

	function setHiddenBy($elem, value) {
		$elem.data('hidden-by', JSON.stringify(value));
	}

	function removeHiddenBy($elem, reference) {
		var hiddenBy = getHiddenBy($elem);
		hiddenBy = hiddenBy.filter(function(val) { return (val !== reference); });
		setHiddenBy($elem, hiddenBy);
	}

	function addHiddenBy($elem, reference) {
		var hiddenBy = getHiddenBy($elem);
		if (hiddenBy.indexOf(reference) < 0) {
			hiddenBy.push = true;
		}
	}

	function masqueMultiple() {
		var $reference = $(this),
			reference = Number($(this).text());
		$reference.toggleClass('active');

		var helper = function (){ 
			var $actuel = $(this),
				actuel = Number($actuel.text());

			if (reference === 1) { return false; }
			if (actuel === reference) { return false; }
			if (actuel % reference === 0) { return true; }
			return false;
		};

		if ($reference.hasClass('active')) {
			$('#crible .number')
				.filter(helper)
				.each(function() {
					addHiddenBy(this, reference);
				})
				.fadeOut('slow');
		} else {
			$('#crible .number')
				.filter(helper)
				.each(function() {
					removeHiddenBy(this, reference);
				})
				.filter(function() {
					var $self = $(this),
					    hiddenBy = $self.data('hidden-by');
					if (!hiddenBy) { hiddenBy = "[]"; }
					hiddenBy = JSON.parse(hiddenBy);
					delete hiddenBy[reference];
				})
				.fadeIn('slow');
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
