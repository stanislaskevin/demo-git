## Notions

### Définitions

** Evenement (= _event_ ) **   
Un "quelque chose" qui se produit

**Handlers**   
Méthodes appelées pour la gestion de l'évènement

** Déclancheur (= _trigger_ ) **

(aka _trigger_ , _fire_ , etc.)

### Sources possibles

  * touche du clavier
  * clic ou déplacement souris
  * chargement d'une page
  * envoi d'une requête
  * appui de doigts sur un touchscreen

### Exemples

`.ready( function )` ou `.click( function )`

### Types d'évenements

  * _blur_ - l'élément perd le focus 
  * _change_ - l'élément change 
  * _click_ - un clic (de souris) 
  * _dblclick_ - un double clic (de souris) 
  * _error_ - une erreur de chargement (ou de déchargement) 
  * _focus_ - l'élement obtient le focus 
  * _keydown_ - une touche est pressée 
  * _keypress_ - une touche est pressée et relachée 
  * _keyup_ - une touche est relachée 
  * _load_ - le document est chargé 
  * _mousedown_ - un bouton de souris est pressé 
  * _mouseenter_ - la souris entre sur la surface de l'élément 
  * _mouseleave_ - la souris quitte la surface de l'élément (et de ses fils) 
  * _mousemove_ - la souris bouge 
  * _mouseout_ - la souris quitte la surface de l'élement 
  * _mouseover_ - le pointeur se déplace au dessus d'un élément 
  * _mouseup_ - un bouton de souris est relaché 
  * _resize_ - la fenetre change de taille 
  * _scroll_ - la fenetre défile 
  * _select_ - lorsqu'un texte est selectionné 
  * _submit_ - lorsqu'un formulaire est envoyé 
  * _unload_ - le document est déchargé 

## Gestion d'évènements

### Association

`.bind(eventType[, eventData], handler)`  
`.live(eventType[, eventData], handler)`  
`.delegate(selector, eventType, handler)`  
`.on(eventType, selector, eventData, handler)`

associe _handler_ au type d'évenement _eventType_

    
    
    // Bind
    $( "#members li a" ).on( "click", function( e ) {} );
    $( "#members li a" ).bind( "click", function( e ) {} );
    
    // Live
    $( document ).on( "click", "#members li a", function( e ) {} );
    $( "#members li a" ).live( "click", function( e ) {} );
    
    // Delegate
    $( "#members" ).on( "click", "li a", function( e ) {} );
    $( "#members" ).delegate( "li a", "click", function( e ) {} );
                

### Désassociation

`.unbind(eventType[, handler])`  
`die(eventType, selector, handler);`  
`off(eventType, selector, handler);`

désassocie _handler_ du type d'évenement _eventType_

### (Dés)association - exemple

    
    
    $('#event-association')
    .css('outline','1px solid red')
    .text('Now i handle events!')
    .bind('click', function( event ){
    	alert('Hi there!');
    	 });
                
    
    
    $('#event-association')
    .css('outline','none')
    .text('I handle no events...')
    .unbind('click');;
                

> I handle no events...

### Occurence unique

`.one(eventType, handler)`

    
    
    $('#event-one')
    .css('outline','1px solid red')
    .text('Now i handle events!')
    .one('click', function( event ){
    	alert('Hi there!');
    	$(this).css('outline','none')
    		.text('I handle no more events...!')
    	 });
                

> I handle no events...

### Déclancheur

`.trigger(eventType[, extraParameters])`  
déclanche l'évènement _eventType_

    
    
    $('#event-trigger-demo').bind('click', function() {
    	alert($(this).text());
    });
                
    
    
    $('#event-trigger-demo').trigger('click');
                

> I'm not really a button

### Nom des évènements

Tout ça fonctionne aussi  
sur des évenements non-prédéfinis !

  

Les évenements peuvent être précisés par des namespaces

## L'objet Event

### Attributs d'évènements

  * `keyCode` , `which` - code de la touche ou du bouton pressé 
  * `altKey` , `ctrlKey` , `shiftKey` , `metaKey` - modificateurs de touches 
  * `pageX` , `pageY` , `screenX` , `screenY` - coordonnées sur la page 
  * `relatedTarget` - objet lié à la souris 
  * `target` - objet déclancheur 
  * `timeStamp` - date de l'évènement 
  * `type` - type d'évènement 
  * `data` - paramètres optionnels 

### Méthodes

  * `preventDefault()` \- empêche l'action par défaut 
  * `isDefaultPrevented()` \- indique si `event.preventDefault()` a été appelé pour cet évènement 
  * `stopPropagation()` \- arrête la propagation de l'évenement aux objets parents 
  * `isPropagationStopped()` \- indique si la propagation de l'évènement a été arrêtée 
  * `stopImmediatePropagation()` \- empêche les autres handlers de gérer cet évènement 
  * `isImmediatePropagationStopped()` \- indique si `stopImmediatePropagation()` a été appelé 

## Evenements dynamiques

## Fin

### Références

  * [ LearnJQuery - understanding jQuery events ](http://www.learnjquery.org/newsletter/Tutorial-3-jquery-events.html)
  * [ Mkyong - Different between mouseout() and mouseleave() in jQuery ](http://www.mkyong.com/jquery/different-between-mouseout-and-mouseleave-in-jquery/)
  * [ Web Dev .NET - Differences Between jQuery .bind() vs .live() vs .delegate() vs .on() ](http://www.elijahmanor.com/2012/02/differences-between-jquery-bind-vs-live.html)
  * [ StackOverflow - jQuery.proxy() usage ](http://stackoverflow.com/questions/3349380/jquery-proxy-usage)
  * [ Jimmy Cuadra - Understanding jQuery 1.4's $.proxy() method ](http://jimmycuadra.com/posts/understanding-jquery-14s-proxy-method)
  * [ JQuery - Namespaced Events ](http://docs.jquery.com/Namespaced_Events)

### Des questions ?

### Merci !

