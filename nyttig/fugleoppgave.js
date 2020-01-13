/* Det er mange ulike måter å løse denne oppgaven på. 
Jeg lager en variabel for hvert spørsmål som både inneholder bildet, alternativene og knappen.
Eventuelt, siden alle spørsmålene inneholder bilde, alternativ og knapp, holder det å endre bildekilde og innerHTML til hvert spørsmål. */

/* SKRIV PSEUDO! */

var spm1="<p> Hvilken fugl er dette? </p> <img src='fugleinfo/kortnebbgås.jpg'><br> <input type='radio' name='spm1' id='spm1a'> Kanadagås <br> <input type='radio' name='spm1' id='spm1b'> Kortnebbgås <br> <input type='radio' name='spm1' id='spm1c'> Grågås <br> <button id='send1'> Send svar </button>";
var spm2="<p> Hvilken fugl er dette? </p> <img src='fugleinfo/lunde.jpg'><br> <input type='radio' name='spm2' id='spm2a'> Alkekonge <br> <input type='radio' name='spm2' id='spm2b'> Lunde <br> <input type='radio' name='spm2' id='spm2c'> Teist <br> <button id='send2'> Send svar </button>";
var spm3="<p> Hvilken fugl er dette? </p> <img src='fugleinfo/svartbak.jpg'><br> <input type='radio' name='spm3' id='spm3a'> Svartbak <br> <input type='radio' name='spm3' id='spm3b'> Gråmåke <br> <input type='radio' name='spm3' id='spm3c'> Hettemåke <br> <button id='send3'> Send svar </button>";
var spm4="<p> Hvilken fugl er dette? </p> <img src='fugleinfo/gråmåke.jpg'><br> <input type='radio' name='spm4' id='spm4a'> Svartbak <br> <input type='radio' name='spm4' id='spm4b'> Gråmåke <br> <input type='radio' name='spm4' id='spm4c'> Hettemåke <br> <button id='send4'> Send svar </button>";
var navn = '';
var poeng = 0;

var startEl = document.querySelector("#start");
startEl.addEventListener("click", start);
var visningEl = document.querySelector("#visning");

function start(){
	var navnEl = document.querySelector("#navn");
	navn = navnEl.value;
	visningEl.innerHTML = spm1;
	var send1El = document.querySelector("#send1");
	send1El.addEventListener("click", sjekk1);
}

function sjekk1(){
	var spm1aEl=document.querySelector("#spm1a");
	var spm1bEl=document.querySelector("#spm1b");
	var spm1cEl=document.querySelector("#spm1c");
	if(spm1a.checked || spm1c.checked){
		poeng--;
	}
	else if(spm1b.checked){
		poeng++;
	}
	/* trenger ingen else-setning for blankt svar fordi det uansett ikke endrer poengsummen */

	visningEl.innerHTML = spm2;
	var send2El = document.querySelector("#send2");
	send2El.addEventListener("click", sjekk2);
}

function sjekk2(){
	var spm2aEl=document.querySelector("#spm2a");
	var spm2bEl=document.querySelector("#spm2b");
	var spm2cEl=document.querySelector("#spm2c");
	if(spm2a.checked || spm2c.checked){
		poeng--;
	}
	else if(spm2b.checked){
		poeng++;
	}

	visningEl.innerHTML = spm3;
	var send3El = document.querySelector("#send3");
	send3El.addEventListener("click", sjekk3);
}

function sjekk3(){
	var spm3aEl=document.querySelector("#spm3a");
	var spm3bEl=document.querySelector("#spm3b");
	var spm3cEl=document.querySelector("#spm3c");
	if(spm3b.checked || spm3c.checked){
		poeng--;
	}
	else if(spm3a.checked){
		poeng++;
	}

	visningEl.innerHTML = spm4;
	var send4El = document.querySelector("#send4");
	send4El.addEventListener("click", sjekk4);
}

function sjekk4(){
	var spm4aEl=document.querySelector("#spm4a");
	var spm4bEl=document.querySelector("#spm4b");
	var spm4cEl=document.querySelector("#spm4c");
	if(spm4a.checked || spm4c.checked){
		poeng--;
	}
	else if(spm4b.checked){
		poeng++;
	}

	visning.innerHTML = "Hei, "+navn+", du fikk "+poeng+" poeng.";
}


