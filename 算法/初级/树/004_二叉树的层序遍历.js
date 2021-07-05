/**
 *
 *给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
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
 * 迭代
 * @param root
 */
function f2(root) {
    if(root == null){
        return ;
    }
    let queue = [];
    queue.push(root);
    while(queue.length){
        let newItems = [];
        while (queue.length){
            let item = queue.shift();
            console.log(item.val);
            if(item.left){
                newItems.push(item.left);
            }
            if(item.right){
                newItems.push(item.right);
            }
        }
        queue = newItems;
    }
}
f2(root);
