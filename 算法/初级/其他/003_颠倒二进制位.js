/**
 * 颠倒给定的 32 位无符号整数的二进制位。

  

 提示：

 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。
  

 进阶:
 如果多次调用这个函数，你将如何优化你的算法？
 
 */

/**
 * 将 nn 视作一个长为 3232 的二进制串，从低位往高位枚举 nn 的每一位，将其倒序添加到翻转结果 \textit{rev}rev 中。

 代码实现中，每枚举一位就将 nn 右移一位，这样当前 nn 的最低位就是我们要枚举的比特位。当 nn 为 00 时即可结束循环

 * @param n
 * @returns {number}
 */
function f1(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return rev >>> 0;
}