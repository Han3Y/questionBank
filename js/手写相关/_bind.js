/**
 * 1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可
 能出现使用call 等方式调用的情况。
  2.保存当前函数的引用，获取其余传入参数值。
  3.创建一个函数返回
  4.函数内部使用apply 来绑定函数调用，需要判断函数作为构造函数的
 情况，这个时候需要传入当前函数的this 给apply 调用，其余情况都传
 入指定的上下文对象。
 * @param context
 * @returns {function(): *}
 */
Function.prototype.myBind = function (context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    let args = [...arguments].slice(1),
        that = this,
        Fn = function () {
            return that.apply(this instanceof Fn ? this : context, args.concat([...arguments]));
        };
    Fn.prototype = Object.create(this.prototype);
    return Fn;
};

function test() {
    console.log('test: func:' + this.name);
}

let testFn = test.myBind();
// let obj = {
//     name: 'obj',
//     testFn
// };
// obj.testFn()

new testFn()

var length = 10;
function fn (){
    console.log(this.length);
}
let arr = [fn, 1];
fn();
// 会隐式绑定
arr[0]();

