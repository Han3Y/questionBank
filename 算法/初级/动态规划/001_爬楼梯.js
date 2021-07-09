/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 注意：给定 n 是一个正整数。
 */

/**
 * 递归 - 容易递归次数过多
 * @param n
 */
function f1(n) {
    if(n < 3){
        return n;
    }
    return f1(n - 1) + f1(n - 2);
}

console.log(f1(3));
console.log(f1(6));


/**
 * 迭代
 * @param n
 */
function f2(n){
    if(n < 3){
        return n;
    }
    let sum = 0;
    let one = 1;
    let two = 2;
    for (let i = 3; i <= n; i ++){
        sum = one + two;
        one = two;
        two = sum;
    }
    return sum;
}
console.log(f2(3));
console.log(f2(6));
