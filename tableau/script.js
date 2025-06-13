 let fruits = ["Pomme", "Banane", "Orange", "Mangue"];
    const liste = document.getElementById("fruits");

    // Affiche les fruits
    function afficherFruits() {
      liste.innerHTML = ""; // Vider l'affichage
      for (let fruit of fruits) {
        const li = document.createElement("li");
        li.textContent = fruit;
        liste.appendChild(li);
      }
    }

    // Ajouter un fruit depuis l'input
    function ajouterFruit() {
      const input = document.getElementById("nouveauFruit");
      const fruit = input.value.trim();

      if (fruit !== "") {
        fruits.push(fruit);
        afficherFruits();
        input.value = "";
      } else {
        alert("Veuillez entrer un nom de fruit !");
      }
    }

    // Vider toute la liste
    function viderListe() {
      fruits = [];
      afficherFruits();
    }

    // Affichage initial
    afficherFruits();