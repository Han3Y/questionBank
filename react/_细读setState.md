setState(updater, [callback])
其将对组件的state 的更改排入队列，并通知React 需要使用更新后的state 重新渲此组件
及其子组件。这是用于更新用户界面以及响应事件处理器和处理服务器数据的主要方式
React 会延迟调用setState，然后通过一次传递更新多个组件，不会保证state 的变更立即
生效， 如果要立即拿到this.state 的值， 可以在其回调函数callback 或者
componentDidUpdate 里取到最新的值

参数updater 有两种形式：
##第一种是函数形式
    this.setState((state, props) => stateChange)
##第二种是对象形式，会进行批量更新，如果要使用前一次的state 值，请使用函数形式
    this.setState({value:2})
##setState 中的异步与同步：
    异步是指批量更新，达到性能优化的目的，在合成事件和生命周期中都是异步的，不能立马拿到this.state 的值
    同步是指立马能拿到最新的this.state 值，在定时器setTimeout 和原生事件中是同步的，
    另外在其第二个参数回调函数callback 中和componentDidUpdate 更新生命周期函数中
    也能得到最新的this.state 值