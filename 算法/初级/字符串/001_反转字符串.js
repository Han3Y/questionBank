/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

 */

let arr1 = ["h","e","l","l","o"];
let arr2 = ["H","a","n","s","a","h"];

function type1(s){
    let temp;
    for (let i = 0; i < s.length/2; i ++){
        temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
}

type1(arr1);
type1(arr2);

console.log(arr1);
console.log(arr2);
