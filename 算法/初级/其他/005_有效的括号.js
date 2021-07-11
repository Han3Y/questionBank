/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合
 */
function f1(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);
    const stk = [];
    for (let ch of s){
        if (pairs.has(ch)) {
            stk.push(pairs.get(ch));
        }
        else if(!stk.length || stk.pop() !== ch){
            return false;
        }
    };
    return !stk.length;
}

console.log(f1('()'));