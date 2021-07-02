/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 进阶：

 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 */

let array1 = [1,2,3,4,5,6]

function type1(nums, k){
    let i = k % nums.length;
    nums = nums.splice(nums.length - i).concat(nums);
    console.log(nums);
}

type1(array1, 3);

let array2 = [1,2,3,4,5,6];
function type2(nums, k){
    let i = k % nums.length;
    for(let j = 0; j < k ; j++){
        nums.unshift(nums.pop());
    }
    console.log(nums);
}
type2(array2, 3);
