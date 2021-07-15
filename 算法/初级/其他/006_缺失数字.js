/**
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

 进阶：

 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?

 */
let nums = [9,6,4,2,3,5,7,0,1];
let nums2 = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14];

/**
 * 用额外数组或哈斯表记录
 * @param nums
 * @returns {number}
 */
function f1(nums) {
    let len = nums.length;
    let data = new Array(len + 1).fill(false);
    for(let i = 0; i < len ;i ++){
        data[nums[i]] = true;
    }
    for(let i = 0; i < data.length;i ++){
        if(data[i] === false){
            return i;
        }
    }
}

console.log(f1(nums));

/**
 * 先排序
 * @param nums
 * @returns {number}
 */
function f2(nums){
    let data = [...nums].sort(function (item1, item2){
        return item1 - item2;
    });
    for(let i = 0; i < data.length; i ++){
        if(data[i] !== i){
            return i;
        }
    }
    return data.length;
}

console.log(f2(nums2));

/**
 * 先求总和 再减去所有的数
 * @param nums
 * @returns {number}
 */
function f3(nums){
    let len = nums.length;
    let expectSum = (len + 1) * len / 2;
    for(let i = 0 ; i < len; i ++){
        expectSum = expectSum - nums[i];
    }
    return expectSum;
}

/**
 * 异或操作，由于异或运算（XOR）满足结合律，并且对一个数进行两次完全相同的异或运算会得到原来的数，因此我们可以通过异或运算找到缺失的数字。
 * @param nums
 * @returns {number}
 */
function f4(nums){
    let data = nums.length;
    for(let i = 0; i < nums.length; i ++){
        data = data ^ i ^ nums[i];
    }
    return data;
}
