var jsBrick;
jsBrick = (jsBrick) ? jsBrick : {};

jsBrick.Racket = function() {
	this.type = 'racket';
	var dom = $("#play-racket");
	this.width = dom.width();
	this.height = dom.height();
	this.x = 0;
	this.y = 0;
	var xMax = $(document).width();
	var yMax = $(document).height();

	var self = this;

	this.move = function(ev) {
		var nextx = ev.pageX - (this.width / 2);
		this.x = (.7 * this.x) + (.3 * nextx);
		this.x = (this.x < 0) ? 0 : this.x;
		this.x = ((this.x + this.width) > xMax ) ? (xMax - this.width) : this.x;
	};

	this.draw = function() {
		dom.css("left", this.x);
		dom.css("top", this.y);
	};

	this.reset = function() {
		this.x = ((xMax - this.width)/2);
		this.y = 0.9 * yMax;
	}

	this.resize = function() {
		this.width = dom.width();
		this.height = dom.height();
		xMax = $(document).width();
		yMax = $(document).height();
		this.y = 0.9 * yMax;
	}

	this.initialize = function() {
		this.reset();
		$(document).on("mousemove.jsbrick", function(ev){
			self.move(ev);
		});
	};

	this.initialize();
};

