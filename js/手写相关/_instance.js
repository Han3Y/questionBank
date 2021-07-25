/**
 *
 * @param left 被检测对象
 * @param right
 */
function myInstance(left, right) {
    let proto = Object.getPrototypeOf(left),
        protoType = right.protoType;
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