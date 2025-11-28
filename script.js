// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNum = document.getElementById('current-question-num');
const progressBar = document.getElementById('progress-bar');
const finalLevel = document.getElementById('final-level');
const finalScore = document.getElementById('final-score');
const levelDescription = document.getElementById('level-description');

// State
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let quizQuestions = [];

// Level Descriptions
const levelDescriptions = {
    'A1': "Beginner. You can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.",
    'A2': "Elementary. You can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g. very basic personal and family information, shopping, local geography, employment).",
    'B1': "Intermediate. You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure, etc.",
    'B2': "Upper Intermediate. You can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in your field of specialization.",
    'C1': "Advanced. You can understand a wide range of demanding, longer texts, and recognize implicit meaning. You can express yourself fluently and spontaneously.",
    'C2': "Proficiency. You can understand with ease virtually everything heard or read. You can summarize information from different spoken and written sources."
};

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Functions
function startQuiz() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    
    // Shuffle questions
    quizQuestions = [...questions];
    shuffleArray(quizQuestions);
    
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Update UI
    questionText.textContent = currentQuestion.question;
    currentQuestionNum.textContent = currentQuestionIndex + 1;

    // Update Progress Bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Animation
    const container = document.querySelector('.question-container');
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    
    // Remove fade-in class after animation to allow clean fade-out later
    setTimeout(() => {
        container.classList.remove('fade-in');
    }, 400);

    // Clear and render options
    optionsContainer.innerHTML = '';
    selectedOptionIndex = null;
    nextBtn.disabled = true;

    currentQuestion.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.textContent = option;
        optionCard.addEventListener('click', () => selectOption(index, optionCard));
        optionsContainer.appendChild(optionCard);
    });
}

function selectOption(index, card) {
    // Remove selected class from all options
    const allOptions = optionsContainer.querySelectorAll('.option-card');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    // Add selected class to clicked option
    card.classList.add('selected');
    selectedOptionIndex = index;
    nextBtn.disabled = false;
}

function handleNextQuestion() {
    // Check answer
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        // Transition effect
        const container = document.querySelector('.question-container');
        container.classList.add('fade-out');
        
        setTimeout(() => {
            loadQuestion();
        }, 400);
    } else {
        showResults();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Calculate Level
    let level = 'A1';
    if (score >= 50) level = 'C2';
    else if (score >= 40) level = 'C1';
    else if (score >= 30) level = 'B2';
    else if (score >= 20) level = 'B1';
    else if (score >= 10) level = 'A2';

    // Update UI
    finalLevel.textContent = level;
    finalScore.textContent = score;
    levelDescription.textContent = levelDescriptions[level];
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
}
