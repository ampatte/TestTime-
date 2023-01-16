//start button
document.getElementById("startbtn").innerText = "Begin Quiz";
document.getElementById("startbtn").addEventListener("click", StartQuiz);
var i = 0;
var score = 0;
var HighScores = document.getElementById("TotalScores");
var TotalScores = [];
let questions = [
  "What Coding Language controls the functionality of a webpage?",
  "Javascript takes a webpage from Static to  _______?",
  "_______ are commonly used in JavaScript files.",
];
let answerChoices = [
  ["HTML", "JavaScript", "CSS"],
  ["Dynamic", "Amazing", "Dramatic"],
  ["Closing Tags", "Headers", "Functions"],
];
let answerGroups = ["1st", "2nd", "3rd"];
var timer = document.querySelector("#timer");
var timeLeft = 60;


function StartQuiz(answerVal) {
  document.getElementById("startbtn").setAttribute("hidden", "hidden");
  document.getElementById("score").innerHTML = "Score: ";
  TotalScores.innerHTML = "";
  startTimer();

  if (i > 0 && i <= 3) {
    if (answerVal === answerGroups[i - 1]) {
      score += 10;

    } else if (answerVal == false) {
       score -= 10;
      timeLeft -= 10;
    }
  }

  if (i == 0) {
    //display answerGroups
    document.getElementById("1st").removeAttribute("hidden");
    document.getElementById("2nd").removeAttribute("hidden");
    document.getElementById("3rd").removeAttribute("hidden");

    score = 0;

    if (timeLeft < 1 || i == 3) {
      clearInterval(timerInterval);
      document.getElementById("timer").innerHTML = "";
      document.getElementById("1st").innerHTML = "";
      document.getElementById("2nd").innerHTML = "";
      document.getElementById("3rd").innerHTML = "";
      document.getElementById("1st").setAttribute("hidden", "hidden");
      document.getElementById("2nd").setAttribute("hidden", "hidden");
      document.getElementById("3rd").setAttribute("hidden", "hidden");
      document.getElementById("question").innerHTML = "";
      document.getElementById("startbtn").removeAttribute("hidden");
      document.getElementById("startbtn").innerHTML = "Play Again";

      i = 0;

      if (score > 0 && timeLeft > 0) {
        let initials = prompt("Enter your initials here:");
        TotalScores.push([initials, score]);
      }

      timeLeft = 60;
    }
  }

  document.getElementById("score").innerHTML = score;

  if (i <= 2) {
    document.getElementById("1st").innerHTML = answerChoices[i][1];
    document.getElementById("2nd").innerHTML = answerChoices[i][0];
    document.getElementById("3rd").innerHTML = answerChoices[i][2];
    document.getElementById("question").innerHTML = questions[i];
  }

  if (i > 2) {
  }

  if (i <= 3) {
    i++
  }
}

function startTimer() {
  //timer
  timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds left!";

    if (timeLeft < 1) {
      clearInterval(timerInterval);
      document.getElementById("timer").innerHTML = "Times up!";
    }
  }, 1000);
}

function viewHighscores() {
  // scoreTotal
  HighScores.innerHTML = "";
  TotalScores.sort(function (a, b) {return b[1] - a[1];});

  for (var i = 0; i < TotalScores.length; i++) {
    HighScores.innerHTML +=
      "initials: " + TotalScores[i][0] +
      " Score: " +  TotalScores[i][1] + "";
  }
}

document.getElementById("TotalScores")
  .addEventListener("click", viewHighscores);

document.querySelectorAll(".answerBtn").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("1st").innerHTML = choices[i][1];
    console.log(event.target.value);

    var answerVal = event.target.value;
    if (answerVal === answerGroups[0]) {
      score += 10;
        alert("right answer");
    } else {
      timeLeft -= 10;
      score -= 10;
    }
    i++;
  });
});
