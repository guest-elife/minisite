// quiz 

const questions = [
            {
                question: "Qu'elle est la capitale de la Tunisie ?",
                options: ["Tunis", "Kairouan", "Beja", "Sousse"],
                answer: "Tunis"
            },
            {
                question: "Quelle rivière traverse Beja ?",
                options: ["Oued Zroud", "Oued Madjerda", "Oued Merguellil"],
                answer: "Oued Madjerda"
            },
            {
                question: "A quelle année la Tunisie a pris son indépendance ?",
                options: ["1956", "1966", "1967"],
                answer: "1956"
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        function showQuestion() {
            const quiz = document.getElementById("quiz");
            const q = questions[currentQuestion];

            // Create the question text
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
            
            // If there are more questions, show the next question, else show the final score
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

        // Initial call to display the first question
        showQuestion();
