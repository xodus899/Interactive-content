"use strict";

let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1Color = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", () => {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  colors = generateRandomColors(3);

});

hardButton.addEventListener("click", () => {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
});


resetButton.addEventListener("click", () => {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1Color.style.backgroundColor = "#232323";
  for(let i=0; i < squares.length; i++) {
   squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

for(let i=0; i < squares.length; i++) {
  // add colors
   squares[i].style.backgroundColor = colors[i];
  // add click listener to squares
  squares[i].addEventListener("click", () => {
    //grab color
    let clickedColor = colors[i];
    //compare color to pickedcolor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "CORRECT!";
      changeColors(clickedColor);
      h1Color.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play Again?";
    } else {
      squares[i].style.backgroundColor = "#232323";
      messageDisplay.textContent = "Wrong Try Again!";
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for(let i=0; i < squares.length; i++) {
  //change color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}

function generateRandomColors(num) {
  //make an array
  let arr =[];
  // add num random colors to arr
  for (let i = 0; i < num; i++) {
    // get random color, push into array;
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
