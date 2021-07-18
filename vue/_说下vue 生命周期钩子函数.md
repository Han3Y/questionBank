## 阶段一：Vue 实例创建阶段
###beforeCreate
    Vue 实例在内存中刚被创建，this 变量还不能使用，数据对象（data）和方法（methods）
    未初始化，watcher 中的事件都不能获得到；
###created
    实例已经在内存中创建好，数据和方法已经初始化完成，但是模板还未编译，页面还是没
    有内容，还不能对dom 节点进行操作（此时访问this.$el 和this.$refs.xxx 都是
undefined）
###beforeMounte
    找到对应的template 模板，编译成render 函数，转换成虚拟dom，此时模板已经编
    译完成，数据未挂载到页面，也就是说在这个阶段你可以看到标签间的双花括号，数据还
    未渲染到页面中；
    render : h=>h(App)
    在beforeMounte 之后和mounted 之前，还有渲染render 函数，它的作用是把模板
    渲染成虚拟dom。
###mounted
    模板编译好了，虚拟dom 渲染成真正的dom 标签，数据渲染到页面，此时Vue 实例已
    经创建完毕，如果没有其他操作的话，Vue 实例会静静的躺在内存中，一动不动。
    一般会在mounted 中来渲染从后端获取的数据。(页面初始化时，如果有操作dom 的
    事件一般也会放在mounted 钩子函数中。当然，也可以放在create 中，前提需使用
    this.$nextTick(function(){})，在回调函数中操作dom。)
    
## 阶段二：Vue 实例运行阶段
###beforeUpdate
    数据依赖改变或者用$forceUpdata 强制刷新时，对象data 中的数据已经更改（虚拟
    dom 已经重新渲染），但是页面中的值还是原来，未改变，因为此时还未开始渲染dom；
###update
    此时data 中的数据和页面更新完毕，页面已经被重新渲染。
    在实际开发中，一般会用监听器watch 来代替上边2 个方法，因为watch 会知道是哪一
    个数据变化。
    
## 阶段三：Vue 实例销毁阶段
###beforeDestroy
    实例销毁前使用，在此刻实例还是可用的。
###destroyed
    Vue 实例被销毁，观察者、子组件、事件监听被清除（页面数据不会消失，只不过是响应
    式无效了）。