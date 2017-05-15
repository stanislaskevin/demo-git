
/*jslint browser: true */

// l'état du jeu
var game;

// enumeration de valeurs (équivalent constantes)
var JEU_EN_COURS=0, JEU_GAGNE=1, JEU_PERDU=2;

// des etiquettes qui pointent sur les éléments du DOM que je vais manipuler
var nombreDeCoupsElem = document.querySelector('#nombreDeCoups');
var messageElem = document.querySelector('#message');
var nombreUtilisateurElem = document.querySelector('#nombreUtilisateur');


function initialiser() {
	game = {
		nbCoupsMax: 10,
		nbCoupsJoues: 0,
		etatDuJeu: JEU_EN_COURS,
		coupActuel: "",
		message: "Tapez un nombre",

		// cible = un nombre au hasard dans [0...999]
		cible: Math.floor(Math.random() * 1000),

		// trois actions possibles
		collecterValeurs: function() {
			this.coupActuel = Number(nombreUtilisateurElem.value);
		},

		jouerUnTour: function() {
			if (this.nbCoupsJoues >= this.nbCoupsMax) {
				return false;
			}

        	// on a gagné
        	if (this.coupActuel === this.cible) { 
        		this.message = "gagné !";
        		this.etatDuJeu = JEU_GAGNE;

        	} else {
        		// si on est là c'est qu'on est < ou >
        		var triche = "(psss... en fait c'est "+this.cible+")";
        		if (this.coupActuel < this.cible) {

                	this.message = this.coupActuel + " est trop petit" + triche ;
        		} else {
                	this.message = this.coupActuel + " est trop grand" + triche;
        		}

				// si j'ai pas gagné, je continue à compter les coups 
				// et tester si j'aurais pas perdu par hasard
				this.nbCoupsJoues += 1;
				if (this.nbCoupsJoues >= this.nbCoupsMax) {
					this.message = "perdu ! la réponse était " + this.cible;
					this.etatDuJeu = JEU_PERDU;
				}
        	}


		},

		mettreAJourVue: function() {
			messageElem.innerHTML = this.message;
			nombreDeCoupsElem.innerHTML = (this.nbCoupsMax - this.nbCoupsJoues);

			switch(this.etatDuJeu) {
				case JEU_GAGNE:
					break;
				case JEU_EN_COURS:
					break;
				case JEU_PERDU:
					break;
				default:
					break;
			}
		}

	};
	game.mettreAJourVue();
}


function jouer() {
	// récupere les informations depuis le html 
	game.collecterValeurs();

	// faire des trucs importants : décider, etc.
	game.jouerUnTour();

	// mettre à jour le HTML avec les informations qui ont bougé
	game.mettreAJourVue();

	return false;
}


initialiser();

