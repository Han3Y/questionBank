/**
 *给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 进阶：

 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 你能想出一个仅使用常量空间的解决方案吗？
 
 */

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
/**
 *
 * @param matrix
 */
function f1(matrix) {
    let outLen = matrix.length;
    let innerLen = matrix[0].length;
    for(let i = 0; i < outLen; i ++){
        for(let j = 0; j < innerLen; j ++){
            if(matrix[i][j] === 0){
                for(let k = 0; k < innerLen; k ++){
                    matrix[i][k] = 2;
                }
                for(let k = 0; k < outLen; k ++){
                    matrix[k][j] = 2;
                }
            }
        }
    }
    for(let i = 0; i < outLen; i ++) {
        for (let j = 0; j < innerLen; j++) {
            if(matrix[i][j] === 2){
                matrix[i][j] = 0;
            }
        }
    }
}

f1(matrix);
console.log(matrix);