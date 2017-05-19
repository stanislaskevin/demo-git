/*jslint browser:true, white:true */
/*global $ */
 
(function () {
  "use strict";
  
  var $body,
 	  $personnage,
 	  $pnj,
      $terrain,
      $controles,
      position = {};
 
  var collision = (function () {
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

  function moveLeft() {
    position.left -= 20;
    if (position.left < 0) {
    	position.left = 0;
    }
    $personnage.css('left', position.left);
  }

  function moveRight() {
    position.left += 20;
    if ((position.left + $personnage.width()) 
    	> $terrain.width()) {
    	position.left = 
    		$terrain.width() - $personnage.width();
    }
    $personnage.css('left', position.left);
  }

  function moveTop() {
    position.top -= 20; 
    if (position.top < 0) {
    	position.top = 0;
    }
    $personnage.css('top', position.top);
  }

  function moveBottom() {
    position.top += 20;
   if ((position.top + $personnage.height()) 
    	> $terrain.height()) {
    	position.top = 
    		$terrain.height() - $personnage.height();
    }
    $personnage.css('top', position.top);
  }
  
  function initialiseObjets() {
  	  $body = $('body');
    $personnage = $('#personnage');
    $pnj = $('#pnj');
    $terrain = $('#terrain');
    $controles = $('#controles');
    position = $personnage.position();
    // console.log(position);
  }
  
  
  function attacheActions() {
    $controles.find('.left').click(moveLeft);
    $controles.find('.right').click(moveRight);
    $controles.find('.top').click(moveTop);
    $controles.find('.bottom').click(moveBottom);

    $body.on('keydown', function(ev) {
		console.log(ev.keyCode);
		switch (ev.keyCode) {
			case 39: // droite
				moveRight();
				break;
			case 37: // gauche
				moveLeft();
				break;
			case 38: // haut
				moveTop();
				break;
			case 40: // bas
				moveBottom();
				break;
		}

    });
  }

  $(document).ready(function (){
    initialiseObjets();
    attacheActions();

    setInterval(function() {
    	console.log('colision ? ' + collision($pnj, $personnage));
    }, 1000);

  });
  
  
}());
