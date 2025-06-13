function calcul(op) {
      const a = parseFloat(document.getElementById("nombre1").value);
      const b = parseFloat(document.getElementById("nombre2").value);
      let res;

      if (isNaN(a) || isNaN(b)) {
        res = "Veuillez entrer deux nombres.";
      } else {
        switch (op) {
          case '+': res = a + b; break;
          case '-': res = a - b; break;
          case '*': res = a * b; break;
          case '/': res = b !== 0 ? a / b : "Erreur : division par zéro"; break;
        }
      }

      document.getElementById("resultat").innerText = "Résultat : " + res;
    }