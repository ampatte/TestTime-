//start button
document.getElementById("startbtn").innerText = "Begin Quiz";
document.getElementById("startbtn").addEventListener("click", Quiz);
document.getElementById("1st").addEventListener("click", function(){
  Quiz(this.value);});
document.getElementById("2nd").addEventListener("click", function(){
  Quiz(this.value);});
document.getElementById("3rd").addEventListener("click",function(){
Quiz(this.value);});
document.addEventListener("click", function(){viewHighscores});
var i = 0;
var score = 0;
var HighScores = document.getElementById("TotalScores");
var TotalScores = [];
var timer = document.querySelector("#timer");
var timeLeft = 60;
let questionArray = [
  "What Coding Language controls the functionality of a webpage?",
  "Javascript takes a webpage from Static to  _______?",
  "_______ are commonly used in JavaScript files.",
];
let answerChoices = [
  ["HTML", "JavaScript", "CSS"],
  ["Dynamic", "Amazing", "Dramatic"],
  ["Closing Tags", "Headers", "Functions"],
];
let answers = ["2nd", "1st", "3rd"];



function Quiz(answerValue) {
  document.getElementById("instructions").setAttribute("hidden", "hidden");
  document.getElementById("startbtn").setAttribute("hidden", "hidden");
  document.getElementById("score").innerHTML = "Score: ";
  TotalScores.innerHTML = "";
  

  if (i > 0 && i <= 3) {
    if (answerValue == answers[i - 1]) {
      score += 10;
      alert("Correct!");
    } else  {
      score -= 10;
      timeLeft -= 10;
      alert("Wrong! -10 points");
    }
  }
  if (i == 0) {
    //display answerGroups
    document.getElementById("1st").removeAttribute("hidden");
    document.getElementById("2nd").removeAttribute("hidden");
    document.getElementById("3rd").removeAttribute("hidden");
    document.getElementById("score").removeAttribute("hidden");
    score = 0;

    timerInterval= setInterval(function() {
    if (timeLeft < 1 || i == 4) {
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
  },1000)
  }

  document.getElementById("score").innerHTML = score;

  if (i <= 2) {
    document.getElementById("1st").innerHTML = answerChoices[i][0];
    document.getElementById("2nd").innerHTML = answerChoices[i][1];
    document.getElementById("3rd").innerHTML = answerChoices[i][2];
    document.getElementById("question").innerHTML = questionArray[i];
  }

  if (i == 0){
    startTimer()
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
  },1000);
}

function viewHighscores() { 
  // high scores

  HighScores.innerHTML = "";
  TotalScores.sort(function (a, b) {
    return b[1] - a[1];
  });
  if(TotalScores.length > 0) {
  for (var i = 0; i< TotalScores.length; i++)  {
    HighScores.innerHTML += "High Scores: " + TotalScores[i][0] + " " + TotalScores[i][1] +
      " | ";
  }}
}
document.getElementById("TotalScores")


  // document.querySelectorAll(".answerBtn").forEach((item) => {
  // item.addEventListener("click", function (event) {
  //   event.preventDefault();
  //   document.getElementById("1st").innerHTML = answerChoices[i][0];
  //   document.getElementById("2nd").innerHTML = answerChoices[i][1];
  //   document.getElementById("1st").innerHTML = answerChoices[i][2];
  //   document.getElementById("question").innerHTML = questionArray[i];
  //   console.log(event.target.value);

  //  const answerBtn = event.target.value;
  // if (answerBtn === answers[0]) {
  //  score += 10;
  //  alert("right answer");
  // } else {
  // timeLeft -= 10;
  //  score -= 10;
  // }
  //   i++;
  //   });
  // });
