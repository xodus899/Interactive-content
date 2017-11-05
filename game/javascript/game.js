let numberGuessed = Number(prompt("Can you guess the number between 1 and 10?"));
let correctNumber = Math.floor(Math.random()*10);
let correctAnswer = "WOOOOO CORRECTTT!!!!";
let counter = 0;


if (numberGuessed === correctNumber) {
	alert(correctAnswer);
} else if (numberGuessed > correctNumber) {
	alert("Too High, Try again!");
} else  {
	alert("Too Low, Try again!");
}


