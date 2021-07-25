this === window ? 'browser' : 'node';
通过判断Global 对象是否为window，如果不为window，当前脚本没有运行在浏览器中