// quiz 

const questions = [
            {
                question: "Quelle est la date de fondation de la ville de Paris  ?",
                options: ["1800", "1900", "1850"],
                answer: "1800"
            },
            {
                question: "Quel est le monument le plus célèbre de la ville?",
                options: ["La tour Effel", "le Colisée", "La status de la liberté"],
                answer: "La tour Effel"
            },
            {
                question: "Quelle est la spécialité culinaire de la ville?",
                options: ["la baguette", "la pizza", "le sushi"],
                answer: "la baguette"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function showQuestion() {
            const quiz = document.getElementById("quiz");
            const q = questions[currentQuestion];

         
            quiz.innerHTML = `
                <div>
                    <h2>${q.question}</h2>
                    <div>
                        ${q.options.map((option, index) => `
                            <button onclick="checkAnswer('${option}')">${option}</button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function checkAnswer(selectedAnswer) {
            const q = questions[currentQuestion];
            if (selectedAnswer === q.answer) {
                score++;
            }
            
            currentQuestion++;
            
         
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            const quiz = document.getElementById("quiz");
            quiz.innerHTML = `
                <h2>Quiz Finished</h2>
                <p>Your score: ${score} out of ${questions.length}</p>
            `;
        }

   
        showQuestion();


function updateClock() {
    
    const now = new Date();
    
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    

    const dateElement = document.getElementById('date');
    if (dateElement) {
        dateElement.textContent = timeString;
    }
}


setInterval(updateClock, 1000);


updateClock();

