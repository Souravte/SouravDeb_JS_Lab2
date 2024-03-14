const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('result');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
        correctAnswer: "Mitochondria"
    }
];

function buildQuiz() {
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
        question.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.innerHTML = `<input type="radio" name="question${index}" value="${option}">
                                  <label>${option}</label>`;
            questionDiv.appendChild(optionDiv);
        });
        quizContainer.appendChild(questionDiv);
    });
}

function showResults() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.correctAnswer) {
                score++;
            }
        }
    });
    const percentage = (score / quizQuestions.length) * 100;
    resultContainer.innerHTML = `Your score: ${score}/${quizQuestions.length} (${percentage}%)`;
}

submitBtn.addEventListener('click', showResults);

buildQuiz();
