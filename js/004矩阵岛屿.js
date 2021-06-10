/**
 寻找岛屿 给⼀个0 1矩阵，求不同的岛屿的个数。 0代表海，1代表岛，如果两个1相邻，那么这两个1属于同⼀个岛。我们只考虑上下左右为相 邻。
 **/
let grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

let grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]


let traversalFunc = function (grid){
  let count = 0;
  for(let i = 0; i < grid.length; i ++){
    for (let  j = 0; j < grid[i].length; j ++){
      if(grid[i][j] == '1'){
        dfs(grid, i, j);
        count ++;
      }
    }
  }
  return count;
}

let dfs = function (grid, r, c){
  if(!grid[r] || !grid[r][c] || grid[r][c] != 1){
    return ;
  }

  grid[r][c] = '2';
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
}

console.log(traversalFunc(grid1));
console.log(traversalFunc(grid2));
