/**
 *实现 strStr() 函数。

 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

 *说明：

 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

 */

let s1 = 'hello', s2 = 'll';
let s3 = 'aaaaaa', s4 = 'bba';
let s5 = '', s6 = '';
let s7 = 'a', s8 = 'a';
let s9 = 'aaa', s10 = 'aaa';
let s11 = 'mississippi', s12 = 'issip';
function type1(haystack, needle) {
    if(needle === ''){
        return 0;
    }
    let p1 = 0;
    let p2 = 0;
    let start = -1;
    while (p1 < haystack.length && p2 < needle.length) {
        if(haystack[p1] === needle[p2]){
            if(p2 === 0){ // 如果第一个相等了则记录一下当前的开始索引
                start = p1;
            }
            if(p2 === needle.length - 1){
                return start;
            }
            p1 ++;
            p2 ++;
        }else{
            if(-1 !== start){ // 如果第一个之后的字符不相等，则从上一次的开始索引后一位重新开始，开始索引需要充值未空
                p1 = start + 1;
                start = -1;
            }else{
                p1 ++;
            }
            p2 = 0;
        }
    }
    return -1;
}

console.log(type1(s1, s2));
console.log(type1(s3, s4));
console.log(type1(s5, s6));
console.log(type1(s7, s8));
console.log(type1(s9, s10));
console.log(type1(s11, s12));

/**
 *
 * @param s1
 * @param s2
 */
function type2(s1, s2) {
    if( s2 === ''){
        return 0;
    }
    for(let i = 0 ; i < s1.length; i ++){
        for(let j = 0; j < s2.length; j ++){
            if(s2[j] !== s1[j + i]){
                break;
            }
            if(j === s2.length - 1){
                return i;
            }
        }
    }
    return - 1;
}

console.log(type2('', 'a'));