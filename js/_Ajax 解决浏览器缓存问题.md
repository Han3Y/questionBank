1.在ajax 发送请求前加上
anyAjaxObj.setRequestHeader("If-Modified-Since","0")。


2.在ajax 发送请求前加上
anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。


3.在URL 后面加上一个随机数： "fresh=" + Math.random();。


4.在URL 后面加上时间戳："nowtime=" + new Date().getTime();。


5.如果是使用jQuery，直接这样就可以了$.ajaxSetup({cache:false})。这
样页面的所有ajax 都会执行这条语句就是不需要保存缓存记录。