/* jsBrick blablabla */

var jsBrick = { };

/* on définit la balle */
jsBrick.Ball = function() {

	var pi = 3.1415929;
	var domObj = $("#play-ball");
	var angle = 0;
	var dirX = 0;
	var dirY = 0;
	var xMax = $(document).width();
	var yMax = $(document).height();
	var speed = Math.sqrt( (yMax * yMax) + (xMax * xMax) ) / 200;
	var width = domObj.width();
	var height = domObj.height();
	var x;
	var y;

	this.lost = function() {
		return (y > yMax);
	}
	
	this.draw = function() {
		domObj.offset({
			left: x,
			top : y
		});
	};

	this.move = function() {
		x = x + dirX;
		y = y + dirY;

		if ((x + width) > xMax) {
			x = x - (( x + width ) - xMax);
			dirX = -dirX;
		}
		if (x < 0) {
			x= -x;
			dirX = -dirX;
		}
		if (y < 0) {
			y = -y;
			dirY = -dirY;
		}
		if ((y + height) > yMax) {
			/* ball is lost */
			lost = true;
		}
	}

	this.reset = function() {
		/* initial position */
		x = (xMax - width) / 2;
		y = (yMax - height) / 2;

		/* initial angle & vector */
		angle = ( Math.random() * pi ) + pi;
		dirX = speed * Math.cos(angle);
		dirY = speed * Math.sin(angle);

		/* initial loss state */
		lost = false;
	};

	this.reset();
};


/* on définit la raquette */
jsBrick.Racket = function() {
	var domObj = $("#play-ball");
	var width = domObj.width();
	var xMax = $(document).width();
	var y;
	var x; 

	this.move = function( ev ) {
		var left = ev.pageX - (width / 2);
		
		/* fix racket position if out of boundaries */
		left = (left < 0) ? 0 : left;
		left = ((left + width) > xMax) ? (xMax - width) : left;
		x = left;
	};

	this.draw = function() {
		domObj.offset({
			left: x,
			top : y
		});
	}

	this.reset = function() {
		y = domObj.offset().top;
		x = (xMax - width) / 2;
	}
};

/* on définit les briques */
jsBrick.Brick = function() {
};


/* on définit la zone de jeu */
jsBrick.Game = function() {
	var scoreObj = $("#play-score .count");
	var livesObj = $("#play-lives .count");
	var lives = 3;
	var score = 0;
	var ball = new jsBrick.Ball();
	var racket = new jsBrick.Racket();

	this.draw = function() {
		scoreObj.text( score );
		var livesTxt = "";
		for (var i=0; i<lives; i++){
			livesTxt += "&hearts";
		}
		livesObj.text( livesTxt );
	};

	this.kill = function() {
		lives -= 1;
	};

	this.lost = function() {
		return (lives < 0);
	};

	this.reset = function() {
		ball.reset();
		racket.reset();


		$("#play").off('mousemove.jsbrick');
		$("#play").on('mousemove.jsbrick', function(ev) {
			racket.move(ev);
		} );
	};

	this.loop = function() {
		ball.move();
		if (ball.lost()) {
			racket.reset();
			ball.reset();
			this.kill();
		}
		if (this.lost()){
			// FIXME: game over !
		}
		this.draw();
		racket.draw();
		ball.draw();
	};

	this.reset();

};


$(document).ready( function() {
	// on initialise la balle et tout le reste
	
	var game = new jsBrick.Game();
	var interval = Math.floor(1000/60);

	window.setTimeout( function globalLoop() {
		var timeBefore, timeDiff, timeLeft, loopAgain;
		timeBefore = (new Date).getTime();

		game.loop();		

		if (!game.lost()) { 
			timeDiff = (new Date).getTime() - timeBefore;
			timeLeft = ((interval - timeDiff) < 0 ) ? 0 : (interval - timeDiff);
			window.setTimeout( globalLoop, timeLeft ); 
		}
	}, interval );
});

