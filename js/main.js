// Tables for choise of 3
var choice = ["carapuce", "salameche", "bulbizar"];
// Number of start life of player
var playerpoint = 0;
// Number of start life of adversary
var adversarypoint = 0;

// Choise pokemon on click
document.getElementById("choisebulbi").onclick = function() {bulbi()};
document.getElementById("choisesala").onclick = function() {sala()};
document.getElementById("choisecara").onclick = function() {cara()};

// while loop from the moment the life of the bot or the life of the player is not 3


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
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("testv").innerHTML="Vous ne batterez jamais la team Aether !";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("testv").innerHTML="Vous venez de battre la team Aether ! Bravo."
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
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("testv").innerHTML="Vous ne batterez jamais la team Aether !";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("testv").innerHTML="Vous venez de battre la team Aether ! Bravo."
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
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarplayer").innerHTML="";
      document.getElementById("testv").innerHTML="Vous ne batterez jamais la team Aether !";
    }
    if (playerpoint == 1) {
      document.getElementById("progressbarbot").style.width="66%";
      document.getElementById("progressbarbot").innerHTML="2 vie";
    } else if (playerpoint == 2) {
      document.getElementById("progressbarbot").style.width="33%";
      document.getElementById("progressbarbot").innerHTML="1 vie";
    } else if (playerpoint == 3) {
      document.getElementById("progressbarbot").style.width="0%";
      document.getElementById("restartall").style.display="inline-block";
      document.getElementById("progressbarbot").innerHTML="";
      document.getElementById("testv").innerHTML="Vous venez de battre la team Aether ! Bravo."
    }
  }
