标准内置对象的分类
（1）值属性，这些全局属性返回一个简单值，这些值没有自己的属性和方法。例如Infinity、
NaN、undefined、null 字面量
（2）函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行结束后会将结果
直接返回给调用者。例如eval()、parseFloat()、parseInt() 等
（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和
错误对象。例如Object、Function、Boolean、Symbol、Error 等
（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。例如Number、Math、Date
（5）字符串，用来表示和操作字符串的对象。例如String、RegExp
（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，
以及类数组结构的对象。例如Array
（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元
素。例如Map、Set、WeakMap、WeakSet
（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。例如SIMD 等
（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用JSON 编码的数据。
例如JSON 等
（10）控制抽象对象例如Promise、Generator 等
（11）反射，例如Reflect、Proxy
（12）国际化，为了支持多语言处理而加入ECMAScript 的对象。例如Intl、Intl.Collator
等
（13）WebAssembly
（14）其他 例如arguments