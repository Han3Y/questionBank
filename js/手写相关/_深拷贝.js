function deepCopy(obj, hash = new WeakMap()) {
    if(typeof obj === 'symbol'){
        return Symbol.for(data.description);
    }else if(obj instanceof RegExp ){
        return new RegExp(obj);
    }else if(obj instanceof Date){
        return new Date(obj);
    }else if(typeof data !== 'object' || obj === null){
        return data;
    }
    // 防止循环引用死循环
    if(hash.has(obj)){
        return hash.get(obj);
    }
    if(data instanceof Array){
        return data.map(item => deepCopy(item, hash));
    }else{
        let newObj = {};
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepCopy(obj[key], hash);
            }
        }
        // 考虑symbol
        let symbols = Object.getOwnPropertySymbols(obj)
        for(let i = 0 ;i < symbols.length; i ++){
            if(obj.hasOwnProperty(symbols[i])){
                newObj[symbols[i]] = deepCopy(obj[symbols[i], hash]);
            }
        }
        return newObj;
    }
}