function deepCopy(obj) {
    if(typeof obj === 'symbol'){
        return Symbol.for(data.description);
    }else if(typeof data !== 'object'){
        return data;
    }else if(data instanceof Array){
        return data.map(item => deepCopy(item));
    }else{
        let newObj = {};
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key] = deepCopy(obj[key]);
            }
        }
        return newObj;
    }
}