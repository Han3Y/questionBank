/**
 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可
 能出现使用call 等方式调用的情况。
  2.判断传入上下文对象是否存在，如果不存在，则设置为window 。
  3.将函数作为上下文对象的一个属性。
  4.判断参数值是否传入
  4.使用上下文对象来调用这个方法，并保存返回结果。
  5.删除刚才新增的属性
  6.返回结果
 * @param context
 * @returns {*}
 */
Function.prototype.myApply = function (context) {
    if(typeof this !== 'function'){
        throw 'error';
    }
    context = context || window;
    let args = arguments[1],
        result = null;
    let func = Symbol('myApply');
    context[func] = this;
    if(args && !(args instanceof Array)){
        throw 'error'
    }
    if(args){
        result = context[func](...args);
    }else {
        result = context[func]();
    }
    delete context[func];
    return result;
};