"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    // TODO: implement recursion on these
    let stack = [this];
    let minDepth = 1;

    while (stack.length) {
      let current = stack.pop();

      if (!current.left || !current.right) {
        return minDepth;
      }

      minDepth++;

      stack.push(current.right);
      stack.push(current.left);
    }

    return minDepth;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let stack = [this];
    let maxDepth = 1;
    console.log("maxDepth=", maxDepth);
    let currDepth = 1;
    console.log("currDepth=", currDepth);

    while (stack.length) {
      let current = stack.pop();
      console.log("current=", current.val);

      // leaf hit
      if (!current.left && !current.right) {
        if (currDepth > maxDepth) {
          maxDepth = currDepth;
          console.log("LEAF HIT maxDepth=", maxDepth);
        }
        currDepth = currDepth - 1;
        console.log("LEAF HIT currDepth=", currDepth);
      }

      // no leaf - continue
      console.log("NO LEAF HIT - CONTINUE")

      if (current.right) {
        stack.push(current.right);
        console.log("RIGHT CHILD HIT new stack=", stack);

        if (current.left) {
          stack.push(current.left);
          console.log("LEFT CHILD HIT new stack=", stack);
        }
      }

      currDepth++;
      console.log("CONTINUE currDepth=", currDepth);
    }

    return maxDepth;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;

    return this.root.minDepthToIncompleteNode();

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;

    return this.root.maxDepth();

  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
