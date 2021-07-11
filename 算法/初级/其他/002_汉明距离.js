/**
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 */
function f1(x, y) {
    let data = x ^ y;
    function f(n) {
        let ret = 0;
        for (let i = 0; i < 32; i++) {
            if ((n & (1 << i)) !== 0) {
                ret++;
            }
        }
        return ret;
    }
    return f(data);
}