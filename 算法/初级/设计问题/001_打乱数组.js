/**
 * 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

 实现 Solution class:

 Solution(int[] nums) 使用整数数组 nums 初始化对象
 int[] reset() 重设数组到它的初始状态并返回
 int[] shuffle() 返回数组随机打乱后的结果


 */
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this._nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this._nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let copyData = [...this._nums];
    for(let i = 0; i< copyData.length; i ++){
        let random = Math.floor(Math.random() * (copyData.length - i)) + i;
        let temp = copyData[i];
        copyData[i] = copyData[random];
        copyData[random] = temp;
    }
};