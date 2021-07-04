/**
 * 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

 函数 myAtoi(string s) 的算法如下：

 读入字符串并丢弃无用的前导空格
 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
 返回整数作为最终结果。
 注意：

 本题中的空白字符只包括空格字符 ' ' 。
 除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。
 *
 */


let s1 = '42';
let s2 = '   -42';
let s3 = '4193 with words';
let s4 = 'words and 987';
let s5 = '-91283472332';


/**
 * 采用状态机的写法，程序处于某个状态时
 *
            ' '	    +/-	    number	    other
 start	    start	signed	in_number	end
 signed	    end	    end	    in_number	end
 in_number	end	    end	    in_number	end
 end	    end	    end	    end	        end

 * @param s
 */
function myAtoi(s){
    let status = 'start';
    let statusMap = new Map();
    let data = 0;
    let sign = 1; // 符号
    statusMap.set("start", ['start', 'signed', 'in_number', 'end']);
    statusMap.set("signed", ['end', 'end', 'in_number', 'end']);
    statusMap.set("in_number", ['end', 'end', 'in_number', 'end']);
    statusMap.set("end", ['end', 'end', 'end', 'end']);


    function getc(c) {
        status = statusMap.get(status)[getCol(c)];
        if('in_number' === status){
            data = data * 10 + Number(c);
            data = sign === 1 ? (Math.min(data, Number.MAX_VALUE)) : (Math.max(data, -Number.MAX_VALUE));
        }else if('signed' === status){
            sign = c === '+' ? 1: -1;
        }

    }

    function getCol(c) {
        if(c === ' '){
            return 0;
        }else if(c === '+' || c === '-'){
            return 1;
        }else if(!Number.isNaN(c)){
            return 2;
        }
        return 3;
    }

    for(let i = 0; i < s.length; i ++){
        getc(s[i]);
    }
    return Number.isNaN(data) ? 0 : data * sign;
}

console.log(myAtoi(s1));
console.log(myAtoi(s2));
console.log(myAtoi(s3));
console.log(myAtoi(s4));
