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

  // insert a new value.
  // Need to check for duplication later. won't do anything. (just ignore)
  insert(value) {
    var newItem = new Node(value);

    if (this.root == null) {
      this.root = newItem;
    } else {
      this.insertItem(this.root, newItem);
    }

    return this;

  }

  // helper functions.
  insertItem(root, newItem) {
    // console.log('Inside insertItem');

    var currentItem = root;
    var value = newItem.data;

    // console.log(`currentItem: ${JSON.stringify(currentItem)}`);

    if (currentItem.data > value) {
      // go left.
      // console.log('go left');

      if (currentItem.left == null) {
        currentItem.left = newItem;
      } else {
        this.insertItem(currentItem.left, newItem);
      }

    } else if (currentItem.data < value) {
      // go right.
      // console.log('go right');

      if (currentItem.right == null) {
        currentItem.right = newItem;
      } else {
        this.insertItem(currentItem.right, newItem);
      }
    }
  }

  // remove an item.
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
      return false;
    }
    else if (currentItem.data > value) {
      // go left.
      console.log('go left');

      var retrunedNode = this.removeItem(currentItem.left, value);
      currentItem.left = retrunedNode;
      return currentItem;

    } else if (currentItem.data < value) {
      // go right.
      console.log('go right');
      var retrunedNode = this.removeItem(currentItem.right, value);
      currentItem.right = retrunedNode;
      console.log(`currentItem.right: ${currentItem}`);
      return currentItem;
    } else {
      console.log('Node is found');
      // The value is found.
      // No children
      if (currentItem.left == null && currentItem.right == null) {
        console.log('No Children');

        currentItem = null;
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

        // console.log(`minNode: ${JSON.stringify(minNode)}`);

        // console.log('before swap');
        // console.log(`currentItem: ${JSON.stringify(currentItem)}`);
        // console.log(`minNode: ${JSON.stringify(minNode)}`);


        this.swapTwoNodes(currentItem, minNode);

        // console.log('after swap');
        // console.log(`currentItem: ${JSON.stringify(currentItem)}`);
        // console.log(`minNode: ${JSON.stringify(minNode)}`);
        results.parent.left = null;
        return currentItem;
      }

    }

  }


  // helper functions.
  getMinNode(root, parent) {
    // console.log(`getMinNode root: ${JSON.stringify(root)}`);

    if (root.left != null) {
      return this.getMinNode(root.left, root);
      // return minNode;
    } else {
      return {
        parent,
        node: root
      };
    }
  }

  swapTwoNodes(first, second) {
    [first.data, second.data] = [second.data, first.data];
  }

  getRootNode() {
    return this.root;
  }


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

  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node != null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node != null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

}

// testing.
binaryTree = new BinarySearchTree();
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(20);
binaryTree.insert(5);
binaryTree.insert(22);
binaryTree.insert(15);
binaryTree.insert(17);
binaryTree.insert(13);


// binaryTree.remove(7);
// console.log(binaryTree.root);
binaryTree.inOrder(binaryTree.root);
var results = binaryTree.search(binaryTree.root, 17);
console.log(`results: ${results.data}`);
binaryTree.remove(17);
var results = binaryTree.search(binaryTree.root, 17);
console.log(`results: ${results.data}`);

// console.log('\n\n');
// binaryTree.preOrder(binaryTree.root);
// binaryTree.remove(7);
// binaryTree.inOrder(binaryTree.root);

// console.log('\n\n');
// binaryTree.postOrder(binaryTree.root);