/**
 *一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

 问总共有多少条不同的路径？
 */
function f2(m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < m; i ++){
        f[i][0] = 1;
    }
    for(let i = 0; i < n; i ++){
        f[0][i] = 1;
    }
    for(let i = 1; i < m; i ++){
        for(let j = 1; j < n; j ++){
            f[i][j] = f[i - 1][j] + f[i][j - 1];
        }
    }
    return f[m - 1][n - 1];
}

console.log(f2(7, 3));