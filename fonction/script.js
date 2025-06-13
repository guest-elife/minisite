function calculerSomme() {
  let a = parseFloat(document.getElementById("nombre1").value);
  let b = parseFloat(document.getElementById("nombre2").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("somme").innerText = "Veuillez entrer deux nombres valides.";
  } else {
    let resultat = a + b;
    document.getElementById("somme").innerText = `La somme est : ${resultat}`;
  }
}
