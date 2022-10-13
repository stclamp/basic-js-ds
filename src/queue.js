const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.value = [];
  }

  getUnderlyingList() {
    if (this.value.length) {
      for (let i = 0; i < this.value.length; i++) {
        return {
          value: this.value[i],
          next: this.value[i] ? this.value[i + 1] : null,
        };
      }
    } else {
      return { value: null, next: null };
    }
  }

  enqueue(value) {
    this.value.push(value);
    return this.value;
  }

  dequeue() {
    return this.value.length ? this.value.shift() : this.value;
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

console.log(queue.getUnderlyingList());

module.exports = {
  Queue,
};
