<!-- footer: Copyright 2017 © Glenn ROLLAND – Reproduction interdite -->
<!-- page_number : true -->

<link rel="stylesheet" href="../../assets/style.css" />

# Se documenter, installer et configurer correctement un plugin jQuery

### Installer un slider animé avec "bxSlider"

<!-- 03/03 Document -->

----

Utiliser un plugin

Vous allez voir qu'utiliser un plugin est la plupart du temps un jeu d'enfant. Nous allons utiliser le plugin « Websanova Color Picker », proposé sur le siteThe Ultimate jQuery List. Rendez-vous donc sur ce site, allez dans la catégorie « Color Pickers » et cliquez surWebsanova Color Picker, puis surVisit Website. Une fois sur le site en question, téléchargez le plugin (il s'agit d'un fichier compressé, choisissez donc le format qui vous convient).

Décompressez l'archive et copiez la version minimisée des fichiers JavaScript et CSS dans le dossier dans lequel vous faites vos développements jQuery. Vous êtes maintenant prêts à utiliser le plugin. Il ne vous reste plus qu'à consulter la documentation. Dans notre cas, elle se trouve en ligne. La figure suivante vous montre à quoi elle ressemble.

Il ne reste plus qu'à faire référence au plugin en utilisant une balise<script>, au code CSS en utilisant une balise<link>dans l'en-tête, et à appliquer les consignes données dans la documentation. Voici un exemple d'utilisation de ce plugin :

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Websanova Color Picker</title>
    <link rel="Stylesheet" type="text/css" href="wColorPicker.1.2.min.css" />
  </head>
  <body>
    <div id="wcp1">
      <input id="wcp-input" type="text"/><br />
    </div>

    <script src="jquery.js"></script>
    <script src="wColorPicker.1.2.min.js"></script>
    <script>
      $(function() {
        $("#wcp1").wColorPicker({
            initColor: '#ccf',
            onSelect: function(color){
              $('body').css('background', color);
            },
            onMouseover: function(color){
              $('#wcp-input').css('background', color).val(color);
            }
        });
      });
    </script>
  </body>
</html>


Le code jQuery est directement tiré de la documentation du plugin.