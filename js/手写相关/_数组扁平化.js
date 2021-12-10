let arr = [1, 2, [3, 4, [5, 6]]];

// 用数组自带方法
console.log(arr.flat(Infinity))

// 用reduce
function fn(arr, deps){
    let deep = deps === undefined ? Infinity : deps;
    if(deep <= 0){
        return arr;
    }
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? fn(cur, --deep) : cur);
    }, [])
}

console.log(fn(arr, 2));
