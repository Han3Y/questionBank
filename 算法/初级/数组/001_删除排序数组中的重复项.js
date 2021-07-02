/**
 *给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
let array1 = [1, 2];
let array2 = [...array1];

// 从最后一个开始比较
function type1(nums){
    for(let i = nums.length - 1; i > 0;){
        if(nums.indexOf(nums[i]) != i){
            nums.splice(i, 1);
            i = nums.length - 1
        }else{
            i --;
        }
    }
    console.log(nums);
    console.log(nums.length);
}

type1(array1);

// 双指针法
function type2(nums){
    let pointer1 = 0;
    let pointer2 = 1;
    for(;pointer2 < nums.length; pointer2 ++ ){
        if(nums[pointer1] == nums[pointer2]){
            pointer2++;
        }else{
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }
    nums.splice(pointer1 + 1);
    console.log(nums);
    console.log(nums.length);
}
type2(array2)
