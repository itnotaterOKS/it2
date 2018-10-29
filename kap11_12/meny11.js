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
kap11El.className="dropdown11 col-15"
var dropdown11El = document.createElement("div");
dropdown11El.className="dropbtn11";
dropdown11El.innerHTML="kapittel 11 - 12";
var dropdown11HoverEl = document.createElement("div");
dropdown11HoverEl.className="dropdown-content11";
/* legg til alle med løkke*/
var array11 = ["kap_11_1", "kap_11_2", "kap_11_3", "bubblesort", "kap_12_1", "kap_12_3", "kap_12_4", "lf_oppg12_11_13", "oppgaver", "losningsforslag"];
for(var i = 0; i < array11.length; i++){
  var lenke11El = document.createElement("a");
  lenke11El.href=array11[i]+".html";
  lenke11El.innerHTML=array11[i];
  dropdown11HoverEl.appendChild(lenke11El);
}
dropdown11El.appendChild(dropdown11HoverEl);
kap11El.appendChild(dropdown11El);
menyEl.appendChild(kap11El);

// kap 14 - 19
var kap14El = document.createElement("div");
kap14El.className ="dropbtn14 col-15";
kap14El.innerHTML = "kapittel 14 - 19";
var lenke14El = document.createElement("a");
lenke14El.href="../kap14_19/index.html";
lenke14El.appendChild(kap14El);
menyEl.appendChild(lenke14El);

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
nyttigEl.innerHTML = "nyttig tillegsstoff";
var lenkeNEl = document.createElement("a");
lenkeNEl.href="../nyttig/index.html";
lenkeNEl.appendChild(nyttigEl);
menyEl.appendChild(lenkeNEl);

bodyEl.appendChild(menyEl);
