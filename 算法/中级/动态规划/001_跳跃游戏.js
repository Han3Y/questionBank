/**
 *给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

 数组中的每个元素代表你在该位置可以跳跃的最大长度。

 判断你是否能够到达最后一个下标。
 */

let nums1 = [2,3,1,1,4];
let nums2 = [3,2,1,0,4];

/**
 * 遍历所有可能性，时间复杂度过高
 * @param nums
 * @returns {boolean}
 */
function f1(nums) {
    let final = nums.length - 1;
    let steps = [];
    steps.push({
        index: 0,
        value: nums[0]
    });
    while (steps.length){
        let next = steps.shift();
        if(next.index + next.value >= final){
            return true;
        }else if(next.value > 0){
            for(let i = 1; i <= next.value; i ++){
                steps.push({
                    index: next.index + i,
                    value: nums[next.index + i]
                });
            }
        }
    }
    return false;
}

console.log(f1(nums1));
console.log(f1(nums2));

/**
 * 贪心算法
 * @param nums
 */
function f2(nums) {
    let final = nums.length - 1;
    let max = 0;
    for(let i = 0; i < nums.length; i ++){
        if(i <= max){
            max = Math.max(i + nums[i], max);
            if(max >= final){
                return true;
            }
        }
    }
    return false;
}