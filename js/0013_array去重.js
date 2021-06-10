/**
 * 使用set
 **/
let array = [0,1,2,3,4,5,1,2,3,6];
let data = Array.from(new Set(array));
console.log(data);
/**
 * 使用一个新数组，用indexOf 或者 includes方法
 **/
let array1 = Array.of(...array);
let data1 = [];
for(let i = 0; i < array1.length; i++){
  // if(data1.indexOf(array1[i]) == -1){
  //   data1.push(array1[i]);
  // }
  if(!data1.includes(array1[i])){
    data1.push(array1[i]);
  }
}
console.log(data1);

/**
 * filter方法去重
 */
let array2 = Array.of(...array);
let data2 = array2.filter((item, index) => {
  return array2.indexOf(item) == index;
});
console.log(data2);
/**
 * 使用一个map或对象，用key来过滤
 */
let array3 = Array.of(...array);
let data3 = [];
let dataMap = new Map();
for(let i = 0; i < array3.length; i++){
  if(!dataMap.get(array3[i])){
    data3.push(array3[i]);
    dataMap.set(array3[i], array3[i]);
  }
}
console.log(data3);
