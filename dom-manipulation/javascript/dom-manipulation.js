//select

let tag = document.querySelector("#highlight");
let p = document.querySelector("p");

//Text content returns the text as a string
p.textContent;

// You can alter the text if neeed in a string format but will remove any tags
p.textContent = "I am still an awesome paragraph";
// innerHTML you can keep the tags if needed
p.innerHTML = "This is an awesome <strong> paragraph </strong>";

//manipulate
// but this is not dry! this should be relocated into a css file while hiding and showing a class.
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "gray";
// tag.style.marginTop = "200px";
// tag.style.textAlign = "center";


setInterval( () => {
  if (tag.style.color === "blue") {
    tag.style.color = "lime";
  } else {
    tag.style.color = "blue";
  }

},1000);




