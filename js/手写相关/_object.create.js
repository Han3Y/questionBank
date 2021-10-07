Object.myCreate = function (proto){
    if(typeof proto !== 'object' && typeof proto !== 'function'){
        throw new TypeError('');
    }
    function fn(){

    }
    fn.prototype = proto;
    return new fn();
}