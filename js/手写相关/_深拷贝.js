function deepCopy(obj, hash = new WeakMap()) {
    if(typeof obj === 'symbol'){
        return Symbol.for(obj.description);
    }else if(obj instanceof RegExp ){
        return new RegExp(obj);
    }else if(obj instanceof Date){
        return new Date(obj);
    }else if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    // 防止循环引用死循环
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let newObj = new obj.constructor;
    hash.set(obj, newObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepCopy(obj[key], hash);
        }
    }
    // 考虑symbol
    let symbols = Object.getOwnPropertySymbols(obj)
    for(let i = 0 ;i < symbols.length; i ++){
        if(obj.hasOwnProperty(symbols[i])){
            newObj[symbols[i]] = deepCopy(obj[symbols[i]], hash);
        }
    }
    return newObj;
}
