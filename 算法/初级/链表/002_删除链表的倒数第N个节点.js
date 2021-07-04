/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 进阶：你能尝试使用一趟扫描实现吗？
 */
/**
 * 入栈出栈
 * @param head
 * @param n
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
function f1(head, n) {
    let myHead = {
        val: '0',
        next: l1
    };
    let arr = [];
    arr.push(myHead);
    let next = myHead;
    while (next.next) {
        arr.push(next.next);
        next = next.next;
    }
    for(let i = 0; i < n;i ++){
        arr.pop();
    }
    let prev = arr[arr.length - 1];
    if(!prev){
        return [];
    }else{
        prev.next = prev.next.next;
    }
    return arr[0].next;
}

/**
 * 双指针，第二个先走n步，当第二个走到最后的时候，第一个指针的下一个，就是要删除的节点
 */
function f2(head, n) {
    let myHead = {
        val: '0',
        next: l1
    };
    let f1 = myHead;
    let f2 = myHead;
    for(let i = 0; i < n ; i ++){
        f1 = f1.next;
    }
    while (f1.next !== null){
        f1 = f1.next;
        f2 = f2.next;
    }
    if(f2.next === null){
        return [];
    }else{
        f2.next = f2.next.next;
    }
    return myHead.next;
}

console.log(f2(l1, 1));