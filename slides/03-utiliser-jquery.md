## jQuery

### Write less, do more

  
  

2013-02

  
  
_ [Gnuside](http://www.gnuside.com) / [@gnuside](http://twitter.com/gnuside) _

## Où trouver JQuery ?

### Choisir la bonne versions ...

Minifiée ?

... ou pas ?

## Utiliser JQuery

### Installation locale

  * dans votre dossier de script (ex: `chemin-vers-mes-js/` ) 

    
    
    <script type="text/javascript" 
                	src="chemin-vers-mes-js/jquery.js">
                </script>

### À partir d'un site distant

### Commencer les traitements

    
    
    $(document).ready(function(){
                	// faire des choses quand DOM sera prêt
                });

## Préambule

### Le "$"

  * Alias de la fonction `jQuery`
  * Utilisé pour construire les objets de type `jQuery`

### Le type jQuery

  * Equivaut à une requête
  * Une collection d'éléments
  * Peut être vide ( `.length == 0` ) 

## Selecteurs

### Définition

  * Référence à des éléments
  * Ressemble aux sélecteurs CSS

### Types

`$("tagname")`

où _tagname_ est le nom de la balise

### Classes

`$(".classname")`

où _classname_ est le nom de la classe

### Identifiants

`$("#identifier")`

où _identifier_ est l'id de l'element

### Attributs

`$("[attr='val']")`

où _attr_ est l'attribut choisi  
et _val_ la valeur souhaitée

### Universel

`$("*")`

### Pseudo-classes

`$(":something")`  

  

  * Position - `:first` , `:last` , `:even` , `:odd` , `:eq(index)` ... 
  * Formulaires - `:text` , `:password` , `:radio` , `:checkbox` ... 
  * Attributs - `:enabled` , `:disabled` , `:selected` , `:checked` ... 

### Combinaisons de selecteurs

  * Children - `#container children`
  * Intersection - `[name="value"][name2="value2"]`
  * Union - `selector1, selector2, selectorN`
  * Element adjacent - `prev + next`
  * Element suivant - `prev ~ siblings`

### Demo !

[jQuery Selector Test
Bed](http://files.sawmac.com/js1e/chapter05/selectors.html)

## Filtres et parcours

### Selon un sélecteur

`.filter( selector )`

    
    
    $('section').filter('#filter-selector').css('background-color', 'red');

### Selon une fonction

`.filter( function( index ) )`

    
    
    $('tt').filter(function(index) {
    	return $(this).hasClass('filter-function');
    }).css('background-color', 'red');

### Selon un element

`.filter( element )`

    
    
    $("section")
    	.filter( document.getElementById('filter-element') )
    	.css('background-color', 'red');

### Selon une autre collection d'objets

`.filter( jQuery object )`

    
    
    $('section').filter( $('#filter-jquery') ).css('background-color', 'red');

### Recherche

`.find( expr )`  
Cherche parmi les elements fils

    
    
    $('section').find('tt#find-tt').css('background-color','red');

## Itérateurs

### Pour chaque

`.each( expr )`

    
    
    $('section > h2').each( function() { 
                	console.log(this.textContent); 
                	} );

### Association

`.map( func )`

    
    
    var result = $('section > h2').map( function() { 
                	return this.textContent; 
                	} ).get();
                console.log(result);
                

## Fin

### Références

  * [TutorialPoint - jQuery - Selectors](http://www.tutorialspoint.com/jquery/jquery-selectors.htm)

### Des questions ?

