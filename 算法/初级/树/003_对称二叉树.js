/**
 *给定一个二叉树，检查它是否是镜像对称的。
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * 递归，分别校验左右子树，一个左移，一个右移
 * @param root
 * @returns {boolean}
 */
function f1(root) {
    function check(leftP, rightP) {
        if(leftP == null && rightP == null){
            return true;
        }
        if(leftP == null || rightP == null){
            return false;
        }
        return leftP.val == rightP.val && f1(leftP.left, rightP.right) && f1(leftP.right, rightP.left);
    }
    return check(root.left, root.right);
}

/**
 * 迭代
 * @param root
 */
function f2(root) {
    function check(leftP, rightP) {
        let queue = [];
        queue.push(leftP, rightP);
        while (queue.length){
            leftP = queue.shift();
            rightP = queue.shift();
            if(!leftP && !rightP){
                continue;
            }
            if(!leftP || !rightP || rightP.val !== leftP.val){
                return false;
            }
            queue.push(leftP.left);
            queue.push(rightP.right);

            queue.push(leftP.right);
            queue.push(rightP.left);
        }
        return true;
    }
    return check(root.left, root.right);
}