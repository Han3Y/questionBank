/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

 你可以按任意顺序返回答案。

 进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2jrse/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */


let arr1 = [2,7,11,15], target1 = 9;
let arr2 = [3,2,4], target2 = 6;
let arr3 = [3, 3], target3 = 6;

/**
 * 暴力破解
 * @param nums
 * @param target
 * @returns {null|[]}
 */
function type1(nums, target){
    let data = [];
    for(let i = 0; i < nums.length; i ++){
        for(let j = 0; j < nums.length; j ++){
            if((nums[i] + nums[j] === target) && i !== j){
                data.push(i, j);
                return data;
            }
        }
    }
    return null;
}

console.log(type1(arr1, target1));
console.log(type1(arr2, target2));
console.log(type1(arr3, target3));

/**
 * map
 */
function type2(nums, target){
    let dataMap = new Map();
    for(let i = 0; i < nums.length; i ++){
        if(dataMap.get(target - nums[i]) != null){
            return [dataMap.get(target - nums[i]), i];
        }else{
            dataMap.set(nums[i], i);
        }
    }
    console.log(dataMap);
    return null;
}
console.log(type2(arr1, target1));
console.log(type2(arr2, target2));
console.log(type2(arr3, target3));
