/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 作者：力扣 (LeetCode)
 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhhkv/
 来源：力扣（LeetCode）
 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

let matrix1 =
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
let matrix2 =
    [
        [5,1,9,11],
        [2,4,8,10],
        [13,3,6,7],
        [15,14,12,16]
    ];

/**
 * 旋转交换 matrix[i][j] 移动到matrix[j][len - 1 - i]的位置, 每4个一循环
 * @param matrix
 */
function type1(matrix){
    let len = matrix.length;
    for(let i = 0; i < Math.floor(len / 2); i ++){
        for(let j = 0; j < Math.floor((len + 1) / 2); j ++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[len - 1 - j][i];
            matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
            matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
            matrix[j][len - 1 - i] = temp;
        }
    }
}

/**
 * 先上下交换，再斜对角交换
 * @param matrix
 */
function type2(matrix){
    let len = matrix.length;
    // 上下交换
    for(let i = 0 ; i < len / 2; i ++){
            let temp = matrix[i];
            matrix[i] = matrix[len - 1 -i];
            matrix[len - 1 -i] = temp;
    }
    // 斜对角交换
    for(let k = 0 ; k < len; k ++) {
        for (let j = k + 1; j < len; j++) {
            let temp = matrix[k][j];
            matrix[k][j] = matrix[j][k];
            matrix[j][k] = temp;
        }
    }
}

type1(matrix1);
console.log(matrix1);

type1(matrix2);
console.log(matrix2);
