一般有两种模式：
##hash 模式：
    后面的hash 值的变化，浏览器既不会向服务器发出请求，浏览器也不会刷
    新，每次hash 值的变化会触发hashchange 事件。
##history 模式：
    利用了HTML5 中新增的pushState() 和replaceState() 方法。这两个
    方法应用于浏览器的历史记录栈，在当前已有的back、forward、go 的基础之上，它们
    提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的URL，但
    浏览器不会立即向后端发送请求。