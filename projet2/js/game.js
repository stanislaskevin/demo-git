var jsBrick = {};

jsBrick.Ball = function() {
}

jsBrick.Racket = function() {
	var dom = $("#play-racket");
	var width = dom.width();
	var height = dom.height();
	var left = dom.offset().left;
	var top = dom.offset().top;
	var leftMax = $(document).width();

	var self = this;

	this.move = function(ev) {
		left = ev.pageX - (width / 2);
		left = (left < 0) ? 0 : left;
		left = ((left + width) > leftMax ) ? (leftMax - width) : left;
	};

	this.draw = function() {
		dom.css("left", left);
	};

	this.collide = function( obj ) {
		// if ((obj.left > this.left) && (obj.right < this.right)) {
		//}
	};

	this.initialize = function() {
		$(document).on("mousemove.jsbrick", function(ev){
			self.move(ev);
		});
	};

	this.initialize();
};

$(document).ready( function() {
	var racket = new jsBrick.Racket();
	// var ball = new jsBrick.Ball(); 

	var interval = Math.floor(1000/60);

	window.setTimeout(function gameLoop() {
		// ball.move();

		racket.draw();
		// ball.draw();

		window.setTimeout(gameLoop, interval);
	}, interval);
});

// glenux@glenux.net

