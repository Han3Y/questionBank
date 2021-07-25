// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
function throttle(fn, delay) {
    var preTime = Date.now();
    return function () {
        var context = this,
            args = arguments,
            nowTime = Date.now();
// 如果两次时间间隔超过了指定时间，则执行函数。
        if (nowTime - preTime >= delay) {
            preTime = Date.now();
            return fn.apply(context, args);
        }
    };
}

// 第一次不执行
function throttle2(fn, delay) {
    let timer = null;
    let startTime = Date.now();

    return function () {
        let curTime = Date.now();
        let remainning = delay - (curTime - startTime);
        let that = this;
        let args = arguments;
        clearTimeout(timer);
        if(remainning <= 0){
            fn.apply(that, args);
            startTime = Date.now();
        }else{
            timer = setTimeout(function () {
                fn.apply(that, args);
                startTime = Date.now();
            }, remainning);
        }
    }
}