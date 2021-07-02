/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 说明:
 必须在原数组上操作，不能拷贝额外的数组。
 尽量减少操作次数。
 */

let arr = [0,1,0,3,12];
function type1(nums){
    let len = nums.length;
    for(let i = len - 1; i >= 0; i --){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0);
        }
    }
}
type1(arr);
console.log(arr);

/**
 * 双指针
 */
let arr2 = [0,1,0,3,12];
function type2(nums){
    let p1 = 0;
    let p2 = 0;
    for (; p2 < nums.length; p2 ++){
        if(nums[p2] === 0){
            p1 ++;
        }else if(p1 !== 0){
            nums[p2 - p1] = nums[p2];
            nums[p2] = 0;
        }
    }
}
type2(arr2);
console.log(arr2);


let arr3 = [0,1,0,3,12,0, 6, 7];
function type3(nums){
    let p1;
    for(let p2 = 0; p2 < nums.length; p2 ++){
        if(nums[p2] === 0){
            if(p1 === undefined){
                p1 = p2;
            }
        }else if(p1 !== undefined){
            nums[p1] =  nums[p2];
            nums[p2] = 0;
            p1 ++;
        }
    }
}
type3(arr3);
console.log(arr3);
