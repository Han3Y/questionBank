创建XMLHttpRequest对象,即创建一个异步调用对象.
创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
设置响应HTTP请求状态变化的函数.
发送HTTP请求.
获取异步调用返回的数据.
使用JavaScript和DOM实现局部刷新.

```js
const SERVER_URL = "/server";
let xhr = new XMLHttpRequest();
// 创建Http 请求xhr.open("GET", SERVER_URL, true);
// 设置状态监听函数
xhr.onreadystatechange = function() {
if (this.readyState !== 4) return;
// 当请求成功时
if (this.status === 200) {
handle(this.response);
} else {
console.error(this.statusText);
}};
// 设置请求失败时的监听函数
xhr.onerror = function() {
console.error(this.statusText);};
// 设置请求头信息xhr.responseType = "json";xhr.setRequestHeader("Accept","application/json");
// 发送Http 请求xhr.send(null);
// promise 封装实现：
function getJSON(url) {
// 创建一个promise 对象
let promise = new Promise(function(resolve, reject) {
let xhr = new XMLHttpRequest();
// 新建一个http 请求
xhr.open("GET", url, true);
// 设置状态的监听函数
xhr.onreadystatechange = function() {
if (this.readyState !== 4) return;
// 当请求成功或失败时，改变promise 的状态
if (this.status === 200) {
resolve(this.response);
} else {
reject(new Error(this.statusText));
}
};
// 设置错误监听函数
xhr.onerror = function() {
reject(new Error(this.statusText));
};
// 设置响应的数据类型
xhr.responseType = "json";
// 设置请求头信息
xhr.setRequestHeader("Accept", "application/json");
// 发送http 请求
xhr.send(null);
});
return promise;}
```