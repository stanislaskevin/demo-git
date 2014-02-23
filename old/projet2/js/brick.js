var jsBrick;
jsBrick = (jsBrick) ? jsBrick : {};
            
/*
 * params is a struct that should contain:
 *  - dom
 *  - game
 *  - x
 *  - y
 */
jsBrick.Brick = function( params ) {
      this.type = 'brick';
      // var dom = $(".play-brick");

	  var settings = $.extend({}, {
		  dom: null,
		  game: null,
		  x: 0,
		  y: 0
	  }, params );

      var dom = settings.dom;
	  var game = settings.game;

      this.width = dom.width();
      this.height = dom.height();
      this.x = null;
      this.y = null;
	  this.z = null;
	  this.broken = null;
      var xMax = $(document).width();
      var yMax = $(document).height();    

	  self = this;

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
	  }

	  this.destroy = function() {
		  dom.hide();
		  this.broken = true;
	  }

	  this.initialize();
};
