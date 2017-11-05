let nums =[45,46,47,48];

function myForEach(arr,func) {
	for(i = 0; i < arr.length; i++) {
		func(arr[i]);
	}	
}
myForEach(nums, (num) => {console.log(num) })



function normalForEach(arr) {
	arr.forEach( (num) => { console.log(num) })
}
normalForEach(nums);