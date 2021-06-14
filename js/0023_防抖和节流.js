// 时间戳写法，第一次立即执行
function throttle(fn, interval) {
    let last = 0;
    return function () {
        let now = Date.now();
        if(now - last >= interval){
            last = now;
            fn.apply(this, arguments);
        }
    }
}

function handle() {
    console.log(Math.random());
}

const throttleHandle = throttle(handle, 1000);
throttleHandle();
throttleHandle();

// 第一次立即执行
function throttle2(fn, interval) {
    let timer = null;
    return function () {
        let that = this;
        let args = arguments;
        if(!timer){
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(that, args);
                timer = null;
            }, 1000);
        }
    }
}

// 结合
function throttle3(fn, delay) {
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
