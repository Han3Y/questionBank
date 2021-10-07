/**
 *  1.先获取实例的原型
 *  2.将原型与被比较对象判断
 *  3.将原型赋值为原型的原型，继续比对，直至相等或者原型为null
 * @param left 被检测对象
 * @param right
 */
function myInstance(left, right) {
    let proto = Object.getPrototypeOf(left),
        protoType = right.prototype;
    while(true){
        if (!proto){
            return false;
        }
        if(proto === protoType){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}