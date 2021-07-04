/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

 如果不存在公共前缀，返回空字符串 ""。
 */

/**
 * 横向比较
 * @param arr
 * @returns {*}
 */
function f1(arr) {
    let s = arr[0];
    for(let i = 1; i < arr.length; i ++){
        s = getStart(s, arr[i]);
        if(s === ''){
            return '';
        }
    }
    return s;

    function getStart(s1, s2) {
        let len = Math.min(s1.length, s2.length);
        let p = 0;
        for(let i = 0; i < len; i ++){
            if(s1[i] === s2[i]){
                p ++;
            }else{
                break;
            }
        }
        return s1.substring(0, p);
    }
}

console.log(f1(["cir", "car"]));

/**
 * 纵向比较
 * @param arr
 */
function f2(arr) {
    let p = 0;
    let val = '';
    let s = arr[0][0];
    while (p < arr[0].length){
        for(let i = 0; i < arr.length; i ++){
            if(s !== arr[i][p]){
                return val.substring(0, p);
            }else{
                if(i === arr.length - 1){
                    val = val + arr[i][p];
                    p ++;
                    s = arr[0][p];
                }
            }
        }
    }
    return val.substring(0, p);
}

console.log(f2(["flower","flow","flight"]));