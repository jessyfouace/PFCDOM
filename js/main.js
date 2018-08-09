// Tables for choise of 3
var choice = ["carapuce", "salameche", "bulbizar"];
// Number of start life of player
var playerpoint = 0;
// Number of start life of adversary
var adversarypoint = 0;


// function for perso1 2 3
document.getElementById("perso1").onclick = function() {perso1()};
document.getElementById("perso2").onclick = function() {perso2()};
document.getElementById("perso3").onclick = function() {perso3()};

  function perso1(){
    document.getElementById("choiseperso").style.display="none";
    document.getElementById("pcperso2").style.display="none";
    document.getElementById("mobileperso2").style.display="none";
    document.getElementById("pcperso3").style.display="none";
    document.getElementById("mobileperso3").style.display="none";
    document.getElementById("choisegobou").style.display="none";
    document.getElementById("choisepoussi").style.display="none";
    document.getElementById("choisearcko").style.display="none";
    document.getElementById("choisetiplouf").style.display="none";
    document.getElementById("choisetorti").style.display="none";
    document.getElementById("choiseouisti").style.display="none";
  }

  function perso2(){
    document.getElementById("choiseperso").style.display="none";
    document.getElementById("pcperso1").style.display="none";
    document.getElementById("mobileperso1").style.display="none";
    document.getElementById("pcperso3").style.display="none";
    document.getElementById("mobileperso3").style.display="none";
    document.getElementById("choisebulbi").style.display="none";
    document.getElementById("choisesala").style.display="none";
    document.getElementById("choisecara").style.display="none";
    document.getElementById("choisetiplouf").style.display="none";
    document.getElementById("choisetorti").style.display="none";
    document.getElementById("choiseouisti").style.display="none";
  }

  function perso3(){
    document.getElementById("choiseperso").style.display="none";
    document.getElementById("pcperso1").style.display="none";
    document.getElementById("mobileperso1").style.display="none";
    document.getElementById("pcperso2").style.display="none";
    document.getElementById("mobileperso2").style.display="none";
    document.getElementById("choisebulbi").style.display="none";
    document.getElementById("choisesala").style.display="none";
    document.getElementById("choisecara").style.display="none";
    document.getElementById("choisegobou").style.display="none";
    document.getElementById("choisepoussi").style.display="none";
    document.getElementById("choisearcko").style.display="none";
  }


  // Choise pokemon on click
  document.getElementById("choisebulbi").onclick = function() {bulbi()};
  document.getElementById("choisesala").onclick = function() {sala()};
  document.getElementById("choisecara").onclick = function() {cara()};
// while loop from the moment the life of the bot or the life of the player is not 3


// PERSO 1
// PERSO 1
// PERSO 1
// PERSO 1
// PERSO 1
  function cara(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("carapucechoise").style.display="inline-block";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 1){
      document.getElementById("carapucechoise").style.display="inline-block";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 2){
      document.getElementById("carapucechoise").style.display="inline-block";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      adversarypoint = adversarypoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="inline-block";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }

  function sala(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="inline-block";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 1){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="inline-block";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 2){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="inline-block";
      document.getElementById("bulbizarchoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      playerpoint = playerpoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="inline-block";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }

  function bulbi(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="inline-block";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 1){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 2){
      document.getElementById("carapucechoise").style.display="none";
      document.getElementById("salamechechoise").style.display="none";
      document.getElementById("bulbizarchoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="inline-block";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }


  // PERSO 2
  // PERSO 2
  // PERSO 2
  // PERSO 2
  // PERSO 2

  document.getElementById("choisegobou").onclick = function() {gobou()};
  document.getElementById("choisepoussi").onclick = function() {poussi()};
  document.getElementById("choisearcko").onclick = function() {arcko()};

  function gobou(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("gobouchoise").style.display="inline-block";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 1){
      document.getElementById("gobouchoise").style.display="inline-block";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 2){
      document.getElementById("gobouchoise").style.display="inline-block";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      adversarypoint = adversarypoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="inline-block";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }

  function poussi(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="inline-block";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 1){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="inline-block";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 2){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="inline-block";
      document.getElementById("arckochoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      playerpoint = playerpoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="inline-block";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }

  function arcko(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="inline-block";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 1){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 2){
      document.getElementById("gobouchoise").style.display="none";
      document.getElementById("poussichoise").style.display="none";
      document.getElementById("arckochoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="inline-block";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="none";
    }
  }


  // PERSO 3
  // PERSO 3
  // PERSO 3
  // PERSO 3
  // PERSO 3

  document.getElementById("choisetiplouf").onclick = function() {tiplouf()};
  document.getElementById("choiseouisti").onclick = function() {ouisti()};
  document.getElementById("choisetorti").onclick = function() {torti()};

  function tiplouf(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("tiploufchoise").style.display="inline-block";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 1){
      document.getElementById("tiploufchoise").style.display="inline-block";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 2){
      document.getElementById("tiploufchoise").style.display="inline-block";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      adversarypoint = adversarypoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="inline-block";
      document.getElementById("persol").style.display="none";
    }
  }

  function ouisti(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="inline-block";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 1){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="inline-block";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
    }
    else if (bot == 2){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="inline-block";
      document.getElementById("tortichoise").style.display="none";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
      playerpoint = playerpoint +1;
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="inline-block";
      document.getElementById("persol").style.display="none";
    }
  }

  function torti(){
    var bot = [Math.floor(Math.random() * choice.length)];
    if (bot == 0){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="inline-block";
      document.getElementById("carabot").style.display="inline-block";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="none";
      playerpoint = playerpoint +1;
    }
    else if (bot == 1){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="inline-block";
      document.getElementById("bulbibot").style.display="none";
      adversarypoint = adversarypoint +1;
    }
    else if (bot == 2){
      document.getElementById("tiploufchoise").style.display="none";
      document.getElementById("ouistichoise").style.display="none";
      document.getElementById("tortichoise").style.display="inline-block";
      document.getElementById("carabot").style.display="none";
      document.getElementById("salabot").style.display="none";
      document.getElementById("bulbibot").style.display="inline-block";
    }
    if (adversarypoint == 1) {
      document.getElementById("progressbarplayer").style.width="66%";
      document.getElementById("progressbarplayer").innerHTML="2 vie";
    } else if (adversarypoint == 2) {
      document.getElementById("progressbarplayer").style.width="33%";
      document.getElementById("progressbarplayer").innerHTML="1 vie";
    } else if (adversarypoint == 3) {
      document.getElementById("progressbarplayer").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("textloose").style.display="inline-block";
      document.getElementById("textwin").style.display="none";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="none";
      document.getElementById("persol").style.display="inline-block";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("end").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("textloose").style.display="none";
      document.getElementById("textwin").style.display="inline-block";
      document.getElementById("perso1w").style.display="none";
      document.getElementById("perso2w").style.display="none";
      document.getElementById("perso3w").style.display="inline-block";
      document.getElementById("persol").style.display="none";
    }
  }
