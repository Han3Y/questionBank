// 题⽬需求
let middleware = []
middleware.push((next) => {
    console.log(1)
    next()
    console.log(1.1)
})
middleware.push((next) => {
    console.log(2)
    next()
    console.log(2.1)
})
middleware.push((next) => {
    console.log(3)
    next()
    console.log(3.1)
})
let fn = compose(middleware)
fn()
/*
1
2
3
3.1
2.1
1.1
*/
//实现compose函数
function compose(middlewares) {
    let copy = [...middlewares];
    let index = 0;
    async function fn() {
        if(index >= copy.length){
            return;
        }
        return await copy[index ++](fn);
    }
    return fn;
}

