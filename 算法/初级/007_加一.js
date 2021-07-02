/**
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

 你可以假设除了整数 0 之外，这个整数不会以零开头。

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2cv1c/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

let arr1 = [1, 2, 3];
let arr2 = [8, 9, 9];
let arr3 = [9, 9, 9];

function type1(nums){
    function add(index){
        if(nums[index] < 9){
            nums[index] ++;
        }else {
            nums[index] = 0;
            if(index == 0){
                nums.unshift(1);
            }else{
                add(index - 1);
            }

        }
    }
    add(nums.length - 1);
}
type1(arr1);
type1(arr2);
type1(arr3);

console.log(arr1);
console.log(arr2);
console.log(arr3);
