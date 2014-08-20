/*jslint browser: true */
/*global jQuery, jsBrick, alert */

(function($,jsBrick) {
	"use strict";

	var Game,
		STATE_START = 0,
		STATE_INGAME = 1,
		STATE_GAMEOVER = 2;

	Game = function() {
		var $lives = $("#play-lives"),
			$score = $("#play-score"),
			lives = 3,
			score = 0,
			racket,
			ball,
			bricks,
			bricksH = 15,
			state = 'start',
			self = this;

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
			$score.text( score );

			var heart = "&hearts;",
				hearts = "",	
				i;
			for(i = 0; i < lives; i += 1) {
				hearts += heart;
			}
			$lives.text( hearts );
		};

		this.loop = function() {
			// gestion des input

			var brickIdx;
			ball.move();
			ball.collide( racket );
			for (brickIdx = 0; brickIdx<bricks.length; brickIdx+=1){
				if (bricks[brickIdx]) {
					ball.collide( bricks[brickIdx] );
				}
			}

			racket.draw();
			ball.draw();
			for (brickIdx = 0; brickIdx<bricks.length; brickIdx+=1){
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
			var zone = $('#play-zone'),
				elem,
				x, y;

			for (x = 0; x<bricksH ; x+=1) {
				for (y = 0; y < 10 ; y +=1 ) {
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
				//brick.resize();
			} );
		};

		this.initialize();
	};

	$(document).ready( function() {
		var interval = Math.floor(1000/60),
			game = new jsBrick.Game();

		setTimeout(function gameLoop() {
			game.loop();
			setTimeout(gameLoop, interval);
		}, interval);
	});

	jsBrick.Game = Game;
}(jQuery, jsBrick));
