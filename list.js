const _Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // insertBefore(item, target) {
  //   if (this.head === null) {
  //     this.insertFirst(item);
  //   } else {
  //     let currentNode = this.head;
  //     let nextNode = this.head;
  //     console.log
  //     while (currentNode.next !== target) {
  //       currentNode = currentNode.next;
  //       nextNode = nextNode.next;
  //     }
  //     currentNode.next = new _Node(item, nextNode);
  //   }
  // }

  insertBefore(item, target) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currentNode = this.head;
    let nextNode = this.head.next;
    console.log
    while (currentNode !== null && currentNode.next.value !== target) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    if (currentNode === null) {
      this.insertLast(item)
      return
    }

    //nextNode = currentNode.next;
    currentNode.next = new _Node(item, nextNode);
  }
  insertAfter(item, target) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let currentNode = this.head;
    let nextNode;
    while (currentNode !== null && currentNode.value !== target) {
      currentNode = currentNode.next;
    }
    nextNode = currentNode.next;
    currentNode.next = new _Node(item, nextNode);

  }
  // insertAt(item, target) {
  //   if (this.head === null) {
  //     throw new Error(`${target} does not exist`);
  //   } else {
  //     let currentNode = this.head;
  //     let targetNode = this.head.next
  //     while (currentNode.next !== target) {
  //       currentNode = currentNode.next;
  //       targetNode = targetNode.next;
  //     }
  //     currentNode.next = new _Node(item, targetNode.next);
  //   }
  // }

  insertAt(item, target) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    let currentNode = this.head
    let currentPosition = 1
    while (currentPosition < target - 1) {
      currentNode = currentNode.next
      currentPosition++
    }
    const tempNode = new _Node(item, currentNode.next)
    currentNode.next = tempNode
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of nextious
    let nextiousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the nextious node
      nextiousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    nextiousNode.next = currNode.next;
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
}

function display(list) { 
  let results = [];
  let currentNode = list.head;
  while (currentNode !== null && currentNode.next !== null) {
    results.push(currentNode.value)
    currentNode = currentNode.next
  }
  return results;
}

function size(list) {

}

function findLast() {
let currentNode = this.head;
while (currentNode.next !== null) {
  currentNode = currentNode.next;
}
return currentNode;
}

function findPrevious(item) {
  let currentNode = this.head;
  while (item !== currentNode.next.value) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function isEmpty() {
  if (this.head === null) {
    return true;
  }
  return false;
}

function reverseList() {
  if (this.head === null) {
    return 'empty list'
  }
  let tempNode = this.head;
  while (tempNode) {
    const newNode = tempNode.next;
    tempNode.previous = tempNode.next;
    tempNode.next = tempNode.previous;
    tempNode = newNode;
  }
  this.head = tempNode;
  return tempNode;
}
module.exports = { LinkedList, display, findLast, findPrevious, };
