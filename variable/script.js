 function afficher() {
      let nom = document.getElementById("nom").value;
      let age = document.getElementById("age").value;

      // Vérification simple
      if (nom === "" || age === "") {
        document.getElementById("resultat").innerText = "Veuillez remplir les deux champs.";
      } else {
        document.getElementById("resultat").innerText = `Je m'appelle ${nom} et j'ai ${age} ans.`;
      }
    }
