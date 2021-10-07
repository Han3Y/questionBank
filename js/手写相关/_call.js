/**
 * 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可
 能出现使用call 等方式调用的情况。
  2.判断传入上下文对象是否存在，如果不存在，则设置为window 。
  3.处理传入的参数，截取第一个参数后的所有参数。
  4.将函数作为上下文对象的一个属性。
  5.使用上下文对象来调用这个方法，并保存返回结果。
  6.删除刚才新增的属性。
  7.返回结果。
 * @param context
 * @returns {*}
 */
Function.prototype.myCall = function (context) {
  if(typeof this !== 'function'){
      throw 'error';
  }
  context = context || window;
  let args = [...arguments].slice(1),
      result = null;
  let func = Symbol('myCall');
  context[func] = this;
  result = context[func](...args);
  delete context[func];
  return result;
};