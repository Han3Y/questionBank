## 1.webpack中的Module是指什么

webpack支持esmodule,commonjs,amd,assests(image,font,video,audio,json)

1.esmodule

关键字 export,允许将esmodule中内容暴露给其他模块
关键字 import

// package.json
type: module -> esmodule
type: commonjs -> CommonJS

2.CommonJS

module.exports, 允许将CommonJS中的内容暴露给其他模块

require

## 所以weback modules如何表达自己的各种依赖关系？
* esmodule import
* commonJS require
* amd define require
* css/sass/less @import

### 常说的chunk 和 bundle的区别是什么

1. chunk
    chunk是webpack打包过程中modules的集合，是（打包过程中）的概念
    webpack的打包是从一个入口模块还是，入口模块引用其他模块，其他模块引用其他模块
    webpack 通引用关系逐个打包模块，这些module就形成了一个chunk
    如果有多个入口模块，会产出多条打包路径，每条路径都会形成一个chunk

2. bundle
    是最终输出的一个或者多个打包好的文件
    
3. chunk 和 bundle的关系是什么

    大多数情况下，一个chunk会产生一个bundle,但是也有例外
    
    如果加了sourcemap，一个entry，一个chunk对应两个bundle
    
    chunk 是过程中代码块，bundle是打包结果输出的代码块，chunk在构建成完就呈现为bundle
    
4. split chunk

## plugin 和 loader分别是做什么的 

1.loader 

模块转换器，将非js模块转化为webpack能识别的js模块

本质上，webpack loader将所有类型的文件，转换为应用程序的依赖图可以直接引用的模块

2. plugin

扩展插件，webpack运行的各个阶段，都会广播出对应的事件，插件去监听对应的事件。

3. compiler

对象，包含了webpack环境的所有配置信息，包含options loader plugins

webpack 启动的时候实例化，它在全局是唯一的，可以把他理解为webpack的实例

4. compliation

包含了当前的模块资源，编译生成资源。

webpack 在开发模式下运行的时候，每当检测到一个文件编号，就会创建一次新的compliation.

## 简单描述一下webpack的打包过程

1. 初始化参数： shell webpack.config.js
2. 开始编辑： 初始化一个compiler对象，加载所有的配置，开始执行编译
3. 确定入口：更加entry中的配置，找出所有的入口文件
4. 编译模块： 从入口文件开始，调用所有的loader,再去递归的找依赖
5. 完成模块编译： 得到每个模块被编译后的最终内容以及他们之间的依赖关系
6. 输出资源：根据得到的依赖关系，组装成一个个包含多个module的chunk
7. 输出完成： 根据配置，确定要输出的文件名以及文件路径

## 实现一个自己的打包工具

## 概览
1. 找到一个入口文件
2. 解析这个入口文件，提起他的依赖
3. 解析入口文件依赖的依赖，递归的去创建一个文件间的依赖图，描述所有文件的依赖关系
4. 把所有文件打包成一个文件

## 开始
1. 新建几个js源文件

* name.js
* mesaage.js
* entry.js

2. 三个文件的依赖关系

entry依赖message.message依赖name
entry.js -> message.js -> name.js

3. 开始编写打包工具，mywebpack.js


4. 分析ast, 思考如何解析entry.js的依赖

file -> program
program -> body 里面是各种语法的描述
ImportDeclaration 引入的声明
ImportDeclaration source属性，source.value 就是引入文件的地址‘./message.js’

5. 生成entry.js 的ast

安装babylon 一个基于babel的js解析工具

6. 基于ast 找到entry.js 的 ImportDeclaration Node

7. 获取entry.js 的依赖

8. 优化createAsset, 使其能够区分文件

要获取所有文件的依赖，所以需要一个id来标识所有文件

用一个简单的自增number,这样遍历的每个文件id就唯一了

先获取到entry.js的id filename 以及dependencies

9.获取到单个文件的依赖了，接下来尝试建立依赖图

新增一个函数createGraph, 把createAsset调用移入createGraph.

entry的路径需要是动态的，所以createGraph接收一个参数entry

10. 上面存储的都是相对路径，想办法把他们转为绝对路径，有了绝对路径，才能获取到各个文件的asset

11. 需要一个map.记录depend中的相对路径和childAsset的对应关系
因为后面要做依赖的引入，需要这样的一个对应关系

12. 开始遍历所有文件

13. 新增一个方法 bundle

14. 创建整体的结果代码
 因为需要接收参数，且需要立即执行。所以用一个自执行函数来包裹。
 自执行函数接收的参数是module, 是每一个文件模块
 
 15. 编译源代码
 
 16. 把编译后的代码加入result中
 CommonJS的规范要求：
 1.module变量代表当前模块
 
 这个变量是一个对象，它的exports属性是对外的接口，module.exports，加载某个模块，其实就是加载该模块的module.exports属性
 
 2. require方法用于加载模块
 