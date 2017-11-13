"use strict";

let li = document.querySelectorAll("li");

for(let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", () => {
    li[i].classList.add("selected");
  });

  li[i].addEventListener("mouseout", () => {
    li[i].classList.remove("selected")
  });
  li[i].addEventListener("click", () => {
    li[i].classList.toggle("done");
  })
}


