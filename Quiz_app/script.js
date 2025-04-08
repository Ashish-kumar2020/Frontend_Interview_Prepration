import { quizData } from "./data.js";

console.log("Quiz App");

const questionEl = document.querySelector(".question");
const optionsContainer = document.querySelector(".options-container");
const submitBtn = document.querySelector(".submit-btn");
const resultEl = document.querySelector(".result");

let currentQuestionIndex = 0;
let selectedAnswer = null;

function createQuestion() {
  let currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selecteAnswer(index));
    optionsContainer.appendChild(button);
  });
}

function selecteAnswer(index) {
  selectedAnswer = index;
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => (btn.style.background = "white"));
  event.target.style.background = "#ddd";
}

submitBtn.addEventListener("click", () => {
  if (selecteAnswer === null) {
    alert("Please select an answer!");
    return;
  }
  const correctAnswerIndex = quizData[currentQuestionIndex].correct;
  if (selectedAnswer === correctAnswerIndex) {
    resultEl.innerText = "✅ Correct!";
    resultEl.style.color = "green";
  } else {
    resultEl.innerText = "❌ Wrong!";
    resultEl.style.color = "red";
  }

  setTimeout(() => {
    nextQuestion();
  }, 2000);
});

function nextQuestion() {
  selectedAnswer = null;
  resultEl.innerText = "";
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    createQuestion();
  } else {
    questionEl.innerText = "Quiz Completed";
    optionsContainer.innerHTML = "";
    submitBtn.style.display = "none";
  }
}

createQuestion();
