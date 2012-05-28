var jsBrick;
jsBrick = (jsBrick) ? jsBrick : {};

jsBrick.Game = function() {
	var livesDom = $("#play-lives");
	var lives = 3;
	var scoreDom = $("#play-score");
	var score = 0;
	var racket;
	var ball;
	var bricks;
	var bricksH = 15;

	this.reset = function() {
		ball.reset();
		racket.reset();
	};

	this.destroy = function( x, y ){
		bricks[(y * bricksH + x)] = undefined;
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
		for (var brickIdx = 0; brickIdx<bricks.length; brickIdx++){
			if (bricks[brickIdx]) {
				ball.collide( bricks[brickIdx] );
			}
		}

		racket.draw();
		ball.draw();
		for (var brickIdx = 0; brickIdx<bricks.length; brickIdx++){
			bricks[brickIdx].draw();
		}
		this.draw();

		if ( ball.lost() ) {
			this.kill();
			this.reset();
		}
	};

	this.initialize = function() {
		racket = new jsBrick.Racket();
		ball = new jsBrick.Ball(); 

		// create bricks
		bricks = [];
		var zone = $('#play-zone');
		var elem;
		for (var x = 0; x<bricksH ; x++) {
			for (var y = 0; y < 10 ; y ++ ) {
				elem = $("<div></div>").addClass('play-brick').appendTo( zone );
				bricks[(y * bricksH + x)] = new jsBrick.Brick({
					game: self, 
					dom: elem,
					x: x,
					y: y }
				);
			}
		}

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

