/**
 * 二叉搜索树
 * 
 * 定义： 基于二叉树，左子节点存储小于根节点的值，右子树存储大于或等于根节点的值
 */

function BinarySearchTree() {
  var Node = function(key){ //{1}
  this.key = key;
  this.left = null;
  this.right = null;
  };
  var root = null; //{2}
 } 