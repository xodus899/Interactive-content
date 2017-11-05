function printReverse(array){
	for(i = array.length-1; i >= 0; i--) {
		console.log(array[i]);
	}
}
printReverse([1,2,3])
console.log("**********");
printReverse(["a","b","c"])
console.log("**********");

function isUniform(array) {
	let compareIndex = array[0];
	for (i = 0; i < array.length; i++) {
		if (compareIndex !== array[i]) {
			return false;
		}
	}
	return true;
}
isUniform([1,1,1])

function sumArray(array) {
	let sum = 0;
	array.forEach( (number) => {
		// sum = sum + number;
		sum += number;
	})
	console.log(sum);
	console.log("**********");
}
sumArray([1,2,3,4])

function max(array) {
	let highestNumer = array[0];
	for (i = 0; i < array.length; i++) {
		if (array[i] > highestNumer) {
			highestNumer = array[i];
		}
	}
	console.log(highestNumer);
}
max([1,2,3,4,5,6,10,1,2,3,4,100,5,6])
