## Javascript &amp; jQuery

### Manipulations HTML et CSS

  
  

2013-02

  
  
_ [Gnuside](http://www.gnuside.com) / [@gnuside](http://twitter.com/gnuside) _

----

## Texte et contenu

----

### Récupérer le contenu

`.html()` et `.text()`

    
```javascript
alert($("#get-text p:first").html());
```           
    
```javascript
alert($("#get-text p:first").text());
```            

----

### Changer du contenu

`.html(content)` et `.text(content)`  
Changent le contenu (innerHTML) des éléments sélectionnés

    
```javascript
$("#change-content").html("Hello brother, i'm here as html !");
```            
    
```javascript
$("#change-content").text("Hello brother, i'm here as text !");
```

> Ô brother, where art thou ?

----

### Ajouter du contenu dedans

`.prepend(content);`  
`.append(content);`  
Ajoute du contenu avant ou après celui de l'element sélectionnés

    
```javascript
$("#add-content-inside")
  .prepend("Ô rage ! ")
  .append(" Ô vieillesse ennemie !")
```           

> Ô désespoir !

----

### Ajouter du contenu autour

`.before(content);`  
`.after(content);`  
Ajoute du contenu avant ou après l'élément sélectionné

    
```javascript
$("#add-content-after")
                    .before("<p>Hamlet (Act 3 scene 1)</p>")
                    .after("<small>by Shakespeare</small>");
```            

> &amp;dash; To be or not to be, that is the question...

----

## Noeuds DOM

----

### Créer des noeuds

`$('your html code here');`

  

    
```javascript
$("<p>Something to add somewhere</p>")
```            

----

### Cloner des noeuds

`.clone()`

  

    
```javascript
$("h3#clone-node").clone();
```            

----

### Insérer des noeuds

`.insertBefore()` , `.insertAfter()`  
et `.appendTo(selector)`

    
```javascript
$('<em>Deus dixit :</em>').insertBefore('#insert-nodes');
            $('<span>Et lux facta est.</span>').appendTo('#insert-nodes');
```            

----

> Lux fact !

###  Supprimer des noeuds  
(ou presque)

`.empty()` , `.remove()` et `.detach()`

    
```javascript
$('#suppress-demo').empty();
$('#suppress-demo').detach().insertAfter('#suppress-demo-prev');
$('#suppress-demo').remove();
```            

> In the beginning was the Word

----

### Remplacer des noeuds

`.replaceWith( newcontent )`  
ou `.replaceWith( function )`

    
```javascript
$('#replace-demo button').click(function(){
                    $(this).replaceWith( "<div>" + $(this).text() + "</div>" );
            });
  ```           

First Second Third

----

### Attributs

`.prop( propertyName )`  
`.attr( attrName, [value] )`  
`.removeAttr( attrName )`

----

## Propriétés CSS

----

### Récupérer les propriétés

`.css( name )`  
Retourne la valeur actuelle  
de la propriété _name_ sélectionnée

  

    
```javascript
var result = $("#css-get-style").css('color');
            alert(result);
  ```           

> À vaincre sans péril, on triomphe sans gloire

----

### Changer une propriété

`.css( name, value )`  
Change la valeur de la propriété _name_ à la valeur _value_

  

    
```javascript
$("#css-change-property").css('color','red');
```            

> Va, je ne te hais point.

----

### Changer plusieurs propriétés

`.css({properties})`  
Change plusieurs propriétés CSS en même temps

  

    
```javascript
$("#css-change-properties").css({
                    'color' :'red',
                    'background-color': 'black'
            });
  ```           

> Rodrigue, as-tu du coeur ?

----

### Les classes

`.addClass()` , `.removeClass()`  
et `.toggleClass()`

----

## Tailles &amp; et positions

----

### Changer les dimensions

`.height([size])`  
`.width([size])`  
Retourne ou change les dimensions de l'objet

  

![](images/enlargeyourpeniche.png)

    
```javascript
$('#css-change-dimensions')
.width('300px')
.height('300px');
```              
    
```javascript
$('#css-change-dimensions')
.width('50px')
.height('50px');
```              

----

### Position

`.position()` et `.offset( value )`

Relatifs (respectivement) à l'élément parent ou au document

Possèdent les attributs `.top` et `.left`

    
```javascript
$('#css-position-demo').click(function(){
    var offset = $(this).offset();
    $(this).offset( { 
            top: offset.top, 
            left: ( offset.left + 200 ) % $(document).width() 
    });
});
    ```            

----

## Fin

----

### Références

  * [JQuery API](http://api.jquery.com/)

----

### Des questions ?


----

### Merci !

