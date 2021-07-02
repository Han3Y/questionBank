/**
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 说明：

 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 我们可以不考虑输出结果的顺序。
 进阶：

 如果给定的数组已经排好序呢？你将如何优化你的算法？
 如果nums1的大小比nums2小很多，哪种方法更优？
 如果nums2的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2y0c2/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * indexOf, lastIndexOf
 * @type {number[]}
 */
let nums1 = [4,9,5], nums2 = [9,4,9,8,4];
function type1(nums1, nums2){
    let array = [];
    let items = (nums1.length > nums2.length) ? nums2 : nums1;
    let otherItems = (nums1.length > nums2.length) ? nums1 : nums2;
    let len = Math.min(nums1.length, nums2.length);
    for(let i = 0; i < len; i ++){
        if(items.indexOf(items[i]) != -1 && otherItems.indexOf(items[i]) != -1){
            array.push(items[i]);
        }
    }
    return array;
}

console.log(type1(nums1, nums2));


/**
 * 先排序 再双指针
 * @param nums1
 * @param nums2
 */
function type2(nums1, nums2){
    let arr = [];
    nums1.sort();
    nums2.sort();
    let p1 = 0;
    let p2 = 0;
    while( p1 < nums1.length && p2 < nums2.length){
        if(nums1[p1] == nums2[p2]){
            arr.push(nums1[p1]);
            p1 ++;
        }else{
            if(p1 < p2){
                p1 ++;
            }else{
                p2 ++;
            }
        }
    }
    return arr;
}

console.log(type2(nums1, nums2));


/**
 * map
 * @param nums1
 * @param nums2
 */
function type3(nums1, nums2){
    let mapData = new Map();
    nums1.forEach((item, index) => {
        mapData.set(item, 1);
    });
    nums2.forEach((item, index) => {
        if(mapData.get(item)){
            mapData.set(item, 2);
        }else{
            mapData.set(item, 0);
        }
    });
    let arr = [];
    mapData.forEach((value, key) => {
        if(value == 2){
            arr.push(key);
        }
    });
    return arr;
}
console.log(type3(nums1, nums2));

