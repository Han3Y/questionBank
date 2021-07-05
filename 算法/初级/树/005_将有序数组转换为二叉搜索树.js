/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * 递归
 * @param nums
 * @returns {TreeNode|boolean}
 */
function f1(nums){
    if(nums == null || !nums.length){
        return null;
    }
    let middleIndex = parseInt(nums.length / 2);
    let middleItem = nums[middleIndex];
    let leftNums = nums.slice(0, middleIndex);
    let rightNums = nums.slice(middleIndex + 1);
    let node = new TreeNode(middleItem, f1(leftNums), f1(rightNums));
    return node;
}

let root = f1(arr);
console.log(root);

/**
 * 按层级排
 * @param nums
 * @returns {TreeNode}
 */
// function f1(nums) {
//     let queue = [];
//     let root = new TreeNode();
//     queue.push(root);
//     while (nums.length){
//         let num = nums.shift();
//         let currentNode = queue.shift();
//         currentNode.val = num;
//         if(nums.length > 1){
//             let leftNode = new TreeNode();
//             currentNode.left = leftNode;
//             queue.push(leftNode);
//             if(nums.length > 2){
//                 let rightNode = new TreeNode();
//                 currentNode.right = rightNode;
//                 queue.push(rightNode);
//             }
//         }
//     }
//     return root;
// }
//
// console.log(JSON.stringify(f1(arr)));
