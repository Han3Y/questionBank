## hash 模式（ HashRouter ） ： 
    通过监听hashchange 事件， 在回调里拿到
    window.location.hash 的值。hash 就是指url 尾巴后的# 号以及后面的字符。
    hash 模式原理：
    使用window.location.hash 属性及窗口的onhashchange 事件，可以实现监听浏览器地
    址hash 值变化，执行相应的js 切换网页。hash 指的是地址中#号以及后面的字符，也称
    为散列值。
## history 模式（BrowserRouter）： 
    利用history API 实现url 地址改变，网页内容改变。
    history 模式原理：
    window.history 属性指向History 对象，它表示当前窗口的浏览历史。History 对象保
    存了当前窗口访问过的所有页面网址。