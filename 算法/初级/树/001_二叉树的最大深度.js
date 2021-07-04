/**
 *给定一个二叉树，找出其最大深度。

 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

 说明: 叶子节点是指没有子节点的节点。
 *
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

/**
 * 递归
 * @param root
 * @returns {number}
 */
function f1(root) {
    if(root === null){
        return 0;
    }
    let maxDeep = Math.max(f1(root.left), f1(root.right)) + 1;
    return maxDeep;
}
console.log(f1(root));

/**
 * BFS 广度优先遍历，每一层遍历完就加一
 * @param root
 */
function f2(root) {
    if(root == null){
        return 0;
    }
    let arr = [];
    arr.push(root);
    let count = 0;
    while (arr.length > 0){
        let newArr = [];
        while (arr.length > 0){
            let item = arr.pop();
            if(item.left){
                newArr.push(item.left);
            }
            if(item.right){
                newArr.push(item.right);
            }
        }
        count ++;
        arr = newArr;
    }
    return count;
}

console.log(f2(root));