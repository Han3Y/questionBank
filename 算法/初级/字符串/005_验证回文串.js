/**
 * 验证回文串
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

 说明：本题中，我们将空字符串定义为有效的回文串。
 */

let s1 = 'A man, a plan, a canal: Panama';
let s2 = 'race a car';

/**
 * 复制一个只有数组和字母的字符串，判断反转后是否相等
 * @param s1
 * @param s2
 */
function type1(s) {
    let regx = /[^\w\u4e00-\u9fa5]/g;
    let news = s.replace(regx, "").toLowerCase();
    return(news === [...news].reverse().join(''));
}

console.log(type1(s1));
console.log(type1(s2));

/**
 * 前后各一个指针向中间靠拢，忽略中间的不是字母和数字的字符
 * @param s1
 * @param s2
 */
function type2(s) {
    let regx = /^[A-Za-z0-9]*$/;
    let p1 = 0;
    let p2 = s.length - 1;
    while (p1 < p2){
        let res1 = regx.test(s[p1]);
        let res2 = regx.test(s[p2]);
        if(res1 && res2){
            if(s[p1].toLowerCase() !== s[p2].toLowerCase()){
                return false;
            }
            p1 ++;
            p2 --;
        }else{
            if(!regx.test(s[p1])){
                p1 ++;
            }
            if(!regx.test(s[p2])){
                p2 --;
            }
        }
    }
    return true;
}



console.log(type2(s1));
console.log(type2(s2));