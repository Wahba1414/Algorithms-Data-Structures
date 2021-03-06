class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value.
  // Traverse until reach an end and then add a new leaf.
  // Need to check for duplication later. won't do anything. (just ignore)
  insert(value) {
    var newItem = new Node(value);

    if (this.root == null) {
      this.root = newItem;
    } else {
      this.insertItem(this.root, newItem);
    }

    return this; //Cascading/chaining
  }

  // helper functions. Recursive
  insertItem(root, newItem) {
    var currentItem = root;
    var value = newItem.data;

    if (currentItem.data > value) {
      // go left.
      if (currentItem.left == null) {
        currentItem.left = newItem;
      } else {
        this.insertItem(currentItem.left, newItem);
      }

    } else if (currentItem.data < value) {
      // go right.
      if (currentItem.right == null) {
        currentItem.right = newItem;
      } else {
        this.insertItem(currentItem.right, newItem);
      }
    }

  }

  remove(value) {
    if (this.root == null) {
      return false;
    } else {
      this.removeItem(this.root, value);
    }
  }

  removeItem(root, value) {
    var currentItem = root;

    if (currentItem == null) {
      return null;
    } else if (currentItem.data > value) {

      // go left.
      var retrunedNode = this.removeItem(currentItem.left, value);
      currentItem.left = retrunedNode; //This affects the original object (binaryTree)
      return currentItem;

    } else if (currentItem.data < value) {

      // go right.
      var retrunedNode = this.removeItem(currentItem.right, value);
      currentItem.right = retrunedNode;
      return currentItem;

    } else {

      // The value is found.
      if (currentItem.left == null && currentItem.right == null) {

        console.log('No Children');
        currentItem = null; //doesn't affect the original object (binaryTree)
        return currentItem;

      } else if (currentItem.left == null) {  // one child

        console.log('One Children');
        currentItem = currentItem.right;
        return currentItem;

      } else if (currentItem.right == null) { // one child

        console.log('One Children');
        currentItem = currentItem.left;
        return currentItem;

      } else { //two children.

        console.log('Two Children');
        var results = this.getMinNode(currentItem.right, currentItem);
        var minNode = results.node;

        if (currentItem.right == minNode) {
          this.swapTwoNodes(currentItem, minNode);
          currentItem.right = minNode.right;
        } else {
          console.log(`Nearst right node is not the minimum one`);
          this.swapTwoNodes(currentItem, minNode);
          results.parent.left = null;
        }

        return currentItem;

      }
    }
  }

  // helper functions.
  getMinNode(vertex, parent) {
    if (vertex.left != null) {
      return this.getMinNode(vertex.left, vertex);
      // return minNode;
    } else {
      return {
        parent,
        node: vertex
      };
    }
  }

  swapTwoNodes(first, second) {
    [first.data, second.data] = [second.data, first.data];
  }

  getRootNode() {
    return this.root;
  }

  //O(Log(N): in case of the BST is balanced or one of self-balanced BST like red-black one ---> O(N)) 
  search(root, value) {
    if (root == null) {
      return false;
    } else {
      if (value > root.data) {

        // go right.
        return this.search(root.right, value);

      } else if (value < root.data) {

        // go left.
        return this.search(root.left, value);

      } else {

        // found
        return root;

      }
    }
  }

  // Traverse and get the data out sorted. (ascending)
  // O(N)
  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  inOrderDescending(node) {
    if (node != null) {
      this.inOrderDescending(node.right);
      console.log(node.data);
      this.inOrderDescending(node.left);
    }
  }
  /*
    Works as follows:
    First, print any touched node, second, go left as possible and then go back by traversing right before go up.
    Hint: Keep this implementation in front of your eyes to traverse correctly.
  */
  preOrder(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  /*
    Works as follows:
    First, go left as possible, then print this node, before go up, go right and repeat the first step.
    Hint: only print a node when all its children are printed.
    Hint: Keep this implementation in front of your eyes to traverse correctly.
  */
  postOrder(node) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  convertTreeToLevels(node, levelsData, level) {
    if (node != null) {
      // console.log(`Level No. : ${levelCounter}`);

      if (levelsData[level]) {
        levelsData[level].push(node.data);
      } else {
        console.log(`level: ${level} - node.data: ${node.data}`);
        levelsData[level] = [node.data];
      }


      if (node.left != null) this.BFS(node.left, levelsData, level + 1);
      if (node.right != null) this.BFS(node.right, levelsData, level + 1);

    }
  }

  // Traverse nodes level by level.
  // Time complexity = O(N)
  // Space complexity= O(N)
  // Recursive.
  BFSRecursive(levelNodes) {

    if (levelNodes.length) {

      var data = levelNodes.map(node => node.data);

      console.log(data.join(' '));

      var newLevelNodes = [];

      levelNodes.forEach(function (node) {
        if (node.left != null) newLevelNodes.push(node.left);
        if (node.right != null) newLevelNodes.push(node.right);
      });

      this.BFSRecursive(newLevelNodes);

    }

  }


  // With Queue (Traverse).
  BFS() {
    if (this.root) {
      // Used a normal array instead of Queue here for just simplicty.
      var queue = [this.root];
      var currentNode;
    }

    while (queue.length) {
      currentNode = queue.shift();
      console.log(currentNode.data);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

    }

  }

}

// testing.
tree = new BinarySearchTree();
// binaryTree.insert(100);
// binaryTree.insert(150);
// binaryTree.insert(200);
// binaryTree.insert(160);
// binaryTree.insert(210);
// binaryTree.insert(300);
// binaryTree.insert(30);
// binaryTree.insert(40);
// binaryTree.insert(10);
// binaryTree.insert(45);
// binaryTree.insert(42);
// binaryTree.insert(205);
// binaryTree.insert(35);
// binaryTree.insert(32);


// binaryTree.remove(100);
// console.log(binaryTree.root);
// binaryTree.inOrder(binaryTree.root);
// var results = binaryTree.search(binaryTree.root, 17);
// console.log(`results: ${results.data}`);
// binaryTree.remove(17);
// var results = binaryTree.search(binaryTree.root, 17);
// console.log(`results: ${results.data}`);

// console.log('\n\n');
// binaryTree.inOrderDescending(binaryTree.root);

// console.log('\n\n');
// binaryTree.preOrder(binaryTree.root);
// binaryTree.remove(7);
// binaryTree.inOrder(binaryTree.root);

// console.log('\n\n');
// binaryTree.postOrder(binaryTree.root);

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// var results = {};

// tree.convertTreeToLevels(tree.root, results, 1);

// console.log(results)
// Object.keys(results).forEach(key => {
//   console.log(results[key].join(' '));
// });

// tree.BFS([tree.root]);
tree.BFS();