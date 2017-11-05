// function isEven(number) {
// 	if(number % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
function isEven(number) {
	return number % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));



function factorial(number) {
	let result = number;
	for(i = number-1; i >= 1; i--) {
		result = result * i;
	}
	return result;
}
console.log(factorial(4));


function kebabToSnake(string) {
	if (string.includes("-") ) {
		return string.replace("-", "_");
	} else  {
		return string;
	}
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));