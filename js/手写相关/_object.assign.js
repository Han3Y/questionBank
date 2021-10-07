Object.myAssign = function (target, ...source){
    if(target == null){
        throw new Error('')
    }
    let res = Object.create(target);
    source.forEach(item => {
       if(item !== null){
           for(let key in item){
               if(item.hasOwnProperty(key)){
                   res[key] = item[key];
               }
           }
       }
    });
    return res;
}