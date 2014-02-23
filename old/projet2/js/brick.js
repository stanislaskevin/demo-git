/*jslint browser: true */
/*global jQuery, jsBrick */

(function($,jsBrick) {
	"use strict";

	var Brick;

	/*
	* params is a struct that should contain:
	*  - dom
	*  - game
	*  - x
	*  - y
	*/
	Brick = function( params ) {
		this.type = 'brick';
		// var dom = $(".play-brick");

		var xMax = $(document).width(),
			yMax = $(document).height(),
			settings = $.extend({}, {
				dom: null,
				game: null,
				x: 0,
				y: 0
			}, params ),
			dom = settings.dom,
			game = settings.game,
			self = this;

		this.width = dom.width();
		this.height = dom.height();
		this.x = null;
		this.y = null;
		this.z = null;
		this.broken = null;


		this.draw = function() {
			dom.css('top', this.y);
			dom.css('left', this.x);
			dom.css('z-index', this.z);
		};

		this.initialize = function() {
			this.x = dom.width() * settings.x;
			this.y = dom.height() * settings.y;
			this.z = (30 - settings.z);
			this.broken = false;
		};


		this.resize = function() {
			this.width = dom.width();
			this.height = dom.height();
			xMax = $(document).width();
			yMax = $(document).height();    
		};

		this.destroy = function() {
			dom.hide();
			this.broken = true;
		};

		this.initialize();
	};

	jsBrick.Brick = Brick;

}(jQuery, jsBrick));
