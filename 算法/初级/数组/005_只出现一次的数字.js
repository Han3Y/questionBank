/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

 说明：

 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x21ib6/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * 排序，然后判断每一个是否跟相邻两个都不等
 * @type {number[]}
 */
let array = [1, 1, 2, 3, 3, 4, 4];
function type1(nums){
    nums.sort();
    for(let i = 0; i < nums.length - 2; i ++){
        if(nums[i] != nums [i - 1] && nums[i] != nums[i + 1]){
            return nums[i];
        }
    }
}

console.log(type1(array));

/**
 * indexOf 和 lastIndexOf
 */
function type2(nums){
    for(let i = 0; i < nums.length - 1; i ++){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
            return nums[i];
        }
    }
}

console.log(type2(array));

/**
 * 位运算 异或
 * @param nums
 */
function type3(nums){
    return nums.reduce((pre, cur) => {
        return pre ^ cur;
    }, 0);
}

console.log(type3(array));
