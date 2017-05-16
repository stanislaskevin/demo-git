/*jslint browser:true, white:true */
/*global $ */
 
(function () {
  "use strict";
  
  var $personnage,
      $terrain,
      $controles,
      position = {};
 
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
    $personnage = $('#personnage');
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
  }

  $(document).ready(function (){
    initialiseObjets();
    attacheActions();
  });
  
  
}());
