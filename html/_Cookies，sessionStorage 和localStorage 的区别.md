### 共同点：
都是保存在浏览器端，且是同源的。

### 区别：

##存储位置不同：
cookies 是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http 请求中携带， 即cookies 在浏览器和服务器间来回传递， 而sessionStorage 和localStorage 不会自动把数据发给服务器，仅在本地保存。
##存储大小的限制不同：
cookie 保存的数据很小，不能超过4k，而sessionStorage 和localStorage 保存的数据大，可达到5M。
##数据的有效期不同：
cookie 在设置的cookie 过期时间之前一直有效，即使窗口或者浏览器关闭。sessionStorage 仅在浏览器窗口关闭之前有效。localStorage 始终有效，
窗口和浏览器关闭也一直保存，用作长久数据保存。
##作用域不同：
cookie 在所有的同源窗口都是共享；sessionStorage 不在不同的浏览器共享，即使同一页面；localStorage 在所有同源窗口都是共享。