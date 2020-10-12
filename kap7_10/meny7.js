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
kap7El.className="dropdown7 col-15"
var dropdown7El = document.createElement("div");
dropdown7El.className="dropbtn7";
dropdown7El.innerHTML="kapittel 7 - 10";
var dropdown7HoverEl = document.createElement("div");
dropdown7HoverEl.className="dropdown-content7";
/* legg til alle med løkke*/
var array7 = ["kap_7_1", "kap_7_2", "kap_7_3", "kap_7_4", "kap_7_eksempel", "kap_7_eksempel_script", "kap_8_1", "kap_8_2",  "montyHall", "kap_8_2_Ekstra", "montyHallEkstra", "kap_8_3", "kap_8_4","steinSaksPapir", "SSSspill", "kap_10_1", "kap_10_2", "kap_10_3", "skjema","notat", "oppgaver", "losningsforslag"];
for(var i = 0; i < array7.length; i++){
  var lenke7El = document.createElement("a");
  lenke7El.href=array7[i]+".html";
  lenke7El.innerHTML=array7[i];
  dropdown7HoverEl.appendChild(lenke7El);
}
dropdown7El.appendChild(dropdown7HoverEl);
kap7El.appendChild(dropdown7El);
menyEl.appendChild(kap7El);

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
nyttigEl.innerHTML = "repetisjon og annet nyttig";
var lenkeNEl = document.createElement("a");
lenkeNEl.href="../nyttig/index.html";
lenkeNEl.appendChild(nyttigEl);
menyEl.appendChild(lenkeNEl);

bodyEl.appendChild(menyEl);
