/*jslint browser: true */
/*global jQuery, jsBrick */

(function($, jsBrick) {
	"use strict";

	var Ball;

	Ball = function() {
		this.type = 'ball';
		var $ball = $("#play-ball"),
			width = $ball.width(),
			height = $ball.height(),
			xMax = $(document).width(),
			yMax = $(document).height(),
			x = 0,
			y = 0,
			xOld = 0,
			yOld = 0,
			speed,
			rayon = ( width / 2 ),
			angle,
			dx, dy,
			self = this;

		this.move = function() {
			/* déplacement de la balle */
			/* position = position + déplacement */
			xOld = x;
			yOld = y;
			x = x + dx;
			y = y + dy;

			/* correction de trajectoire quand on dépasse les bords */
			if ((x - rayon) < 0) {
				x = x + ( 2 * rayon );
				dx = -dx;
			}

			if ((y - rayon) < 0) {
				y = y + ( 2 * rayon );
				dy = - dy;
			}

			if ( (x + rayon) > xMax ) {
				x = (2 * xMax) - x - (2 * rayon);
				dx = - dx;
			}
		};

		// Return true if the ball is outside 
		// the game zone
		this.lost = function() {
			var lost = ((y - rayon) > yMax);
			return lost;
		};

		// Update display with new ball
		this.draw = function() {
			$ball.offset({
				top: (y - rayon),
				left: (x - rayon)
			});
		};

		// Handle collisions between Ball & Ball
		function collideBall( obj ) {
			console.warn("Ball.collideBall : not implemented");
		}

		// Handle collisions between Ball & Racket
		function collideRacket( racket ) {
			if ( 
				((y + rayon) > racket.y)
				&& ((y - rayon) < (racket.y + racket.height) )
				&& ((x + rayon) > racket.x)
				&& ((x - rayon) < (racket.x + racket.width) ) 
			) 
			{
				// on est dans la raquette donc collision 
				// on corrige la position
				y = y - dy;
				// on corrige la trajectoire
				dy = - dy;
			} else {
				// sinon... bah, pas de collision hein ^_^ 
			}
		}

		function collideBrick( brick ) {
			if ( 
				(! brick.broken ) 
				&& ((y + rayon) > brick.y)
				&& ((y - rayon) < (brick.y + brick.height) )
				&& ((x + rayon) > brick.x)
				&& ((x - rayon) < (brick.x + brick.width) ) 
			) 
			{

				// zone 1
				if ( 
					(( yOld + rayon ) <= brick.y )
					&& (( xOld + rayon ) <= brick.x )
				) 
				{
					x = x - dx;
					y = y - dy;
					dx = -dx;
					dy = -dy;
				}

				// zone 2
				if ( 
					(( yOld + rayon ) <= brick.y )
					&& (( xOld + rayon ) > brick.x )
					&& (( xOld - rayon ) < ( brick.x + brick.width ) )
				) 
				{
					y = y - dy;
					dy = -dy;
				}

				// zone 3
				if ( 
					(( yOld + rayon ) <= brick.y )
					&& (( xOld - rayon ) >= (brick.x + brick.width) )
				) 
				{
					x = x - dx;
					y = y - dy;
					dx = -dx;
					dy = -dy;
				}

				// zone 4
				if ( 
					(( xOld + rayon ) <= brick.x )
					&& (( yOld + rayon ) > brick.y )
					&& (( yOld - rayon ) < ( brick.y + brick.height ) )
				) 
				{
					x = x - dx;
					dx = -dx;
				}

				// zone 5
				if ( 
					(( xOld - rayon ) >= (brick.x + brick.width) )
					&& (( yOld + rayon ) > brick.y )
					&& (( yOld - rayon ) < ( brick.y + brick.height ) )
				) 
				{
					x = x - dx;
					dx = -dx;
				}

				// zone 6
				if ( 
					(( yOld - rayon ) >= (brick.y  + brick.height) )
					&& (( xOld + rayon ) <= brick.x )
				) 
				{
					x = x - dx;
					y = y - dy;
					dx = -dx;
					dy = -dy;
				}

				// zone 7
				if ( 
					(( yOld - rayon ) >= (brick.y  + brick.height) )
					&& (( xOld + rayon ) > brick.x )
					&& (( xOld - rayon ) < ( brick.x + brick.width ) )
				) 
				{
					y = y - dy;
					dy = -dy;
				}

				// zone 8
				if ( 
					(( yOld - rayon ) >= (brick.y  + brick.height) )
					&& (( xOld - rayon ) >= (brick.x + brick.width) )
				) 
				{
					x = x - dx;
					y = y - dy;
					dx = -dx;
					dy = -dy;
				}

				brick.destroy();
			} else {
				// sinon... bah, pas de collision hein ^_^ 
			}
		}

		this.collide = function( obj ) {
			switch ( obj.type ) {
				case 'ball' :
					collideBall( obj );
					break;
				case 'racket':
					collideRacket( obj );
					break;
				case 'brick':
					collideBrick( obj );
					break;
				default:
					console.error("Ball.collide : Type '" + obj.type + "'not recognized");
			}

		};

		this.resize = function() {
			width = $ball.width();
			height = $ball.height();
			xMax = $(document).width();
			yMax = $(document).height();
		};

		this.reset = function() {
			x = xMax / 2;
			y = yMax / 2;
			angle = 1.25 * Math.PI +
				(Math.random()* 0.25 * Math.PI);
			speed = 8;
			dx = speed * Math.cos( angle );
			dy = speed * Math.sin( angle );
		};


		this.reset();
	};

	jsBrick = (jsBrick === undefined) ? {} : jsBrick;
	jsBrick.Ball = Ball;
	window.jsBrick = jsBrick;

}(jQuery));
