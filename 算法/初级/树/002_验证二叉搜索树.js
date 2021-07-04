/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

 假设一个二叉搜索树具有如下特征：

 节点的左子树只包含小于当前节点的数。
 节点的右子树只包含大于当前节点的数。
 所有左子树和右子树自身必须也是二叉搜索树。

 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let left2 = new TreeNode('15', null, null);
let right2 = new TreeNode('7', null, null);
let left1 = new TreeNode('9',null, null);
let right1 = new TreeNode('20',left2, right2);
let root = new TreeNode('3',left1, right1);


let newLeft = new TreeNode('1', null, null);
let newRight = new TreeNode('3', null, null);
let root2 = new TreeNode('2',newLeft, newRight);

/**
 * 递归
 * @param root
 * @param lower
 * @param upper
 * @returns {*}
 */
function f1(root, lower, upper) {
    if(root == null){
        return true;
    }
    if(root.val <= lower || root.val >= upper){
        return false;
    }

    return f1(root.left, lower, root.val) && f1(root.right, root.val, upper);
}

console.log(f1(root, -Infinity, Infinity));
console.log(f1(root2, -Infinity, Infinity));

/**
 * 中序遍历，判断是否是升序的
 * @param root
 */
function f2(root) {
    let arr = [];
    let min = -Infinity;
    while (arr.length || root != null){
        while (root != null){
            arr.push(root);
            root = root.left;
        }
        root = arr.pop();
        if(root.val < min){
            return false;
        }
        min = root.val;
        root = root.right;
    }
    return true;
}
console.log(f2(root));
console.log(f2(root2));