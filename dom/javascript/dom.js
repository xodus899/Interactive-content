let h1 = document.querySelector("h1");
h1.style.color = "lime";

let body = document.querySelector("body");
let isBlue = false;

setInterval(() => {
	if (isBlue) {
		body.style.background = "white";
	} else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;

},1000)