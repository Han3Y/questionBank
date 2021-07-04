/**
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 */
function f1(node) {
    node.value = node.next.value;
    node.next = node.next.next;
}