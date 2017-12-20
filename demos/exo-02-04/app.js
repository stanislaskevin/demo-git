/*jslint browser:true, devel:true, white:true */
/*global console, $, jQuery */

"use strict";


//console.log("dis bonjour");

function afficherEnCours() {
  console.log("baratin en cours");
  // attraper toutes les cases non-cochées, et les afficher
  // cacher les autres (les cochées)
  $('#task-list')
  	.removeClass('mode-all')
  	.removeClass('mode-completed')
  	.addClass('mode-active');
}

function afficherTerminees() {
  console.log("truc terminées");
  // attraper toutes les cases cochées, et les afficher
  // cacher les autres (les non-cochées)
  $('#task-list')
  	.removeClass('mode-all')
  	.removeClass('mode-active')
  	.addClass('mode-completed');
}

function afficherToutes() {
  console.log("machin toutes");
  // attraper toutes les cases, et les afficher
  $('#task-list')
  	.removeClass('mode-completed')
  	.removeClass('mode-active')
  	.addClass('mode-all');
}


function ajouteTache() {
  var nom, id;
  // récupérer  le nom de la prochaine tache
  // dans le champ de texte
  nom = $('#future-task').val();
  id = 'task-' + ($('.task').length + 1);

  $('#task-list').append(
    '<p class="task active">' +
    '<input type="checkbox" id="' + id + '"/>' +
    '<label for="' + id + '">' + nom + '</label>' +
    '</p>'
  );

  $('#future-task').val('').focus();

  // eviter l'évenement par défaut
  return false;
}

$(document).ready(function () {
  afficherEnCours();

  // solution maline et qui marche
  $('#add-future-task').click(ajouteTache);

  $('#show-active').click(afficherEnCours);
  $('#show-completed').click(afficherTerminees);

  // solution pas maline mais qui marche
  $('#show-all').click(function (){
    afficherToutes();
  });
  
  // click(...)  synonyme de  on('click', ...) 
  
  $('#task-list').on('click', '.task', function(e) {
  	  e.preventDefault();
  	  $(this)
  	    .toggleClass('active')
  	    .toggleClass('completed'); 

	var $input = $(this).find('input');
	
	$input.prop('checked', ! $input.prop('checked') )
  });
});
