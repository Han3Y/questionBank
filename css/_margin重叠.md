在BFC布局规则中提到内部Box垂直方向距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。

## margin重叠三个条件
    1、属于同一个BFC
    
    2、相邻的Box
    
    3、块级元素
    
## 解决办法
    用新的BFC来隔开