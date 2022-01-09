/**
 * （1）首先创建了一个新的空对象
 *（2）设置原型，将对象的原型设置为函数的prototype
 对象
 *（3）让函数的this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 *（4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回
 这个引用类型的对象。
 */
function myNew() {
    let newObj = null,
        constructor = Array.prototype.shift.call(arguments),
        result = null;
    if(typeof constructor !== 'function'){
        throw 'error';
    }
    newObj = Object.create(constructor.prototype);
    result = constructor.apply(newObj, arguments);
    if(result && (typeof result === 'object' || typeof result === 'function')){
        return result;
    }else{
        return newObj;
    }
}

function Player(name){
    this.name = name;
    return function test(){

    }
}
console.log(typeof Player)
console.log(typeof {})
console.log(Object.prototype)

let p1 = new Player('hjc');
console.log(p1);
