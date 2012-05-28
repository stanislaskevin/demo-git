 var jsBrick;
 jsBrick = (jsBrick) ? jsBrick : {};
            
jsBrick.Brick = function( game, dom ) {
      this.type = 'brick';
      // var dom = $(".play-brick");
      var dom = dom;
      this.width = dom.width();
      this.height = dom.height();
      this.x = 0;
      this.y = 0;
      var xMax = $(document).width();
      var yMax = $(document).height();    

	  self = this;

	  this.draw = function() {
		  dom.css('top', this.y);
		  dom.css('left', this.x);
	  };

	  this.initialize = function() {
		  this.x = 0.2 * xMax;
		  this.y = 0.1 * yMax;
	  };

	  this.resize = function() {
		  this.width = dom.width();
		  this.height = dom.height();
		  xMax = $(document).width();
		  yMax = $(document).height();    
	  }

	  this.destroy = function() {
		  dom.remove();
		  // game.destroy( self );
	  }

	  this.initialize();
};
