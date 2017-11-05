let count = -10;

while(count <= 19) {
	console.log("Num: " +count);
	count++;
}

let evenCount = 10;
while(evenCount <= 40) {
	if(evenCount % 2 === 0) {
		console.log("even: " + evenCount);
	}
	evenCount++;
}


let oddCount = 300;
while(oddCount <= 333) {
	if(oddCount % 2 !== 0) {
		console.log("odd: " + oddCount);
	}
	oddCount++;
}

let divisibleByThreeAndFive = 5;
while(divisibleByThreeAndFive <= 50) {
	if(divisibleByThreeAndFive %  3 === 0 && divisibleByThreeAndFive % 5 === 0) {
		console.log("div by 3 and 5: " + divisibleByThreeAndFive);
	}
	divisibleByThreeAndFive++
} 