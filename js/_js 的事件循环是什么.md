因为js 是单线程运行的，在代码执行的时候，通过将不同函数的执行上下文压入执行栈中来
保证代码的有序执行。在执行同步代码的时候，如果遇到了异步事件，js 引擎并不会一直等待
其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当异步事件执行完毕后，
再将异步事件对应的回调加入到与当前执行栈中不同的另一个任务队列中等待执行。任务队列可
以分为宏任务对列和微任务对列，当当前执行栈中的事件执行完毕后，js 引擎首先会判断微任
务对列中是否有任务可以执行，如果有就将微任务队首的事件压入栈中执行。当微任务对列中的
任务都执行完成后再去判断宏任务对列中的任务。

微任务包括了promise 的回调、node 中的process.nextTick 、对Dom 变化监听的
MutationObserver。
宏任务包括了script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定
时事件，还有如I/O 操作、UI 渲染等。

2.3 为什么要引入微任务的概念，只有宏任务可以吗？

宏任务 遵循先进先出的原则，当需要有优先级高的任务需要插入时，只有宏任务无法做到，在宏任务中插入微任务队列可以做到

宏任务的执行顺序：

1. timers定时器：执行已经安排的setTimeout 和 setInterval的回调函数
2. pending callback 待定回调：执行延迟到下一个循环迭代的I/O回调
3. idle, prepare: 仅系统内部使用
4. poll: 检索新的I/O事件，执行与I/O相关的回调
5. check: 执行setImmediate()回调函数
6. close callback: callbacks: socket.on('close', () => {})

微任务和宏任务在node的执行顺序

Node V10 及以前：
1. 执行玩一个阶段中的所有任务
2. 执行nextTick队列里的内容
3. 执行完微任务队列的内容

Node V10 以后：
和浏览器行为统一了