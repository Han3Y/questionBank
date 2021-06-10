// 编程题：每隔⼀秒输出⼀个树，⽤setTimeout来实现
function output(numbers){
  for(let i = 0; i < numbers.length; i ++){
    setTimeout( () => {
      console.log(numbers[i]);
    }, 1000 * i);
  }
}
// output([1,2,3,4,5,6,7,8,9,10]);

function output2(numbers){
  for(var i = 0; i < numbers.length; i ++){
    (function (i){
      setTimeout(() => {
        console.log(i);
      }, 1000 * i);
    })(i)
  }
}
output2([1,2,3,4,5,6,7,8,9,10]);
