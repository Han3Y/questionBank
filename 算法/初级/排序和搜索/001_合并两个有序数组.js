/**
 *给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 
 */

/**
 * 双指针
 * @type {number[]}
 */
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
function f1(nums1, m, nums2, n) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n){
        if(nums1[i] <= nums2[j]){
            arr.push(nums1[i]);
            i ++;
        }else{
            arr.push(nums2[j]);
            j ++;
        }
    }
    while (i < m){
        arr.push(nums1[i]);
        i ++;
    }
    while (j < n){
        arr.push(nums2[j]);
        j ++;
    }
    for(let k = 0; k < m + n; k++){
        nums1[k] = arr[k];
    }
}

f1(nums1, m, nums2, n)
console.log(nums1);

/**
 * 合并后再排序
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
function f2(nums1, m, nums2, n){
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
}

/**
 * 逆双指针-- 从两边最后一个开始比较，大的放到nums1的最后
 */
function f3(nums1, m, nums2, n){
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
}
