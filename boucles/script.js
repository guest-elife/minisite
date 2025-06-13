 let resultat = "";
    for (let i = 0; i <= 20; i++) {
      if (i % 2 === 0) {
        resultat += i + " ";
      }
    }
    document.getElementById("boucle").innerText = resultat;