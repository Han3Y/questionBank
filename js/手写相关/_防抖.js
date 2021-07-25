// 函数防抖： 在事件被触发n 秒后再执行回调，如果在这n 秒内事件又被触发，则重新计时。
function debounce(fn, wait) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
// 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
// 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}