/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

 假设环境不允许存储 64 位整数（有符号或无符号）

 */

let x1 = 123;
let x2 = -123;
let x3 = 123;
let x4 = 0;

function type1(x = 0){
    let val = 0;
    while (x !== 0){
        val = val * 10 + x % 10;
        x = parseInt(x / 10);
        if (val < Math.pow(-2, 31) || val > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return val;
}

console.log(type1(x1));
console.log(type1(x2));
console.log(type1(x3));
console.log(type1(x4));
