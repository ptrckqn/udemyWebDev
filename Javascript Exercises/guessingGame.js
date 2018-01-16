var answer = 7;
var userGuess = Number(prompt("Enter your guess"));

if(userGuess == answer){
  alert("Correct!");
}

else if (userGuess > answer){
  alert("Too high, try again");
}

else{
  alert("Too low, try again.")
}
