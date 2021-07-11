/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 在杨辉三角中，每个数是它左上方和右上方的数的和。
 */

// n[r][i] = n[r - 1][i - 1] + n[r - 1][i]
function f1(numRows) {
 let len = numRows;
 let data = [];
 for(let i = 1; i <= len; i ++){
     data[i - 1] = [];
     if(i === 1){
         data[i - 1].push(1);
     }else{
         for(let j = 0; j < i; j ++){
             console.log(data[i - 2][j - 1]);
             console.log(data[i - 2][j]);
             console.log('----------------')
             data[i - 1][j] = (data[i - 2][j - 1]?data[i - 2][j - 1]:0) + (data[i - 2][j]?data[i - 2][j]:0);
         }
     }
 }
 return data;
}

console.log(f1(5));