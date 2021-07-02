/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 */
let s1 = "leetcode";
let s2 = "loveleetcode";

function type1(s){
    let dataMap = new Map();
    for(let i = 0; i < s.length; i ++){
        if(!dataMap.get(s[i])){
            dataMap.set(s[i], 1);
        }else{
            dataMap.set(s[i], dataMap.get(s[i]) + 1);
        }
    }
    for(let i = 0; i < s.length; i ++){
        if(dataMap.get(s[i]) === 1){
            return i;
        }
    }
    if(dataMap)
    return -1;
}

console.log(type1(s1));
console.log(type1(s2));
