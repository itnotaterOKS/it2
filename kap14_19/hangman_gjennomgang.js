// 15.2 i boka
// henter inn canvas
var canvas = document.querySelector("#mittCanvas");
var ctx = canvas.getContext("2d");
// funksjoner for å tenge galge og hver kroppsdel
function tegnGalge(){ // denne kjøres med en gang, før brukeren begynner å gjette
	ctx.beginPath();
	ctx.moveTo(100, 320);
	ctx.lineTo(100, 300);
	ctx.lineTo(500, 300);
	ctx.lineTo(500, 320);
	ctx.moveTo(150, 300);
	ctx.lineTo(150, 20);
	ctx.lineTo(300, 20);
	ctx.lineTo(300, 50);
	ctx.lineWidth=4;
	ctx.stroke();
}
function tegnHode(){
	ctx.beginPath();
	ctx.arc(300, 75, 25, 0, 2*Math.PI);
	ctx.stroke();
	ctx.closePath();
}
function tegnKropp(){
	ctx.beginPath();
	ctx.moveTo(300, 100);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}
function tegnVenstreArm(){
	ctx.beginPath();
	ctx.moveTo(270, 150);
	ctx.lineTo(300, 110);
	ctx.stroke();
	ctx.closePath();
}
function tegnHoyreArm(){
	ctx.beginPath();
	ctx.moveTo(330, 150);
	ctx.lineTo(300, 110);
	ctx.stroke();
	ctx.closePath();
}
function tegnVenstreBein(){
	ctx.beginPath();
	ctx.moveTo(270, 200);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}
function tegnHoyreBein(){
	ctx.beginPath();
	ctx.moveTo(330, 200);
	ctx.lineTo(300, 150);
	ctx.stroke();
	ctx.closePath();
}
tegnGalge(); // tegner opp galgen

var tekstfeltEl = document.querySelector("#bokstav"); // henter inn tekstfeltet
var sjanserIgjenEl = document.querySelector("#sjanserIgjen"); // henter inn de tre p-elementene
var riktigeBokstaverEl = document.querySelector("#riktigeBokstaver");
var brukteBokstaverEl = document.querySelector("#brukteBokstaver");
/* UTVIDELSE! */
var tilbakemeldingEl = document.querySelector("#tilbakemelding");// trenger et element til å legge inn tilbakemelding til bruker.
var lydeffektEl = document.querySelector("#lydeffekt");// trenger et lydelement som kan spille av vinne/tape
var bakgrunnsmusikkEl = document.querySelector("#bakgrunnsmusikk"); // trenger et lydelement til å spille av bakgrunnsmusikk
/* utvidelse slutt */


var knappEl = document.querySelector("#knapp"); // henter inn knappen
knappEl.addEventListener("click", mottaBokstav); // kobler en hendelse til knappen
/* UTVIDELSE! */
var bodyEl = document.querySelector("body");
bodyEl.addEventListener("keydown", trykkEnter);
function trykkEnter(e){ // kjører programmet når man trykker enter også
		if(e.keyCode===13){ // enter har keyCode 13
		mottaBokstav()
	}
}
/* utvidelse slutt */
var brukteBokstaver = []; // oppretter en array som inneholder alle brukte bokstaver
var riktigeBokstaver = []; // oppretter en array som inneholder riktige bokstaver
var antallSjanser = 6; // variabel som inneholder antall sjanser spilleren skal få (OBS! må samsvare med tegningen)
/* var losningsord = "LONDON"; */ // variabel som inneholder løsningsordet
/* riktigeBokstaver = ["_" , "_" , "_" , "_" , "_" , "_" ]; */ // antall _ samsvarer med løsningsordet
/* UTVIDELSE! */
var losningsordA = ["REYKJAVIK","TRONDHEIM", "BERLIN", "OSLO"]; // array med løsningsord
var losningsord = losningsordA[Math.floor(Math.random()*losningsordA.length)]; // velger et løsningsord og setter inn _ for hver bokstav i løsningsordet i riktigeBokstaver
for(var i = 0; i < losningsord.length; i++){
	riktigeBokstaver.push("_");
}
/* utvidelse slutt */
riktigeBokstaverEl.innerHTML = "Riktige bokstaver: " + riktigeBokstaver; // viser antall bokstaver i løsningsordet

function mottaBokstav() { // funksjon som kjører når knappen trykkes (eller enter etter utvidelse)
	/* UTVIDELSE! */
	bakgrunnsmusikkEl.play(); // spiller av bakgrunnsmusikken når spillet er i gang
	/* utvidelse slutt */
  var gjettetBokstav = tekstfeltEl.value;   // henter bokstaven i tekstfeltet
  gjettetBokstav = gjettetBokstav.toUpperCase();   // gjør bokstaven stor (upper case) for å sammenlikne med løsningsord i caps lock
 /* UTVIDELSE! */
 	if(gjettetBokstav.length!=1){ // Sjekker at bare én bokstav er skrevet inn
 		tilbakemeldingEl.innerHTML="Du kan bare skrive inn en bokstav av gangen";
 		return;
 	}
	/* utvidelse slutt */
	/* UTVIDELSE! */
  tekstfeltEl.value=""; // tømmer tekstfeltet før brukeren gjetter neste bokstav
	/* utvidelse slutt */

  if (brukteBokstaver.indexOf(gjettetBokstav) === -1) { // sjekker om bokstaven allerede er gjettet (indexOf returnerer -1 hvis bokstaven ikke er i arrayen)
    brukteBokstaver.push(gjettetBokstav); // dytter bokstaven inn i brukte bokstaver-arrayen
    if(losningsord.indexOf(gjettetBokstav) === -1) { // sjekker om bokstaven er i kodeordet
      antallSjanser -= 1; // hvis ikke i kodeordet: mister "liv" som fører til at man tegner kroppsdel
    }
		else {  // hvis i kodeordet: Løper gjennom kodeordet for flere mulige tilfeller av samme bokstav
      for (var i = 0; i < losningsord.length; i++) {
        if(losningsord[i] === gjettetBokstav) { // Hvis bokstav i i løsningsordet er den gjettede bokstaven
          riktigeBokstaver[i] = gjettetBokstav; // Sett inn gjettet bokstav på posisjon i (i arrayen riktigeBokstaver)
        }
      }
    }
  }
	else { // hvis bokstaven allerede er gjettet, gjør vi ingenting. Dette kommer i et eget p-element, ikke som alert.
    tilbakemeldingEl.innerHTML="Bokstaven er allerede gjettet!";
  }
  brukteBokstaver.sort();   // sorterer de brukte bokstavene alfabetisk
  brukteBokstaverEl.innerHTML = "Brukte bokstaver: " + brukteBokstaver;  // skriver ut informasjon om brukte bokstaver, riktige bokstaver og antall sjanser igjen i p-elementene som allerede eksisterer
  riktigeBokstaverEl.innerHTML = "Riktige bokstaver: " + riktigeBokstaver;
  sjanserIgjenEl.innerHTML = "Antall sjanser igjen: " //+ antallSjanser;
	/* UTVIDELSE! */
	// bytter ut antall sjanser igjen med hjerter
	for(i = 0; i < antallSjanser; i++){
		sjanserIgjenEl.innerHTML += "<img src='hjerte.png' width='10px'>";
	}
	/* utvidelse slutt */

  // tegner riktig kroppsdel dersom gjettet feil bokstav
  if (antallSjanser === 5) {
    tegnHode();
  } else if (antallSjanser === 4) {
    tegnKropp();
  } else if (antallSjanser === 3) {
    tegnVenstreArm();
  } else if (antallSjanser === 2) {
    tegnHoyreArm();
  } else if (antallSjanser === 1) {
    tegnVenstreBein();
  } else if (antallSjanser === 0) {
    tegnHoyreBein();
    tilbakemeldingEl.innerHTML="Du tapte!"; // gir beskjed om at man har tapt når det ikke er flere sjanser igjen
		/* UTVIDELSE! */
		lydeffektEl.src="feil.mp3" // spiller av lyd hvis man taper
		lydeffektEl.play();
		/* utvidelse slutt */
  }

	/* UTVIDELSE! */
	// gir beskjed til spilleren når man har vunnet
	// sjekker om hele løsningsordet er gjettet
	var vunnet = 1;
	for (var i = 0; i < riktigeBokstaver.length; i++){
		if(riktigeBokstaver[i] != losningsord[i]){
			vunnet = 0;
		}
	}
	if(vunnet == 1){
		tilbakemeldingEl.innerHTML="Du vant!";
		lydeffektEl.src="riktig.mp3" // spiller av lyd hvis man vinner
		lydeffektEl.play();
		/* utvidelse slutt */
	}
	/* utvidelse slutt*/
}

// UTVIDELSE! SPILLE LYD AUTOPLAY I CHROME!
//TODO!
