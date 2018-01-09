<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Interagir avec les éléments de formulaire et gérer les erreurs

### jQuery validation : pour une gestion avancée des erreurs

<!-- 07/04 Document -->

----

## jQuery validation : pour une gestion avancée des erreurs

Nous avons vu précédemment comment gérer les évènements du formulaires. 

Cependant mettre en place de tels évènement et écrire soi-même ses fonctions de validation pour vérifier que tel ou tel champ est bien valide peut rapidement devenir fastidieux.

__Le plugin _jQuery Validate_ propose une méthode simple et rapide pour répondre à ce besoin.__

Voyons comment le mettre en place et l'utiliser..

----

## D'abord un formulaire

Commencer par mettre en place un formulaire dans votre page HTML :

<gx-label>HTML</gx-label>

```html
<form id="monFormulaire" method="post" action="#">
   <textarea id="mon_textarea" name="mon_textarea">
   </textarea>
   <input type="email" id="mon_email" name="mon_email" />
   <input type="email" id="mon_telephone" 
          name="mon_telephone" />
   <input type="submit" value="ok" id="btn_submit" />
</form>
```

----

## Ensuite installer le script

Ensuite télécharger le plugin jQuery Validation sur son site officiel : https://jqueryvalidation.org/

Puis installez-le sur votre page, en ajoutant la balise `<script>` adéquate :

```
<script type="text/javascript"
        src="jquery.validate.min.js"></script>
```

----

## Mettre en place la validation

Pour mettre en place la validation, jQuery validation ajoute une méthode `.validate(params)` où _params_ est un objet JSON.

Cet objet contient, pour chaque champ, les contraintes et les types à valider. Par exemple :

* `required` : booleen, indique si le champ est obligatoire ;
* `email` : booleenn indique si le champ est un email et doit être validé comme tel ;
* `minlength` : entier, indique la longueur minimum du contenu ;
* `maxlength` : entier, indique la longueur maximum du contenu ;

:blue_book: Lire https://jqueryvalidation.org/validate/ pour la description détaillée de la méthode.

----

## Mettre en place la validation

### Exemple

```
$("#monFormulaire").validate({
  rules: {
    "mon_textarea":{
      "required": true,
      "minlength": 2,
      "maxlength": 60000
    },
    "mon_email": {
      "email": true,
      "maxlength": 255
    },
    "mon_telephone": {
      "required": true
    }
  }
})
```

----

<!-- 
TODO: ajouter section sur la traduction des messages d'erreur
TODO: ajouter section sur les regles custom de validation
https://www.pierrefay.fr/blog/jquery-validate-formulaire-validation-tutoriel.html
---->

## Merci pour votre attention

Vous maitrisez maintenant les bases de jQuery Validation, mais on peut aller assez loin avec, notamment :

* traduire les messages d'erreur  ;
* réagir à telle ou tel type d'erreur avec une fonction ;
* ajouter des règles de validation sur-mesure pour de nouveaux types de données.

Je vous invite à jeter un coup d'oeil à la documentation pour en savoir plus :wink:
