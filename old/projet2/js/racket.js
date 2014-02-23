/*jslint browser: true */
/*global jQuery, jsBrick, alert */

(function($,jsBrick) {
	"use strict";

	var Racket;

	Racket = function() {
		this.type = 'racket';
		var $racket = $("#play-racket"),
			xMax = $(document).width(),
			yMax = $(document).height(),
			self = this;

		this.width = $racket.width();
		this.halfWidth = this.width / 2;
		this.height = $racket.height();
		this.x = 0;
		this.y = 0;

		this.move = function(ev) {
			// set x to cursor location
			this.x = ev.pageX - this.halfWidth;

			// verify left & right boundaries
			this.x = (this.x < 0) ? 0 : this.x;
			this.x = ((this.x + this.width) > xMax ) ? (xMax - this.width) : this.x;
		};

		this.draw = function() {
			$racket.css("left", this.x);
			$racket.css("top", this.y);
		};

		this.reset = function() {
			this.x = ((xMax - this.width)/2);
			this.y = 0.9 * yMax;
		};

		this.resize = function() {
			this.width = $racket.width();
			this.halfWidth = this.width / 2;
			this.height = $racket.height();

			xMax = $(document).width();
			yMax = $(document).height();
			this.y = 0.9 * yMax;
		};

		this.initialize = function() {
			this.reset();
			$(document).on("mousemove.jsbrick", function(ev){
				self.move(ev);
			});
		};

		this.initialize();
	};

	jsBrick.Racket = Racket;
}(jQuery, jsBrick));
