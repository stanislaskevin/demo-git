<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Manipuler le DOM avec jQuery

### Manipuler les attributs des balises

<!-- 04/04 QCM -->

----


## Quelle est la meilleure façon de récupérer la valeur du `input`  suivant ?

<small><small>

```html
<input type="text" id="login" value="test" />
```

_Cochez LA ou LES bonnes réponses, puis cliquez sur VALIDER pour continuer_

### $('#login').attr('value') 

> ERREUR : Malheureusement c'est une mauvaise réponse . `.attr()` récupère la valeur initiale de l'attribut dans le HMTL mais pas la valeur tapée dynamiquement par l'utilisateur !

### $('#login').val() 

> BONNE RÉPONSE

### $('#login').prop('value')

> ERREUR : Même si cette méthode fonctionne aujourd'hui car la valeur est dynamique dans le DOM, donc manipulable par `.prop()`, elle est déconseillée par les auteurs de jQuery au profit de `$.val()`

</small></small>

----

## Qu'affiche le code suivant ?

<small><small>

<gx-label>HTML</gx-label>

```html
<div class="card">
  <a href="http://example.com">Site de démo</a>
</div>
```

<gx-label>Javascript</gx-label>

```javascript
$('.card').text();
```

### `Site de démo`

> BONNE RÉPONSE

### `&lt;a href="http://example.com"&gt;Site de démo&lt;/a&gt;`

> ERREUR : Malheureusement c'est une mauvaise réponse . `.text()` récupère les textes mais pas le code HTML, et cela ne pose pas de problème d'encodage (contrairement à `$.html()`

### `<a href="http://example.com">Site de démo</a>`

> ERREUR : Malheureusement c'est une mauvaise réponse . `.text()` récupère les textes mais pas le code HTML

</small></small>


----

## Merci pour votre attention

