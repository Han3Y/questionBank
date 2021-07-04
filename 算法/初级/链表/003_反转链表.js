/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 *
 * 链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 */


/**
 *
 * @param head
 */
let l5 = {
    val: 5,
    next: null
};
let l4 = {
    val: 4,
    next: l5,
};
let l3 = {
    val: 3,
    next: l4
};
let l2 = {
    val: 2,
    next: l3
};
let l1 = {
    val: 1,
    next: l2
};
function f1(head) {
    let arr = [];
    let myHead = {
        val: 0,
        next: head
    };
    let next = myHead;
    while (next.next){
        arr.push(next.next);
        next = next.next;
    }
    let newHead = arr.pop();
    let item = newHead;
    while (arr.length){
        item.next = arr.pop();
        item = item.next;
        if(arr.length === 0){
            item.next = null;
        }
    }
    return newHead;
}

// console.log(f1(l1));

/**
 * 递归
 * @param head
 */
function f2(head) {
    if(head == null || head.next == null){
        return head;
    }
    let reverse = f2(head.next);
    head.next.next = head;
    head.next = null;
    return reverse;
}

console.log(f2(l1));
