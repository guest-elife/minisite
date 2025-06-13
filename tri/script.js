function trierImpairs() {
      // Récupère la chaîne entrée par l'utilisateur
      const input = document.getElementById("nombres").value;

      // Convertit la chaîne en tableau de nombres
      const tableau = input
        .split(",")
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

      // Filtrer les impairs, trier, et afficher
      const impairs = tableau
        .filter(n => n % 2 !== 0)
        .sort((a, b) => a - b);

      // Affichage
      document.getElementById("impairs").textContent =
        "Nombres impairs triés : " + (impairs.length ? impairs.join(", ") : "Aucun nombre impair trouvé.");
    }