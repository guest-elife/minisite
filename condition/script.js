function verifierAge(age) {
  if (age >= 18) {
    return "majeur";
  } else {
    return "mineur";
  }
}

function verifierNumber() {
  let ageTest = document.getElementById("age").value;

  if (ageTest === "") {
    document.getElementById("condition").innerText = "Veuillez entrer un âge.";
    return;
  }

  document.getElementById("condition").innerText = `Âge ${ageTest} : ${verifierAge(ageTest)}`;
}
