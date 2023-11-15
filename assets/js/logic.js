// DOM VARIABLES
const startScreenWrap = document.querySelector("#start-screen");
const questionsWrap = document.querySelector("#questions");
const endScreenWrap = document.querySelector("#end-screen");
const timerWrap = document.querySelector(".timer");
const timerNumber = document.querySelector("#time");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const highScores = document.querySelector(".scores");
const initials = document.querySelector("#initials");
const startBtn = document.querySelector("#start");
const submitBtn = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const finalScoreSpan = document.querySelector("#final-score");
const questionNumber = document.querySelector("#question-number");
const correctAnswersDisplay = document.querySelector("#correct-answers-total");
const progressBarFull = document.querySelector(".progressBarFull");

// || GLOBAL
let questionCount = 0;
const maxNumberOfQuestions = 5;
let secondsCount = maxNumberOfQuestions * 10;
let time;
let availableQuestions = [];
let displayQuestionNumber;
let correctAnswersTotal = 0;

// || FUNCTIONS
startTimer = () => {
  // Decrement the seconds count and update the timer display
  secondsCount--;
  timerNumber.innerText = secondsCount;

  // If the time is up, end the game
  if (secondsCount <= 0) {
    endGame();
  }
};

startBtn.onclick = function startGame() {
  // Reset the question counter and hide/show the appropriate elements on the page
  questionCount = 0;
  startScreenWrap.classList.add("hide");
  highScores.classList.add("hide");
  questionsWrap.classList.remove("hide");
  timerWrap.classList.remove("hide");

  // Display the current question number and total number of questions
  displayQuestionNumber = `Question: ${questionCount + 1}/${maxNumberOfQuestions}`;
  questionNumber.innerHTML = displayQuestionNumber;

  // Set the style of the question number element
  questionNumber.setAttribute("style", "color: var(--highlight-turqoise);");

  // Create a copy of the questions array to prevent modifying the original
  availableQuestions = [...questions];

  // Start the timer and display the initial time on the page
  time = setInterval(startTimer, 1000);
  timerNumber.innerText = secondsCount;

  // Get and display the first question and its choices
  getQuestionAndChoices();
};

getQuestionAndChoices = () => {
  // Increment the question counter and update the progress bar
  questionCount++;
  progressBarFull.style.width = `${(questionCount / maxNumberOfQuestions) * 100}%`;

  // Get a random question from the available questions
  this.questionIndex = Math.floor(Math.random() * availableQuestions.length);
  const currentQuestion = availableQuestions[questionIndex];

  // Display the current question
  questionTitle.innerText = currentQuestion.title;

  // Clear the choices from the display
  choices.innerText = "";

  // Loop through the choices for the current question
  currentQuestion.choices.forEach((choice) => {
    // Create a button for each choice and add it to the page
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("button2");
    choiceButton.setAttribute("value", choice);
    choiceButton.innerText = choice;
    choices.appendChild(choiceButton);
    choiceButton.onclick = checkAnswer;
  });
};

function checkAnswer() {
  // Time penalty for incorrect answers
  const timePenalty = 10;

  // Display the current question number and total number of questions
  displayQuestionNumber = `Question: ${questionCount + 1}/${maxNumberOfQuestions}`;
  questionNumber.innerHTML = displayQuestionNumber;

  // Audio files for correct and incorrect answers
  const incorrectAudio = new Audio("assets/sfx/incorrect.wav");
  const correctAudio = new Audio("assets/sfx/correct.wav");

  // Check if the selected choice is the correct answer
  if (this.value === availableQuestions[questionIndex].answer) {
    // Increment the correct answer count
    correctAnswersTotal++;

    // Update the feedback display and play the correct audio
    feedback.innerText = "Well done, that was correct!";
    feedback.setAttribute("style", "color: --highlight-turqoise; border-top: solid 2px --highlight-turqoise;");
    correctAudio.play();
  } else {
    // Decrement the time and play the incorrect audio
    secondsCount -= timePenalty;
    incorrectAudio.play();
    timerNumber.innerText = secondsCount;

    // Update the feedback display
    feedback.innerText = "Unlucky, that was incorrect!";
    feedback.setAttribute("style", "color: red; border-top: solid 2px red;");
  }

  // Update the correct answers display
  correctAnswersDisplay.innerText = `Total correct answers: ${correctAnswersTotal} out of ${maxNumberOfQuestions} questions`;

  // Show the feedback for a short time before hiding it
  feedback.setAttribute("class", "feedback");
  setTimeout(() => {
    feedback.setAttribute("class", "feedback hide");
  }, 1000);

  // Remove the current question from the available questions
  availableQuestions.splice(questionIndex, 1);

  // If all questions have been answered, end the game. Otherwise, get the next question.
  if (questionCount == maxNumberOfQuestions) {
    endGame();
  } else {
    getQuestionAndChoices();
  }
}

endGame = () => {
  // Show end screen and hide other elements
  endScreenWrap.classList.remove("hide");
  questionsWrap.classList.add("hide");
  startScreenWrap.classList.add("hide");
  timerWrap.classList.add("hide");
  submitBtn.classList.add("button");

  // Stop the timer
  clearInterval(time);

  // If time is less than zero, set score to zero
  if (secondsCount < 0) {
    secondsCount = 0;
  }

  // Print final score (remaining seconds) to end screen
  finalScoreSpan.textContent = secondsCount;
};

submitBtn.onclick = function getScores() {
  // Get user score and initials
  const userScore = secondsCount;
  const userInitials = initials.value;

  // Get scores from local storage or create an empty array
  const scores = JSON.parse(localStorage.getItem("scores")) || [];

  // Create a new score object with user initials and score
  const score = {
    name: userInitials,
    score: userScore,
  };

  // Add new score to scores array
  scores.push(score);

  // Sort scores in descending order by score
  scores.sort((a, b) => b.score - a.score);

  // Keep only the top 5 scores
  scores.splice(5);

  // Update local storage with high scores
  localStorage.setItem("scores", JSON.stringify(scores));

  // Redirect to leaderboard page
  location.assign("leaderboard.html");
};
