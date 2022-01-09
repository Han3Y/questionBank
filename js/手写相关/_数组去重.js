// 有序数组用快慢指针
function unique(arr) {
    arr.sort((a, b) => a - b);
    var slow = 1,
        fast = 1;
    while (fast < arr.length) {
        if (arr[fast] != arr[fast - 1]) {
            arr[slow ++] = arr[fast];
        }
        ++ fast;
    }
    arr.length = slow;
    return arr;
}
