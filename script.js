import { questions } from "./questions.js";

// ============================================================
// DOM-Elemente
// ============================================================

const questionElement = document.getElementById("question");
const solutionButton = document.getElementById("solution-btn");
const explanationElement = document.getElementById("explanation");

const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

const questionCounterElement =
document.getElementById("question-counter");

const progressBarElement =
document.getElementById("progress");

// ============================================================
// Zustand
// ============================================================

let currentQuestionIndex = 0;

// ============================================================
// Lernkarte anzeigen
// ============================================================

function showQuestion() {


const currentQuestion = questions[currentQuestionIndex];

// Falls keine Begriffe vorhanden sind
if (!currentQuestion) {
    questionElement.textContent = "Keine Begriffe vorhanden.";
    solutionButton.style.display = "none";
    nextButton.style.display = "none";
    backButton.style.display = "none";
    return;
}


// --------------------------------------------------------
// Begriff anzeigen
// --------------------------------------------------------

questionElement.textContent = currentQuestion.question;


// --------------------------------------------------------
// Lösung zurücksetzen
// --------------------------------------------------------

explanationElement.textContent = "";
explanationElement.style.display = "none";

solutionButton.style.display = "inline-block";


// --------------------------------------------------------
// Navigation aktualisieren
// --------------------------------------------------------

updateNavigation();


// --------------------------------------------------------
// Zähler aktualisieren
// --------------------------------------------------------

updateQuestionCounter();


// --------------------------------------------------------
// Fortschrittsbalken aktualisieren
// --------------------------------------------------------

updateProgressBar();


}

// ============================================================
// Lösung anzeigen
// ============================================================

function showSolution() {


const currentQuestion = questions[currentQuestionIndex];

if (!currentQuestion) {
    return;
}


explanationElement.textContent = currentQuestion.explanation;
explanationElement.style.display = "block";


// Button nach dem Anzeigen der Lösung ausblenden
solutionButton.style.display = "none";


}

// ============================================================
// Navigation
// ============================================================

function updateNavigation() {


// Beim ersten Begriff gibt es nichts zum Zurückgehen
if (currentQuestionIndex === 0) {
    backButton.style.visibility = "hidden";
} else {
    backButton.style.visibility = "visible";
}


// Beim letzten Begriff heißt der Button "Fertig"
if (currentQuestionIndex === questions.length - 1) {
    nextButton.innerHTML =
        'Fertig <i class="fas fa-check"></i>';
} else {
    nextButton.innerHTML =
        'Nächster <i class="fas fa-arrow-right"></i>';
}


}

// ============================================================
// Nächster Begriff
// ============================================================

function showNextQuestion() {


if (currentQuestionIndex < questions.length - 1) {

    currentQuestionIndex++;

    showQuestion();

} else {

    // Am Ende wieder zum ersten Begriff springen
    currentQuestionIndex = 0;

    showQuestion();
}


}

// ============================================================
// Vorheriger Begriff
// ============================================================

function showPreviousQuestion() {


if (currentQuestionIndex > 0) {

    currentQuestionIndex--;

    showQuestion();
}


}

// ============================================================
// Begriffszähler
// ============================================================

function updateQuestionCounter() {


questionCounterElement.textContent =
    `Begriff ${currentQuestionIndex + 1} von ${questions.length}`;


}

// ============================================================
// Fortschrittsbalken
// ============================================================

function updateProgressBar() {


if (questions.length === 0) {
    progressBarElement.style.width = "0%";
    return;
}


const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;


progressBarElement.style.width =
    `${progressPercentage}%`;


}

// ============================================================
// Event Listener
// ============================================================

solutionButton.addEventListener("click", showSolution);

nextButton.addEventListener("click", showNextQuestion);

backButton.addEventListener("click", showPreviousQuestion);

// ============================================================
// Mobiles Menü
// ============================================================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {


menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});


menu.addEventListener("click", (event) => {

    if (event.target.closest("a")) {
        menu.classList.remove("show");
    }

});


}

// ============================================================
// Tastatursteuerung wer Bock hat
// ============================================================

document.addEventListener("keydown", (event) => {


// Pfeil rechts = nächster Begriff
if (event.key === "ArrowRight") {
    showNextQuestion();
}


// Pfeil links = vorheriger Begriff
if (event.key === "ArrowLeft") {
    showPreviousQuestion();
}


// Leertaste = Lösung anzeigen
if (event.code === "Space") {

    // Verhindert Scrollen der Seite
    event.preventDefault();

    showSolution();
}


});

// ============================================================
// Start
// ============================================================

showQuestion();
