"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let valuesStack = [this];
    let sum = 0;

    while (valuesStack.length) {
      let current = valuesStack.pop();
      sum += current.val;

      for (let child of current.children) {
        valuesStack.push(child);
      }
    }

    return sum;
  }

  // /** countEvens(): starting from the invoking node and moving through its
  //  * children, count how many nodes have even values. Returns that count as
  //  * an integer. */
  countEvens() {
    let stack = [this];
    let count = 0;

    while (stack.length) {
      let current = stack.pop();
      if (current.val % 2 === 0) {
        count++;
      }
      for (let child of current.children) {
        stack.push(child)
      }
    }

    return count;
  }

  // /** numGreater(lowerBound): starting from the invoking node and moving through
  //  * its children, return a count of the number of nodes whose value is greater
  //  * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root) return 0; // empty tree - can't call .sumValues on null val
    return this.root.sumValues()
  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root) return 0;
    return this.root.countEvens();
  }

  // /** numGreater(lowerBound): return a count of the number of nodes
  //  * whose value is greater than lowerBound. */
  // numGreater(lowerBound) {

  // }
}

module.exports = { Tree, TreeNode };
