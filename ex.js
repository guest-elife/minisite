const citations = [
  { texte: "Le savoir est une arme.", auteur: "Nelson Mandela" },
  { texte: "La simplicité est la sophistication suprême.", auteur: "Leonardo da Vinci" },
  { texte: "Apprendre à coder, c'est apprendre à penser.", auteur: "Steve Jobs" },
  { texte: "Le succès, c’est tomber sept fois, se relever huit.", auteur: "Proverbe japonais" },
  { texte: "Rêve grand. Commence petit. Agis maintenant.", auteur: "Robin Sharma" }
];

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const button = document.getElementById("new-quote");

function afficherCitation() {
  const random = Math.floor(Math.random() * citations.length);
  // Animation de fondu
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = `"${citations[random].texte}"`;
    quoteAuthor.innerText = `— ${citations[random].auteur}`;
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;
  }, 300);
}

button.addEventListener("click", afficherCitation);

// Affiche une première citation aléatoire au chargement
window.onload = afficherCitation;
function afficherCitation() {
  const random = Math.floor(Math.random() * citations.length);
  const citation = citations[random];

  // Animation de fondu
  quoteText.style.opacity = 0;
  quoteAuthor.style.opacity = 0;

  setTimeout(() => {
    quoteText.innerText = `"${citation.texte}"`;
    quoteAuthor.innerText = `— ${citation.auteur}`;
    quoteText.style.opacity = 1;
    quoteAuthor.style.opacity = 1;

    // ✅ Log dans la console
    console.log(`Nouvelle citation : "${citation.texte}" par ${citation.auteur}`);
  }, 300);
}

  
  
  