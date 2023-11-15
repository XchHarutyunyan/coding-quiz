// Get the leaderboard element
const orderedListTag = document.getElementById("leaderboard");

// Event listener to run clearLeaderboard() when the clear button is clicked
document.getElementById("clear").onclick = clearLeaderboard;

// Get the scores from local storage, or an empty array if there are none
const scores = JSON.parse(localStorage.getItem("scores")) || [];

function clearLeaderboard() {
  // Remove the scores from local storage
  localStorage.removeItem("scores");

  // Clear the scores from the leaderboard
  while (orderedListTag.firstChild) {
    orderedListTag.removeChild(orderedListTag.firstChild);
  }
}

function printScores() {
  // Loop over each score and create an li tag
  scores.forEach((score) => {
    const newListTag = document.createElement("li");

    // Set the text content of the li element based on whether the score has a name associated with it
    if (score.name.length > 0) {
      newListTag.textContent = `${score.name}: ${score.score}`;
    } else {
      newListTag.textContent = `Anonymous: ${score.score}`;
    }

    // Print to leaderboard
    orderedListTag.appendChild(newListTag);
  });
}

// Call the printScores function to print the scores
printScores();
