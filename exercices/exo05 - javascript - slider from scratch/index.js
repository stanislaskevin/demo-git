
var doigt = 0;
var mesImages = [
	"img/1.jpg",
	"img/2.jpg",
	"img/3.jpg",
	"img/4.jpg",
	"img/5.jpg"
];

function imagePrecedente() {
	doigt = doigt - 1;
	if (doigt < 0) {
		// mettre la position à la fin du tableau
		// quand on dépasse
		doigt =  mesImages.length -1;
	}
	afficheImage();
}

function imageSuivante() {
	doigt = doigt + 1;
	if (doigt >= mesImages.length) {
		// mettre la position à la fin du tableau
		// quand on dépasse
		doigt = 0;
	}
	afficheImage();
}

function afficheImage() {
	var elem;
	//alert("doigt est à " + mesImages[doigt]);
	
	elem = document.getElementById("display-picture");
	elem.src = mesImages[doigt];
}