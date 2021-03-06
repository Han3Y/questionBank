/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。

 1. 如果 n 是3的倍数，输出“Fizz”；

 2. 如果 n 是5的倍数，输出“Buzz”；

 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

 */
function f1(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            arr[i - 1] = 'FizzBuzz';
        }else if(i % 3 === 0){
            arr[i - 1] = 'Fizz';
        }else if(i % 5 === 0){
            arr[i - 1] = 'Buzz';
        }else{
            arr[i - 1] = i;
        }
    }
    return arr;
}

console.log(f1(15));