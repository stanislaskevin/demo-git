# TP 02 - Snakes 

### jQuery 

Mai 2017

----

## 0. Ingrédients

Quelques idées de variables qui pourraient vous inspirer des étapes ultérieures. __À vous de voir quand... ou même si c'est nécessaire !__ :wink: 

* `score` contenant le nombre de bonus attrapés
* `bonuses` contenant le tableau des différents bonus sur le terrain
* `snake` contenant le tableau des composants du serpent
* `gameRunning`indiquant si le jeu est démarré
* `moveDirection` indiquant dans quelle direction le joueur va

----

## 1. Créer un terrain (HTML, CSS)

* Préparer un fichier `index.html` 
  ```html
  <html>
      <!-- inclure ici jQuery et votre votre CSS -->
      <body>
          <div id="message">
            Appuyez sur ESPACE pour démarrer
          </div>
          <div id="terrain"></div> 
      </body>
      <!-- inclure ici votre JS -->
  </html>
  ```

* Styler en CSS ce terrain de la façon suivante
  * Sa taille doit etre 400x400 pixels
  * Sa couleur de fond doit être noire

----

## 2. Démarrage du jeu (JS)

* Ajouter un gestionnaire d'évènements sur `<body>` pour détecter l'appui de la touche ESPACE
* Écrire une fonction `gameStart()` qui :
  * imprime `SNAKE - démarrage du jeu...` dans la console
  * met la variable globale `gameRunning` à `true`
* Lorsque la touche ESPACE est pressée :
  * Masquer `<div id="message">`
  * Appeller la fonction `gameStart()` 

----

## 3. Ajouter un personnage (JS, CSS)

* Ecrire une fonction `ajouteSnake()` qui ajoute dynamiquement un `<div class="snake">` dans le terrain, celui ci fera office de personnage
  * Il doit faire 20x20 pixels 
  * Il doit être positionné de façon absolue par rapport à `<div id="terrain">`
  * Il doit être placé en `top: 100px` et `left: 100px`
* Appeler la fonction `ajouteSnake()` au chargement de la page

----

## 4. Déplacements du personnage (JS)

* Ajouter un gestionnaire d'évènements sur `<body>` pour détecter l'appui des touches flèchées
* Écrire les fonction `moveTop`, `moveLeft`, `moveRight`, `moveBottom` qui déplacent le personnage de `20px` dans chacune des directions
  * Il n'est pas nécessaire de tester si l'on dépasse du terrain pour l'instant :wink:

----

## 5. Ajouter un bonus (JS, CSS)

* Écrire une fonction `ajouteBonus()` qui ajoute dynamiquement un `<div class="bonus">` dans le terrain
  * Il doit faire 20x20 pixels 
  * Il doit être positionné de façon absolue par rapport à `<div id="terrain">`
  * Il doit être placé à une position aléatoire. Utiliser pour cela la fonction `Math.floor(Math.random() * 400)`
* Appeler `ajouteBonus()` deux fois au démarrage de jeu dans `gameStart()` afin d'obtenir deux bonus
* Vérifier que l'on a bien deux bonus qui apparaissent :wink:

----

## 6. Collisions

* Intégrer le code suivant (copier-coller) dans votre fichier `snake.js`

  https://gist.github.com/anonymous/97d79e3a92457738c7597a10e94f2baf

----

## 6. Collisions (suite)

* La fonction `collision($a, $b)` permet de
  * Détecter quand objets se recouvrent/touchent
  * Retourner `true` quand c'est le cas et `false` sinon

* Utiliser cette fonction pendant le déplacement du personnage
* S'il y a une collision entre un bonus et le personnage
  * Faire disparaitre le bonus concerné
  * Compter alors un point de plus
  * Appeler `ajouteBonus` pour créer un nouveau bonus (ou remplacer celui qui vient d'être touché ?)

----

## 7. Fin de partie

* Modifier les fonctions  `moveTop`, `moveLeft`, `moveRight`, `moveBottom` pour détecter quand le joueur se déplace au dela des bords de l'écran
* Lorsque c'est le cas, la partie se termine et `<div id="message">` réapparait et affiche `Perdu !` ainsi que le score du joueur

----

## 8. Déplacement automatique

* Modifier les fonction `moveLeft`, `moveRight`, `moveTop`, `moveBottom` de telle sorte qu'elle ont seulement pour effet de stocker une direction dans `direction` à l'appui des touches (ex: `"Top"`, `"Bottom"`, `"Left"`, `"Right"`)
* Ecrire une fonction `moveAuto()` qui, selon le contenu de `direction` déplace le personnage vers le haut/bas/gauche/droite
* Mettre la valeur de `direction` à `"Bottom"` en début de partie

__N.B :__ en d'autre termes, il s'agit _presque_ de déplacer l'ancien code des `moveTop`/`moveLeft`/`moveRight`/`moveBottom` vers `moveAuto()`

----

## 8. Déplacement automatique (suite)

* Lors du `gameStart()` mettre en place un `setInterval` appellant la fonction `moveAuto()` toutes les 500 milisecondes... pour que le personnage se déplace tout seul !
* Détruire le `setInterval` en fin de partie
* Modifier la détection des bonus de telle sorte que :
  * l'on détruise le `setInterval` avec l'autodéplacement
  * l'on re-crée le `setInterval` avec l'autodéplacement, mais avec une interval réduit de 10%

__N.B :__ ...donc si vous n'indiquez pas au personnage où aller, il continue tout droit et va dans le mur ! :smiling_imp: 

----

## 9. Snake !!!

* Faire en sorte que la longueur du serpent s'allonge à chaque bonus attrapé
* Terminer la partie si la tête du serpent touche une des parties de son corps :smiling_imp:

----

## 10. Plusieurs snakes

(pour les ultra-méga-motivés pour qui le reste est vraiment trop facile) 

* Ajouter un deuxieme joueur
* Gérer 4 autres touches au clavier
* Détecter les collisions entre les deux serpents
* Détecter lequel des deux joueurs gagne ou perd

----

## Fin :smile:
