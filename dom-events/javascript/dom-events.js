'use strict';

let buttonClick = document.querySelector("#button");
let isPurple = false;
//
//
//buttonClick.addEventListener("click",() => {
//  alert("hello");
//});
//
//
//buttonClick.addEventListener("click", buttonClicked);
//
//function buttonClicked() {
//  document.body.innerHTML = "<h1> GOODBYE </h1>";
//}


//buttonClick.addEventListener("click", () => {
//  if (document.body.style.background === "white") {
//    document.body.style.background = "purple";
//  } else {
//    document.body.style.background = "white";
//  }
//});


//buttonClick.addEventListener("click", () => {
//  if (isPurple) {
//    document.body.style.background = "white";
//  } else {
//    document.body.style.background = "purple";
//  }
//  isPurple = !isPurple;
//});

buttonClick.addEventListener("click", () => {
  document.body.classList.toggle("purple");
})
