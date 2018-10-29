/* Denne oppgaven kan løses på mange måte! Vi kommer til å lage denne quizen på mer effektive måter når vi lærer arrays og objects, men foreløpig godkjenner vi tungvint kode og mange funksjoner */

var startEl=document.querySelector("#start");
var quizenEl = document.querySelector("#quizen");
var poeng = 0;

var spm1 = "Hvilke idretter driver Asta med? <br> <input type= 'checkbox' name = 'spm1' id = 'oppg1a'> Fotball <br> <input type= 'checkbox' name = 'spm1' id = 'oppg1b'> Turn <br> <input type= 'checkbox' name = 'spm1' id = 'oppg1c'> Styrkeløft <br> <input type= 'checkbox' name = 'spm1' id = 'oppg1d'> Vektløfting <br> <button id='svar1'> Avgi svar </button>";
var spm2 = "Hvilken klubb konkurrerer Asta for nå? <br> <input type = 'text' id = 'oppg2' placeholder = 'tips: det er en atletklubb'> <br> <button id='svar2'> Avgi svar </button>";
var spm3 = "Hvilken øvelse liker Asta best? <br> <input type = 'radio'  name = 'spm3' id= 'oppg3a'> Knebøy <br> <input type = 'radio'  name = 'spm3' id= 'oppg3b'> Rykk <br> <input type = 'radio'  name = 'spm3' id= 'oppg3c'> Støt <br> <button id='svar3'> Avgi svar </button>";
var spm4 = "Hva er rekorden til Asta i rykk? <br> <input type = 'number' id = 'oppg4' min=65 max = 80> <br> <button id='svar4'> Avgi svar </button>";
var spm5 = "Hvor bodde Asta da hun begynte med vektløfting? <br> <input type = 'text' id = 'oppg5'> <br> <button id='svar5'> Avgi svar </button>";

startEl.addEventListener("click", startQuiz);
function startQuiz(){
	// legger inn spørsmål 1 og kjører funksjonen oppg1 når svar sendes
	quizenEl.innerHTML=spm1;
	var svar1El = document.querySelector("#svar1");
	svar1El.addEventListener("click", svar1);
}

function svar1(){
	// sjekker svar i oppg 1 og gir ut poeng
	var alt1a = document.querySelector("#oppg1a");
	var alt1b = document.querySelector("#oppg1b");
	var alt1c = document.querySelector("#oppg1c");
	var alt1d = document.querySelector("#oppg1d");

	if (alt1a.checked==false && alt1b.checked && alt1c.checked == false && alt1d.checked){
		poeng++;
		console.log(poeng);
		quizenEl.innerHTML="<p> Du svarte riktig! Du har nå " + poeng + " poeng. </p> <p id='send2'> Klikk her for å gå videre </p>";
	}
	else{
		quizenEl.innerHTML="<p> Du svarte feil. Du har nå " + poeng + " poeng. </p> <p id='send2'> Klikk her for å gå videre </p>";
	}

	// legger inn sending til spørsmål 2 og kjører funksjonen oppg2 når brukeren er klar
	var send2El = document.querySelector("#send2");
	send2El.addEventListener("click", oppg2);
}

function oppg2(){
	quizenEl.innerHTML=spm2;
	var svar2El = document.querySelector("#svar2");
	svar2El.addEventListener("click", svar2);
}

function svar2(){
	var tekst2 = document.querySelector("#oppg2").value.toLowerCase();
	if (tekst2 == "oslo atletklubb"){
		poeng++;
		console.log(poeng);
		quizenEl.innerHTML="<p> Du svarte riktig! Du har nå " + poeng + " poeng. </p> <p id='send3'> Klikk her for å gå videre </p>";
	}
	else{
		quizenEl.innerHTML="<p> Du svarte feil. Du har nå " + poeng + " poeng. </p> <p id='send3'> Klikk her for å gå videre </p>";
	}
	var send3El = document.querySelector("#send3");
	send3El.addEventListener("click", oppg3);
}

function oppg3(){
	quizenEl.innerHTML=spm3;
	var svar3El = document.querySelector("#svar3");
	svar3El.addEventListener("click", svar3);
}

function svar3(){
	var alt3a = document.querySelector("#oppg3a");
	var alt3b = document.querySelector("#oppg3b");
	var alt3c = document.querySelector("#oppg3c");

	if (alt3a.checked==false && alt3b.checked && alt3c.checked == false){
		poeng++;
		console.log(poeng);
		quizenEl.innerHTML="<p> Du svarte riktig! Du har nå " + poeng + " poeng. </p> <p id='send4'> Klikk her for å gå videre </p>";
	}
	else{
		quizenEl.innerHTML="<p> Du svarte feil. Du har nå " + poeng + " poeng. </p> <p id='send4'> Klikk her for å gå videre </p>";
	}
	var send4El = document.querySelector("#send4");
	send4El.addEventListener("click", oppg4);
}

function oppg4(){
	quizenEl.innerHTML=spm4;
	var svar4El = document.querySelector("#svar4");
	svar4El.addEventListener("click", svar4);
}

function svar4(){
	var tall4 = document.querySelector("#oppg4").value;
	if(tall4 == 73){
		poeng++;
		console.log(poeng);
		quizenEl.innerHTML="<p> Du svarte riktig! Du har nå " + poeng + " poeng. </p> <p id='send5'> Klikk her for å gå videre </p>";
	}
	else{
		quizenEl.innerHTML="<p> Du svarte feil. Du har nå " + poeng + " poeng. </p> <p id='send5'> Klikk her for å gå videre </p>";
	}
	var send5El = document.querySelector("#send5");
	send5El.addEventListener("click", oppg5);
}

function oppg5(){
	quizenEl.innerHTML=spm5;
	var svar5El = document.querySelector("#svar5");
	svar5El.addEventListener("click", svar5);
}

function svar5(){
	var tekst5 = document.querySelector("#oppg5").value.toLowerCase();
	if(tekst5 == 'reykjavik' || tekst5 == 'island'){
		poeng++;
		console.log(poeng);
		quizenEl.innerHTML="<p> Du svarte riktig! Du har nå " + poeng + " poeng. Quizen er nå ferdig.</p>";
	}
	else{
		quizenEl.innerHTML="<p> Du svarte feil. Du har nå " + poeng + " poeng. Quizen er nå ferdig.</p>";
	}
}
