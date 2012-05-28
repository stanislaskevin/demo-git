var jsBrick;
jsBrick = (jsBrick) ? jsBrick : {};

jsBrick.Game = function() {
	var livesDom = $("#play-lives");
	var lives = 3;
	var scoreDom = $("#play-score");
	var score = 0;
	var racket;
	var ball;
	var brick;

	this.reset = function() {
		ball.reset();
		racket.reset();
	};

	this.kill = function() {
		// perdre une vie
		lives = lives - 1;
		if (lives < 1) {
			this.lose();
		}
	};

	this.win = function() {
		// gagner la partie
	};

	this.lose = function() {
		// perdre la partie (game over !)
		alert("Game Over");
	};

	this.draw = function() {
		scoreDom.text( score );
		livesDom.text( lives );
	};

	this.loop = function() {
		// gestion des input
	
		ball.move();
		ball.collide( racket );
		ball.collide( brick );

		racket.draw();
		ball.draw();
		brick.draw();
		this.draw();

		if ( ball.lost() ) {
			this.kill();
			this.reset();
		}
	};

	this.initialize = function() {
		racket = new jsBrick.Racket();
		ball = new jsBrick.Ball(); 
		brick = new jsBrick.Brick( self, $('#play-brick') );

		$(window).resize( function() {
			racket.resize();
			ball.resize();
			brick.resize();
		} );
	};

	this.initialize();
}


$(document).ready( function() {
	var interval = Math.floor(1000/60);
	var game = new jsBrick.Game();

	window.setTimeout(function gameLoop() {
		game.loop();
		window.setTimeout(gameLoop, interval);
	}, interval);
});

