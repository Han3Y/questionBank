/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词
 *
 * 说明:
 你可以假设字符串只包含小写字母。
 进阶:
 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */


/**
 * 先排序，在比较
 * @param s1
 * @param s2
 */
let s1 = "anagram", s2 = "nagaram";
let s3 = "rat", s4 = "car";
function type1(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }
    return ([...s1].sort().join('') === [...s2].sort().join(''));
}

console.log(type1(s1, s2));
console.log(type1(s3, s4));

/**
 * 用哈希表记录
 * @param s1
 * @param s2
 */
function type2(s1, s2) {
    let table = new Array(26).fill(0);
    for(let i = 0; i < s1.length; i ++){
        table[s1.codePointAt(i) - 'a'.codePointAt(0)] ++;
    }
    for(let i = 0; i < s2.length; i ++){
        table[s2.codePointAt(i) - 'a'.codePointAt(0)] --;
        if(table[s2.codePointAt(i) - 'a'.codePointAt(0)] < 0){
            return false;
        }
    }

    return true;
}

console.log(type2(s1, s2));
console.log(type2(s3, s4));