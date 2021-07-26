https://www.zhihu.com/question/21861899
1.简单解释
　　简单来说，escape是对字符串(string)进行编码(而另外两种是对URL)，作用是让它们在所有电脑上可读。
　　编码之后的效果是%XX或者%uXXXX这种形式。
　　其中 ASCII字母、数字、@*/+ ，这几个字符不会被编码，其余的都会。
　　最关键的是，当你需要对URL编码时，请忘记这个方法，这个方法是针对字符串使用的，不适用于URL。

2.   encodeURI和encodeURIComponent
　　对URL编码是常见的事，所以这两个方法应该是实际中要特别注意的。
　　它们都是编码URL，唯一区别就是编码的字符范围，其中
　　encodeURI方法不会对下列字符编码 ASCII字母、数字、~!@#$&*()=:/,;?+'
　　encodeURIComponent方法不会对下列字符编码 ASCII字母、数字、~!*()'
也就是encodeURIComponent编码的范围更广，会将http://XXX中的//也编码，会导致URL不可用。(其实java中的URLEncoder.encode(str,char)也类似于这个方法，会导致URL不可用)