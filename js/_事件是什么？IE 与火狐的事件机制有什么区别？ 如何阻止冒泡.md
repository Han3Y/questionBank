1.事件是用户操作网页时发生的交互动作，比如click/move， 事件除了
用户触发的动作外，还可以是文档加载，窗口滚动和大小调整。事件被封
装成一个event 对象，包含了该事件发生时的所有相关信息（ event 的
属性）以及可以对事件进行的操作（ event 的方法）。

2.事件处理机制：IE 支持事件冒泡、Firefox 同时支持两种事件模型，也
就是：事件冒泡和事件捕获。

## 如何阻止冒泡
3.event.stopPropagation() 或者ie 下的方法event.cancelBubble =
true;