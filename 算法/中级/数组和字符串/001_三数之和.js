/**
 *给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

 注意：答案中不可以包含重复的三元组。

 */


/**
 *
 *
 */

let nums = [-1,0,1,2,-1,-4];
let nums2 = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1];
let nums3 = [1,2,-2,-1];
/**
 * 暴力破解，空间复杂度和时间复杂度都太高
 * @param nums
 * @returns {Array}
 */
function f1(nums) {
    let result = [];
    let resultMap = {};
    for(let i = 0 ; i < nums.length; i ++){
        let data = [];
        data.push(nums[i]);
        for(let j = i + 1; j < nums.length; j ++){
            data.push(nums[j]);
            for(let k = j + 1; k < nums.length; k ++){
                if(data[0] + data[1] + nums[k] === 0){
                    let item = [...data, nums[k]];
                    let itemStr = item.sort().join('');
                    if(!resultMap[itemStr]){
                        resultMap[itemStr] = true;
                        result.push(item);
                    }
                }
            }
            data.pop();
        }
        data.pop();
    }
    return result;
}

/**
 * 1 排序
 * 2 双循环，当前遍历项与上一个相同时，跳过当次循环
 * 3 双指针，内循环遍历时，根据排序值比较大小更新最右侧指针
 * @param nums
 * @returns {Array}
 */
function f2(nums){
    let result = [];
    nums = nums.sort(function (a, b) {
       return a - b;
    });
    let len = nums.length;
    for(let first = 0; first < len; first ++){
        if(first > 0 && nums[first] === nums[first - 1]){
            continue;
        }
        let third = len - 1;
        let target = -nums[first];
        for(let second = first + 1; second < third; second ++){
            if(second > first + 1 && nums[second] === nums[second - 1]){
                continue;
            }
            while (second < third && nums[second] + nums[third] > target){
                third --;
            }
            if(second === third){
                break;
            }
            if(nums[second] + nums[third] === target){
                result.push([nums[first], nums[second], nums[third]]);
            }
        }
    }
    return result;
}

console.log(f2(nums2).length);

