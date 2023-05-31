"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this;
    if (current.val === val) return current;
    if (current.left === null && current.right === null) return undefined;

    if (val < current.val) {
      return current.left.findRecursively(val);
    } else {
      return current.right.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    let current = this;

    if(val < current.val) {
      if(current.left === null) {
        current.left = new Node(val);
      }

      return current.left.insertRecursively(val)
    } else if (val > current.val) {
      if(current.right === null) {
        current.right = new Node(val);
      }

      return current.right.insertRecursively(val)
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder(arr=[]) {
    let current = this;
    if (current.left === null && current.right === null) return;

    current.left.dfsInOrder(current.left)
    arr.push(current);
    current.right.dfsInOrder(current.right)

    print("Array!", arr);
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // /** insert(val): Insert a new node into the BST with value val.
  //  * Returns the tree instance. Uses iteration. */

  // insert(val) {

  // }

  // /** insertRecursively(val): Insert a new node into the BST with value val.
  //  * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this.root
    } 

    return this.root.insertRecursively(val);
  }

  // /** find(val): Search the BST for a node with value val.
  //  * Returns the node, if found; else undefined. Uses iteration. */

  // find(val) {

  // }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();

  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {

  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
