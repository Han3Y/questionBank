一个拥有length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数
组类似，但是不能调用数组的方法。常见的类数组对象有arguments 和DOM 方法的返回结果，
还有一个函数也可以被看作是类数组对象，因为它含有length 属性值，代表可接收的参数个
数。
常见的类数组转换为数组的方法有这样几种：
（1）通过call 调用数组的slice 方法来实现转换
Array.prototype.slice.call(arrayLike);
（2）通过call 调用数组的splice 方法来实现转换
Array.prototype.splice.call(arrayLike, 0);
（3）通过apply 调用数组的concat 方法来实现转换
Array.prototype.concat.apply([], arrayLike);
（4）通过Array.from 方法来实现转换
Array.from(arrayLike);