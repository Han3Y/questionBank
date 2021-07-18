## 1、减少不必要渲染，如用shouldComponentUpdate、PureComponent、React.memo实现

## 2、数据缓存
    - useMemo 缓存参数、useCallback 缓存函数
    - 函数、对象尽量不要使用内联形式(如context 的value object、refs function)
    - Route 中的内联函数渲染时候使用render 或者children，不要使用component，
    当你用component 的时候，Router 会用指定的组件和React.createElement 创建一个新
    的[React elment]。这意味着当你提供的是一个内联函数的时候，每次创建render 都会创建一个新的组件。这会导致不再更新已经现有组件，⽽是直接卸载然后再去挂载⼀个新的组件。因此，当⽤到内联函数的内联渲染时，请使⽤render 或者children
    
## 3、不要滥用功能项，如context、props 等
## 4、懒加载，对于长页表分页加载
## 5、减少http 请求