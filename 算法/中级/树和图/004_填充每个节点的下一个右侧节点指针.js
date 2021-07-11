/**
 *给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 初始状态下，所有 next 指针都被设置为 NULL。


 进阶：

 你只能使用常量级额外空间。
 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。

 */
function TreeNode(val, left, right, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = next === undefined ? null : next;
}
/**
 *
 * @param root
 */
function f1(root) {

}