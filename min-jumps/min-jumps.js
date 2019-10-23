'use strict';

// Complete this algo
const minJumps = arr => {
  let i = 0;
  let counter = 0;
  while (i < arr.length - 1){
    if (arr[i]+i >= arr.length - 1){
      return ++counter
    }
    i = helper(i, arr)
    counter++
  }
  return counter
};

function helper(index, array){
  let largest = 0;
  let largestIndex = 0;
  for (let i = 1; i <= array[index]; i++){
    if (i + array[index+i] > largest){
      largest = i +array[index+i]
      largestIndex = index+i
    }
  }
  return largestIndex
}

module.exports = minJumps
