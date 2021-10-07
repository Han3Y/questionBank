function curry(fn, ...args){
    let fnLen = fn.length;
    let argLen = args.length;
    if(fnLen <= argLen){
        return fn.call(this, ...args);
    }else{
        return function (...args2){
            return curry.call(this, fn, ...args, ...args2);
        }
    }
}

function sumFn(a,b,c){
    return a+ b + c
};
let sum = curry(sumFn);
console.log(sum(2)(3)(5))//10
console.log(sum(2,3)(5))//10