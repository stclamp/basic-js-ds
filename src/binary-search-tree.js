const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.arr = [];
    this.data = 0;
  }

  root() {
    if (this.arr.length) {
      this.data = this.arr[0];
      return this.arr[0];
    } else {
      return null;
    }
  }

  add(data) {
    this.arr.push(data);
    this.data = this.arr[0];
    return this.arr;
  }

  has(data) {
    return this.arr.includes(data);
  }

  find(data) {
    if (this.arr.filter((item) => item === data).length) {
      return this.arr.filter((item) => item === data)[0];
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.arr.includes(data)) {
      let idx = this.arr.indexOf(data);
      return this.arr.splice(idx, 1);
    }
  }

  min() {
    return this.arr.sort((a, b) => a - b)[0];
  }

  max() {
    return this.arr.sort((a, b) => b - a)[0];
  }
}

const tree = new BinarySearchTree();
const data = new Node(tree.data);

tree.add(8);
tree.add(7);
tree.add(6);

console.log(tree.root());

module.exports = {
  BinarySearchTree,
};
