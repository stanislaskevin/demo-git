/*jslint browser:true, devel:true, white:true */
/*global $ */

(function() {

	var STATE_INTRO = 0,
		STATE_RUNNING = 1,
		// STATE_PAUSE = 2,
		STATE_FINISH = 3;

	var DIR_LEFT = 'tata',
		DIR_RIGHT = 'titi',
		DIR_TOP = 'tutu',
		DIR_BOTTOM = 'toto';

	var $body,
	    $terrain,
	    $message,
	    $snake,
	    gameState = STATE_INTRO,
	    bonusSize = 20,
	    terrainSize = 400,
	    collision, 
	    direction,
	    interval,
	    intervalDelay;
	    score = 0;

  	collision = (function () {
      	function getPositions($elem) {
          	var pos, width, height;
          	pos = $elem.position();
          	width = $elem.width();
          	height = $elem.height();
          	return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
      	}

      	function comparePositions( p1, p2 ) {
          	var r1, r2;
          	r1 = p1[0] < p2[0] ? p1 : p2;
          	r2 = p1[0] < p2[0] ? p2 : p1;
          	return r1[1] > r2[0] || r1[0] === r2[0];
      	}

      	return function ( $a, $b ) {
          	var pos1 = getPositions( $a ),
              	pos2 = getPositions( $b );
          		return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
      	};
  	}());

	function initializeDomReferences() {
		$body = $('body');
		$terrain = $('#terrain');
		$message = $('#message');
	}

	function ajouteBonus() {
		var $bonus,
			left,
			top;

		// pour les gens normaux 
		// left = Math.floor(Math.random() * (terrainSize - bonusSize));
		// top = Math.floor(Math.random() * (terrainSize - bonusSize));

		// pour les maniaques qui veulent aligner sur la grille :
		left = Math.floor(Math.random() * (terrainSize - bonusSize) / bonusSize) * bonusSize;
		top = Math.floor(Math.random() * (terrainSize - bonusSize) / bonusSize) * bonusSize;

		$bonus = $('<div></div>');
		$bonus.addClass('bonus')
			.css({
				left: left,
				top: top
			})
			.appendTo($terrain);
	}

	function ajouteSnake() {
		$snake = $('<div></div>')
			.addClass('snake')
			.appendTo($terrain)
			.css({
				top: '100px',
				left: '100px'
			});
	}

	function gameOver() {
		if (gameState !== STATE_RUNNING) { return; } 

		console.log("SNAKE - Fin du jeu");
		gameState = STATE_FINISH;
		$message.text('Perdu !');
		$message.show();
	}

	function gereCollisions() {
		// voir si le snake collisionne avec l'un des bonus
		$('.bonus').each(function () {
			var $bonus = $(this);

			if (collision($snake, $bonus)) {
				// youpi, j'ai une collision ;)
				$bonus.hide();
				$bonus.remove();
				ajouteBonus();
				score += 1;

				intervalDelay = Math.floor(intervalDelay * 0.9);
			} 
		});
	}

	function gereDepassements() {
		var pos = $snake.position();
		if (pos.left < 0) { gameOver(); }
		if (pos.left >= $terrain.width()) { gameOver(); }
		if (pos.top < 0) { gameOver(); }
		if (pos.top >= $terrain.height()) { gameOver(); }
	}

	function moveAuto() {
		if (gameState !== STATE_RUNNING) { return; } 
		var position = $snake.position();
	

		switch (direction) {
			case DIR_TOP: 
				$snake.css({
					top: (position.top - 20) + 'px'
				});
				break;

			case DIR_LEFT: 
				$snake.css({
					left: (position.left - 20) + 'px'
				});
				break;

			case DIR_RIGHT:
				$snake.css({
					left: (position.left + 20) + 'px'
				});
				break;

			case DIR_BOTTOM: 
				$snake.css({
					top: (position.top + 20) + 'px'
				});
				gereCollisions();
				gereDepassements();
				break;

			default: 
				// erreur - c'est quoi cette valeur de direction bizarre ?
		}
		gereCollisions();
		gereDepassements();

		setTimeout(moveAuto, intervalDelay);
	}

	function gameStart() {
		// on ne restart pas si le jeu est déjà en cours
		if (gameState !== STATE_INTRO) { return; } 

		console.log("SNAKE - démarrage du jeu...");
		gameState = STATE_RUNNING;
		direction = DIR_RIGHT;
		intervalDelay = 500;

		$message.hide();
		ajouteBonus();
		ajouteBonus();
		ajouteSnake();
		
		setTimeout(moveAuto, intervalDelay);
	}


	function moveTop() {
		if (gameState !== STATE_RUNNING) { return; } 
		direction = DIR_TOP;
	}

	function moveLeft() {
		if (gameState !== STATE_RUNNING) { return; } 
		direction = DIR_LEFT;
	}

	function moveRight() {
		if (gameState !== STATE_RUNNING) { return; } 
		direction = DIR_RIGHT;
	}

	function moveBottom() {
		if (gameState !== STATE_RUNNING) { return; } 
		direction = DIR_BOTTOM;
	}

	function attachKeyManagement() {
		$body.keydown(function(ev) {
			switch(ev.keyCode) {
				case 32: // ESPACE
					gameStart();
					break;

				case 37: // LEFT
					moveLeft();
					break;

				case 38: // TOP
					moveTop();
					break;

				case 39: // RIGHT
					moveRight();
					break;

				case 40: // BOTTOM
					moveBottom();
					break;

				default: 
					console.log("keydown " + ev.keyCode);
			}
		});
	}

	$(document).ready(function() {
		initializeDomReferences();
		attachKeyManagement();
	});
}());

