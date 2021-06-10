/**
 * 编程题：给定m个不同字符 [a, b, c, d]，以及⻓度为n的字符串tbcacbdata，在其中找到⼀个 ⻓度为m的连续⼦串，使得这个⼦串刚好由这m个字符组成，顺序⽆所谓，返回任意满⾜条件的 ⼀个⼦串的起始位置，未找到返回-1。⽐如上⾯这个例⼦，acbd，
 *
 * 3怎样保证tcp传输的可靠性，以及拥塞控制的过程 数据库中的索引，⽤b+树做索引有什么好处
 **/


const array = ['a', 'b' , 'c', 'd'];
let data = [];
let func = function (arrayData){
  for(let i = 0; i < arrayData.length; i ++){
    data.push(arrayData[i]);
    const copy = arrayData.slice();
    copy.splice(i, 1);
    if(!copy.length){ // 一次排完
      console.log(data);
    }else{
      func(copy);
    }
    data.pop();
  }
}
func(array)
