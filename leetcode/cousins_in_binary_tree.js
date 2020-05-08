/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  var levelNodes = [root];
  var tempNodes = [];
  var searchRes = [];

  while (levelNodes.length) {

    searchRes = levelNodes.filter(function (node) {
      return ((node.val == x) || (node.val == y));
    });

    if (searchRes.length == 1) {
      return false;
    } else if (searchRes.length == 2) {
      // Check for parent.
      return (searchRes[0].parent != searchRes[1].parent);
    }

    tempNodes = [];
    for (let i = 0; i < levelNodes.length; i++) {
      if (levelNodes[i].right) {
        tempNodes.push(Object.assign({}, levelNodes[i].right, { parent: levelNodes[i].val }));
      }

      if (levelNodes[i].left) {
        tempNodes.push(Object.assign({}, levelNodes[i].left, { parent: levelNodes[i].val }));
      }
    }

    levelNodes = tempNodes;

  }

  return false;

};