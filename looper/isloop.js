'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let currentNode = linkedlist.head;
  let ourSet = new Set();

  while (currentNode.next) {
    if (ourSet.has(currentNode)) {
      return true;
    }
    ourSet.add(currentNode)
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
