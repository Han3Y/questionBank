/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 */

let l9 = {
    val: 9,
    next: null
};
let l7 = {
    val: 7,
    next: l9,
};
let l5 = {
    val: 5,
    next: l7
};
let l3 = {
    val: 3,
    next: l5
};
let l1 = {
    val: 1,
    next: l3
};

let l8 = {
    val: 8,
    next: null,
};
let l6 = {
    val: 6,
    next: l8
};
let l4 = {
    val: 4,
    next: l6
};
let l2 = {
    val: 2,
    next: l4
};

function f1(l1,l2) {
    let newHead = {};
    if(l1 == null){
        newHead.next = l2;
    }else if(l2 == null){
        newHead.next = l1;
    }else if(l1.val <= l2.val){
        newHead = l1;
        newHead.next = f1(l1.next, l2);
    }else{
        newHead = l2;
        newHead.next = f1(l1, l2.next);
    }
    return newHead;
}

// console.log(JSON.stringify(f1(l1, l2)));

function f2(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let startHead = {};
    let nextHead = startHead;
    while (p1 && p2){
        if(p1.val <= p2.val){
            nextHead.next = p1;
            p1 = p1.next;
        }else{
            nextHead.next = p2;
            p2 = p2.next;
        }
        nextHead = nextHead.next;
    }
    if(p1 == null){
        nextHead.next = p2;
    }else if(p2 === null){
        nextHead.next = p1;
    }
    return startHead.next;
}

console.log(JSON.stringify(f2(l1, l2)));