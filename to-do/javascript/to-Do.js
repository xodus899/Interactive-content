//new add a todo
let toDoList = [];
let ask = prompt("What would you like to add to your to do list?");

// for(i = 0; i <= toDoList.length; i++) {
// 	if (ask.toLowerCase() === "new") {
// 		let newPrompt = prompt("Enter a to do");
// 		toDoList.push(newPrompt);
// 	} else if (ask.toLowerCase() === "list") {
// 		console.log(toDoList);
// 	} else if (ask.toLowerCase() === "quit") {
// 		break;
// 	}
// ask = prompt("What would you like to add to your to do list?");
// }

while (ask !== "quit") {
	if (ask.toLowerCase() === "new") {
		let newPrompt = prompt("Enter a to do");
		toDoList.push(newPrompt);
	} else {
		if (ask.toLowerCase() === "list") {
			console.log(toDoList);
		}
	}
	ask = prompt("What would you like to add to your to do list?");
}

console.log("The app has been terminated!");
