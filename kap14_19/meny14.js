var bodyEl = document.querySelector("body");

var menyEl = document.createElement("div");
menyEl.className="col-12 row meny";

// kap 2 - 4
var kap2El = document.createElement("div");
kap2El.className ="dropbtn2 col-15";
kap2El.innerHTML = "kapittel 2 - 4";
var lenke2El = document.createElement("a");
lenke2El.href="../kap2_4/index.html";
lenke2El.appendChild(kap2El);
menyEl.appendChild(lenke2El);

// kap 7 - 10
var kap7El = document.createElement("div");
kap7El.className ="dropbtn7 col-15";
kap7El.innerHTML = "kapittel 7 - 10";
var lenke7El = document.createElement("a");
lenke7El.href="../kap7_10/index.html";
lenke7El.appendChild(kap7El);
menyEl.appendChild(lenke7El);

// kap 11-12
var kap11El = document.createElement("div");
kap11El.className ="dropbtn11 col-15";
kap11El.innerHTML = "kapittel 11 - 12";
var lenke11El = document.createElement("a");
lenke11El.href="../kap11_12/index.html";
lenke11El.appendChild(kap11El);
menyEl.appendChild(lenke11El);

// kap 14 - 19
var kap14El = document.createElement("div");
kap14El.className="dropdown14 col-15"
var dropdown14El = document.createElement("div");
dropdown14El.className="dropbtn14";
dropdown14El.innerHTML="kapittel 14 - 19";
var dropdown14HoverEl = document.createElement("div");
dropdown14HoverEl.className="dropdown-content14";
/* legg til alle med løkke*/
var array14 = ["kap_14_1_2", "kap_14_2_3_4",  "grid_canvas", "grid_canvas_eks", "hangman_intro", "hangman", "kap_16_1", "kap_16_1_oppg", "kap_17_1_2", "kap_17_3", "kap_17_3b", "kap_18_1_2", "losningTrillebar", "skjemaDiagram", "oppgaver", "losningsforslag"];
for(var i = 0; i < array14.length; i++){
  var lenke14El = document.createElement("a");
  lenke14El.href=array14[i]+".html";
  lenke14El.innerHTML=array14[i];
  dropdown14HoverEl.appendChild(lenke14El);
}
dropdown14El.appendChild(dropdown14HoverEl);
kap14El.appendChild(dropdown14El);
menyEl.appendChild(kap14El);

// kap 20 - 22
var kap20El = document.createElement("div");
kap20El.className ="dropbtn20 col-15";
kap20El.innerHTML = "kapittel 20 - 22";
var lenke20El = document.createElement("a");
lenke20El.href="../kap20_22/index.html";
lenke20El.appendChild(kap20El);
menyEl.appendChild(lenke20El);

// eksamen
var eksamenEl = document.createElement("div");
eksamenEl.className ="dropbtnE col-15";
eksamenEl.innerHTML = "eksamen";
var lenkeEEl = document.createElement("a");
lenkeEEl.href="../eksamen/index.html";
lenkeEEl.appendChild(eksamenEl);
menyEl.appendChild(lenkeEEl);

// nyttig
var nyttigEl = document.createElement("div");
nyttigEl.className ="dropbtnN col-15";
nyttigEl.innerHTML = "repetisjon og annet nyttig";
var lenkeNEl = document.createElement("a");
lenkeNEl.href="../nyttig/index.html";
lenkeNEl.appendChild(nyttigEl);
menyEl.appendChild(lenkeNEl);

bodyEl.appendChild(menyEl);
