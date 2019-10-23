'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let currentNode = linkedlist.head;
  let ourHashTable = {};

  while (currentNode.next) {
    if (ourHashTable[currentNode.value]) {
      return true;
    }
    ourHashTable[currentNode.value] = true;
    currentNode = currentNode.next;
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
