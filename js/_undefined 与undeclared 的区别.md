已在作用域中声明但还没有赋值的变量，是undefined 的。相反，还没有在作用域中声明
过的变量，是undeclared 的。对于undeclared 变量的引用，浏览器会报引用错误，如
ReferenceError: b is not defined 。但是我们可以使用typeof 的安全防范机制来避免
报错，因为对于undeclared（或者not defined ）变量，typeof 会返回"undefined"。