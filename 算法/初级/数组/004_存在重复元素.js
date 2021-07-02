/**
 * 给定一个整数数组，判断是否存在重复元素。

 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 *
 */

let array1 = [1, 2, 3, 1];
let array2 = [1, 2, 3, 4];

/**
 * 转换为set
 * @param nums
 * @returns {boolean}
 */
function type1(nums){
    let setItems = new Set(nums);
    return nums.length != setItems.size;
}

console.log(type1(array1));
console.log(type1(array2));

/**
 * 用indexOf 和 lastIndexOf
 * @param nums
 */
function type2(nums){
    for(let i = 0; i < nums.length ; i++){
        if(nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])){
            return true;
        }
    }
    return false;
}
console.log(type2(array1));
console.log(type2(array2));

/**
 * 先排序，再两两比较
 */
function type3(nums){
    nums.sort();
    for(let i = 0; i < nums.length - 1; i ++){
        if(nums[i] == nums[i + 1]){
            return true;
        }
    }
    return false;
}
console.log(type3(array1));
console.log(type3(array2));
