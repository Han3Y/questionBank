/**
 * 实现 trim
 * @returns {string}
 */
String.prototype.myTrim = function (){
  var str = this,
  str = str.replace(/^\s*/, ''),
  ws = /\s/,
  i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.substring(0, i + 1);
}
let testStr = " hj c  "
console.log(testStr.myTrim(), testStr.myTrim().length)

/**
 * 使用2次正则排除开头和结尾的空白符
 *
 * */
String.prototype.myTrim1 = function (){
  return this.replace(/^\s*/, '').replace(/\s*$/, '');
}
console.log(testStr.myTrim1(), testStr.myTrim1().length)
