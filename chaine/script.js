function inverserTexte(chaine) {
  let resultat = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }
  return resultat;
}

function inverserChaine() {
  let chaine = document.getElementById("chaine").value;
    if (chaine.trim() === "") {
        document.getElementById("inversion").innerText = "Veuillez entrer une chaîne de caractères.";
        }
    else {
        let resultat = inverserTexte(chaine);
        document.getElementById("inversion").innerText = `Chaîne inversée : ${resultat}`;
    }
}
    