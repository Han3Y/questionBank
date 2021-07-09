/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
let nums = [-2,1,-3,4,-1,2,1,-5,4];

/**
 * 效率低
 * @param nums
 * @returns {number}
 */
function f1(nums) {
    let sumArr = new Array(nums.length);
    for(let i = 0; i < nums.length; i ++){
        sumArr[i] = [];
        sumArr[i].push(nums[i]);
        for(let j = i + 1; j < nums.length; j ++){
            sumArr[i].push(sumArr[i][sumArr[i].length - 1] + nums[j]);
        }
    }
    let data = [];
    for(let i = 0; i < sumArr.length; i ++ ){
        data.push(Math.max(...sumArr[i]));
    }
    return Math.max(...data);
}

console.log(f1(nums));

/**
 * 倒序
 * @param nums
 */
function f2(nums){
    let data = [];
    let len = nums.length;
    data[len - 1] = nums[len - 1];
    for(let i = len - 2; i >= 0; i --){
        data[i] = Math.max(nums[i] + data[i + 1], nums[i]);
    }
    console.log(data);
    return Math.max(...data);

}
console.log(f2(nums));
