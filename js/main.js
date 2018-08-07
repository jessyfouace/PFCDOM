// Tables for choise of 3
var choice = ["pierre", "papier", "ciseau"];
// Number of start life of player
var playerpoint = 0;
// Number of start life of adversary
var adversarypoint = 0;

// while loop from the moment the life of the bot or the life of the player is not 3
while(playerpoint <= 2 && adversarypoint <= 2) {

// Random choise of bot
  var bot = [Math.floor(Math.random() * choice.length)];

// Choise of player
  // var playerchoice = prompt("Choisissez entre Pierre Papier ou Ciseau");
  playerchoice = playerchoice.toLowerCase();

// Categories of "Pierre"
  // Rock vs Rock
  if (playerchoice == choice[0] && bot == 0) {
     console.log("Egalité le bot a choisis Pierre");
   }
  // Rock vs Paper
  if (playerchoice == choice[0]  && bot == 1) {
    console.log("Le Bot a choisis Papier, vous avez perdu cette manche");
    adversarypoint = adversarypoint + 1;
    console.log("L'adversaire a " + adversarypoint + " point(s)");
  }
  // Rock vs Cisor
  if (playerchoice == choice[0] && bot == 2) {
    console.log("Vous avez gagner un point !");
    playerpoint = playerpoint + 1;
    console.log("Vous avez " + playerpoint + " point(s)");
  }

// Categories of "Papier"
  // Paper vs Rock
  if (playerchoice == choice[1] && bot == 0) {
     console.log("Vous avez gagner un point !");
     playerpoint = playerpoint + 1;
     console.log("Vous avez " + playerpoint + " point(s)");
   }
  // Paper vs Paper
  if (playerchoice == choice[1] && bot == 1) {
    console.log("Egalité le bot a choisis Papier");
  }
  // Paper vs Cisor
  if (playerchoice == choice[1] && bot == 2) {
    console.log("Le Bot a choisis Ciseau, vous avez perdu cette manche");
    adversarypoint = adversarypoint + 1;
    console.log("L'adversaire a " + adversarypoint + " point(s)");
  }


// Categories of "Ciseau"
  // Cisor vs rock
  if (playerchoice == choice[2] && bot == 0) {
     console.log("Le Bot a choisis Pierre, vous avez perdu cette manche");
     adversarypoint = adversarypoint + 1;
     console.log("L'adversaire a " + adversarypoint + " point(s)");
   }
  // Cisor vs paper
  if (playerchoice == choice[2] && bot == 1) {
    console.log("Vous avez gagner un point !");
    playerpoint = playerpoint + 1;
    console.log("Vous avez " + playerpoint + " point(s)");
  }
  // Cisor vs Cisor
  if (playerchoice == choice[2] && bot == 2) {
    console.log("Egalité le bot a choisis Ciseau");
  }

// If the player does not put good value in the prompt
  else if (playerchoice !== choice[0] && playerchoice !== choice[1] && playerchoice !== choice[2]) {
    console.log("Entrez un bon choix")
  }

}

// Message if the player wins
if (playerpoint >= 3) {
  console.log("Vous avez gagner cette partie");
}

// Message if the bot wins
if (adversarypoint >= 3) {
  console.log("Vous avez Perdu cette partie");
}
