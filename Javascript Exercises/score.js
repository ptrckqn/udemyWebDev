dvar p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay")

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
  if(!gameOver) {
    p1Score++;
    p1Display.textContent = p1Score;
    if(p1Score === winningScore){
      p1Display.style.color = "green";
      gameOver = true;
    }
  }

});

p2Button.addEventListener("click", function(){
  if(!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if(p2Score === winningScore){
      p2Display.style.color = "green";
      gameOver = true;
    }
  }
});

resetButton.addEventListener("click", reset);

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  gameOver = false;
}

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  reset();

});
