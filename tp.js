const button = document.getElementById("change-text");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.innerText = "🎉 Le message a été changé avec JavaScript !";
  console.log("Le bouton a été cliqué !");
});
