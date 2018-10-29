var sendEl = document.querySelector("#send");
var kvadratSEl = document.querySelector("#kvadratS");
var svarKvadratEl = document.querySelector("#svarKvadrat");
var rektangelLEl = document.querySelector("#rektangelL");
var rektangelBEl = document.querySelector("#rektangelB");
var svarRektangelEl = document.querySelector("#svarRektangel");
var sirkelREl = document.querySelector("#sirkelR");
var svarSirkelEl = document.querySelector("#svarSirkel");

sendEl.addEventListener("click", beregn);
function beregn(){
	var side = Number(kvadratSEl.value);
	if(side<0){
		alert('Størrelsene må må være positive');
	}
	var omkretsKvadrat = 4*side;
	var arealKvadrat = side*side;

	var lengde = Number(rektangelLEl.value);
	var bredde = Number(rektangelBEl.value);
	var omkretsRektangel = 2*lengde + 2*bredde;
	var arealRektangel = lengde*bredde;

	var radius = Number(sirkelREl.value);
	var omkretsSirkel = 2*Math.PI*radius;
	var arealSirkel = Math.PI*radius*radius;

	if(side<0 || lengde <0 || bredde < 0 || radius < 0){
		alert('Størrelsene må må være positive');
		return;
	}
	svarKvadratEl.innerHTML = "Kvadratet har sidekanter " + side + " cm. Omkretsen er " + omkretsKvadrat + " cm og arealet er " + arealKvadrat + " cm<sup>2</sup>";
	svarRektangelEl.innerHTML = "Rektangelet har lengde " + lengde + " cm og bredde " + bredde + " cm. Omkretsen er " + omkretsRektangel + " cm og arealet er " + arealRektangel + " cm<sup>2</sup>";
	svarSirkelEl.innerHTML = "Sirkelen har radius " + radius + " cm. Omkretsen er " + omkretsSirkel.toFixed(2) + " cm og arealet er " + arealSirkel.toFixed(2) + " cm<sup>2</sup>";
} 
