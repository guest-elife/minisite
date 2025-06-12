// Fonction pour générer une couleur aléatoire
const btn = document.getElementById("changeColorBtn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
  console.log("La couleur de fond a été changée !");
});

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
