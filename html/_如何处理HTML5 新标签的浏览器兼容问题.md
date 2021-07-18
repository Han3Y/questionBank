IE6/IE7/IE8 支持通过document 方法产生的标签，利用这一特性让这些
浏览器支持HTML5 新标签；
使用静态资源的html5shiv 包：
1. 在<head> 中调用以下代码：
<!--[if lt IE9]>
<script
src="http://cdn.static.runoob.com/libs/html5shiv/3.7/html5shiv.min.js"
></script>
<![endif]-->