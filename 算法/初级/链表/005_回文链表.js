/**
 * 请判断一个链表是否为回文链表。
 * 进阶：
 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */
function f1(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    if(arr.join('') === arr.reverse().join('')){
        return true;
    }else {
        return false;
    }
}

/**
 * 1. 使用快慢指针获取链表前半部分的最后一个节点
 * 2. 将链表的后半部分反转
 * 3. 将链表的前半部分与反转后的后半部分一一比较
 * 4. 还原后半部部分链表
 */
function f2(head) {
    const reverseList = (head) => {
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    const endOfFirstHalf = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    if (head == null) return true;

    // 找到前半部分链表的尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head);
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断是否回文
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    // 还原链表并返回结果
    firstHalfEnd.next = reverseList(secondHalfStart);
    return result;
}