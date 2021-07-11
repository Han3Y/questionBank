/**
 * 统计所有小于非负整数 n 的质数的数量。
 */

/**
 * 枚举
 * @param n
 * @returns {number}
 */
function f1(n) {
    let sum = 0;
    if(n === 0 || n === 1){
        return 0;
    }
    for(let i = 2; i < n; i++){
        if(checkNum(i)){
            sum ++;
        }
    }
    function checkNum(m) {
        for(let i = 2; i < m; i++){
            if(m % i === 0){
                return false;
            }
        }
        return true;
    }
    return sum;
}

console.log(f1(10));

/**
 * 如果 xx 是质数，那么大于 xx 的 xx 的倍数 2x,3x,\ldots2x,3x,… 一定不是质数，因此我们可以从这里入手
 * 对于一个质数 xx，如果按上文说的我们从 2x2x 开始标记其实是冗余的，应该直接从 x\cdot xx⋅x 开始标记，因为 2x,3x,\ldots2x,3x,… 这些数一定在 xx 之前就被其他数的倍数标记过了，例如 22 的所有倍数，33 的所有倍数等

 * @param n
 * @returns {number}
 */
function f2(n) {
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ans += 1;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }
    return ans;
}

console.log(f2(10));