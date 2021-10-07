let arr = [1, 2, [3, 4, [5, 6]]];

// 用数组自带方法
console.log(arr.flat(Infinity))

// 用reduce
function fn(arr){
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
    }, [])
}

console.log(fn(arr));