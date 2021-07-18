首先Undefined 和Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，
就是undefined 和null。undefined 代表的含义是未定义，null 代表的含义是空对象。一
般变量声明了但还没有定义的时候会返回undefined，null 主要用于赋值给一些可能会返回对
象的变量，作为初始化。undefined 在js 中不是一个保留字，这意味着我们可以使用
undefined 来作为一个变量名，这样的做法是非常危险的，它会影响我们对undefined 值的
判断。但是我们可以通过一些方法获得安全的undefined 值，比如说void 0。当我们对两种
类型使用typeof 进行判断的时候，Null 类型化会返回“object”，这是一个历史遗留的问题。
当我们使用双等号对两种类型的值进行比较时会返回true，使用三个等号时会返回false。