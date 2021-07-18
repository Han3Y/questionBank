在线情况下，浏览器发现HTML 头部有manifest 属性，它会请求manifest 文件，如
果是第一次访问，那么浏览器就会根据manifest 文件的内容下载相应的资源，并进行离
线存储。如果已经访问过并且资源已经离线存储了，那么浏览器就会使用离线的资源加载
页面。然后浏览器会对比新的manifest 文件与旧的manifest 文件，如果文件没有发生
改变，就不会做任何操作，如果文件改变了，那么就会重新下载文件中的资源，并且进行
离线存储。
在页面头部加入manifest 属性
1<html manifest='cache.manifest'>
在cache.manifest 文件中编写离线存储的资源
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
Resourse/logo.png
FALLBACK:
//offline.html