/**
 * 给定一个正整数 n ，输出外观数列的第 n 项。

 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

 你可以将其视作是由递归公式定义的数字字符串序列：

 countAndSay(1) = "1"
 countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。

 */
function type1(n) {
    if(n === 1){
        return "1";
    }
    let s = type1(n - 1);
    let c = 1;
    let val = '';
    if(s == '1'){
        return '11';
    }
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i + 1]){
            c ++;
        }else{
            val = val + c + s[i];
            c = 1;
        }
    }
    return val;

}

console.log(type1(6));