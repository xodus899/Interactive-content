let toDoList = [];
let ask = prompt("What would you like to add to your to do list?");

while (ask !== "quit") {
	if (ask === "list") {
		listToDo();
	} else if (ask === "new")  {
		addToList();
	} else if (ask === "delete") {
		deleteToDo();
	}
	ask = prompt("What would you like to add to your to do list?");
}

console.log("The app has been terminated!");


function listToDo() {
	console.log("**********");
	toDoList.forEach((toDo,index) => {
		console.log(index + ": " + toDo);
		console.log("**********");
	});
}

function addToList() {
	let newPrompt = prompt("Enter a to do");
	toDoList.push(newPrompt);
	console.log("Your selection has been added");
}

function deleteToDo() {
	let indexToDelete = prompt("Enter what number to delete");
	toDoList.splice(indexToDelete,1);
	console.log("Your selection has been removed");
}
