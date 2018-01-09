
FIXME: rédiger l'exercice

 construction d'une popup
●
 Pour illustrer la prise en main de jQuery, nous
allons créer une popup d'identification
●
 deux champs de saisie : user et password
●
 Pour valider la saisie un script vallidation.js vérifie si
le champ est remplit ou non
●
 ce script créé un événement personnalisé qui sera
appelé ensuite sur des événement du DOM

----

script de validation
●
 le fichier validation.js doit être ajouter avant le script AuthPopup.js
$(":text,:password").live('validation',function(){
var val = $.trim($(this).val());
var errorMessage=[];
if($(this).hasClass('required') && val=="")
errorMessage.push("Champ obligatoire");
var isOk = errorMessage.length==0;
var msg;
if(!isOk)
msg = "<div class='error'>"+errorMessage.join('<br/>')+"</div>";
if($(this).next().is("div.error"))
$(this).next().remove();
$(this).after(msg);
$(this).data("isValid",isOk);
});

----
 Création d'un objet JavaScript AuthPopup qui
permettra
●
 de créer le code HTML
●
 d'ajouter des événements
–
 pour la validation du formulaire
●
 d'afficher le formulaire
●
 d'envoyer les informations au serveur
●
 de cacher le formulaire

----

Structure de base JavaScript
var AuthPopup = {
create: function(){},
addEvents: function(){},
show: function(){},
sendToServer: function(){},
hide: function(){}
};

----

La mise en place du HTML est confiée à la fonction create()

```javascript
create: function(){
var html=[];
var i=0;
html[i++] = "<div id='authPopup'>";
html[i++] = "<form>";
html[i++] = "<div id='header'>Identifiez-vous<div
 id='cmdCancel'>x</div></div>";
html[i++] = "<div id='body'>";
html[i++] = "<div><label for='user'>User </label>";
html[i++] = "<input type='text' id='user' class='required'/></div>";
html[i++] = "<div><label for='pswd'>Password </label>";
html[i++] = "<input type='password' id='pswd' class='required'/></div>";
html[i++] = "<div><input type='submit' id='cmdSend' value='OK'/></div>"
html[i++] = "</form>";
html[i++] = "</div>";
},
$('body').append(html.join(""));
$('body').append("<div id='overlay'></d
```

----

 L'affichage de la popup est confiée à la méthode
show()

```javascript
show: function(){
if($("#authPopup").size() == 0){
this.create();
this.addEvents();
}
var top = $(window).scrollTop()+($(window).height() - $('#authPopup').height())/2;
var left = $(window).scrollLeft()+($(window).height() - $('#authPopup').height())/2;
$("#authPopup")
.css('top',Math.max(0,top))
.css('left',Math.max(0,left))
.slideDown('slow')
.find(':text,textarea').first().focus();
},
$("#overlay").fadeIn();
```

----

 La fermeture de la popup est gérée par la méthode
hide()

```javascript
hide: function(){
$("#authPopup").slideUp('slow',function(){
$("#overlay").fadeOut();
});
}
```

----

Les événements sont ajoutés par la méthode
addEvents()
●
 la méthode de validation est liée à l'événement du DOM
par la méthode trigger()
●
 la croix doit fermer la popup
–
 le proxy est utilisé pour garder de la popup lors de l'appel de
hide()
●
 l'appui sur la touche OK doit soumettre le formulaire

----

Code de la fonction addEvents()
addEvents: function(){
$(":text, :password").live("blur",function(){
$(this).trigger("validation");
});
$("#cmdCancel").click($.proxy(this.hide,AuthPopup));
$("#authPopup").children("form").submit(
{"popup":this},
function(event){
if($('#user').val()=="" || $('#pswd').val()==""){
alert("Formulaire incomplet");
}
else{
event.data.popup.sendToServer();
event.data.popup.hide();
}
return false;
});
},

----

 Code de la méthode addEvents()
●
 Enregistrement de l'événement click
–
 une première approche aurait pu donner ceci :
$("#cmdCancel").click(this.hide);
 ●
●
 mais dans le contexte de l'appel de l'événement this est le bouton
submit !!!
–
 jQuery fournit $.proxy() qui permet de définir le contexte
d'exécution d'une fonction
$("#cmdCancel").click($.proxy(this.hide,AuthPopup));
 ●
●
 lors de l'appel de $.proxy() this fait référence à AuthPopup
–
 le 2 nd paramètre est le contexte dans lequel doit être appelée la
méthode, AuthPopup qui est l'objet aurait pu être remplacé par
this

----

 Code de la méthode addEvents()
●
 soumission du formulaire (extraits de code)
$("#authPopup").children("form").submit({"popup":this},function(event)...
 –
–
 un objet est passé à submit(), cet objet référencie dans la
propriété popup l'objet AuthPopup
–
 cet objet est lié à l'objet event qui sera passé à la fonction
callback
–
 il devient alors d'appeler les méthode de l'objet AuthPopup
avec le bon contexte
event.data.popup.sendToServer();
event.data.popup.hide();
●
 la méthode addEvent() retourne false pour stopper
la soumission

----

 L'envoi des données au serveur est confiée à la
méthode sendToServer()
sendToServer: function(){
$.ajax({
'url':'authentification',
'type':'POST',
'context':this,
'data':{
'user':$("#user").val(),
'pswd':$("#pswd").val()
},
'success':function(){
console.log("envoi réussi");
}
},
});
