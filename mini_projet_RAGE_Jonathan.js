const nombreADeviner = Math.floor(Math.random() * 100) + 1;
let tentative = 0;
let trouve = false;

alert("Bienvenue dans le jeu de devinette !\nJe pense à un nombre entre 1 et 100.");

while (!trouve) {
  let proposition = prompt("Entrez votre proposition :");
  
  proposition = Number(proposition);
  tentative++;

 
  if (isNaN(proposition)) {
    alert("Veuillez entrer un nombre valide !");
    continue;
  }

  if (proposition < nombreADeviner) {
    alert("C'est plus grand !");
  } else if (proposition > nombreADeviner) {
    alert("C'est plus petit !");
  } else {
    alert("Félicitations ! Vous avez trouvé le nombre en" +tentative+ "essais");
    trouve = true;
  }
}
