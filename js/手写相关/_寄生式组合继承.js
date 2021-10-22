/**
 * 1.在子类中执行父类的构造函数
 * 2.将子类的原型指向父类的原型的实例
 * 3.将子类原型的构造函数指回子类
 *
 */

function SuperType() {

}

function SubType() {
    SuperType.call(this);
}

SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType;


