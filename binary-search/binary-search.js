'use strict';

// Complete this algo
// ORIGINAL SOLUTION
// const binarySearch = (array, target) => {
// 	if(array.length === 1){
// 		return array[0] === target
// 	}

// 	let midpoint = Math.floor(array.length/2)

// 	if(array[midpoint] === target){
// 		return true;
// 	}

// 	if(array[midpoint]>target){
// 		return binarySearch(array.slice(0,midpoint), target)
// 	} else {
// 		return binarySearch(array.slice(midpoint), target)
// 	}

// };

// EC SOLUTION O(1) SPACE
const binarySearch = (array, target) => {
	let start = 0;
	let end = array.length -1;
	if (array[start] ===  target || array[end]=== target){
		return true
	}
	while (start !== end){
		let midpoint = Math.floor((end + start) / 2)
		if (array[midpoint] === target){
			return true
		}
		if (array[midpoint] > target){
			end = midpoint
		}
		else start = midpoint
	}
	return array[start] === target
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
